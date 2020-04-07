'use strict';

var types = require('@babel/types');

var buildImportAssignment = function (id, source) {
  return types.variableDeclaration('var', [
    types.variableDeclarator(
      types.identifier(id),
      types.callExpression(
        types.identifier('require'),
        [types.stringLiteral(source)]
      )
    )
  ]);
};

var buildExportsAssignment = function(node, property) {
  var moduleExports = types.memberExpression(
    types.identifier('module'),
    types.identifier('exports')
  );
  var left = !property
    ? moduleExports
    : types.memberExpression(
        moduleExports,
        types.identifier(property)
      );
  return types.expressionStatement(
    types.assignmentExpression(
      '=',
      left,
      node
    )
  );
};

var importDeclarationVisitor = function(path) {
  var importSource = path.node.source.value;
  var defaultSpecifier = path.get('specifiers')[0];
  defaultSpecifier.assertImportDefaultSpecifier();

  path.replaceWith(
    buildImportAssignment(
      defaultSpecifier.get('local').get('name').node,
      importSource
    )
  );
};

var exportDefaultDeclarationVisitor = function(path) {
  var declaration = path.get('declaration');

  if (declaration.isFunctionDeclaration()) {
    var id = declaration.node.id;

    if (id) {
      path.replaceWithMultiple([
        declaration.node,
        buildExportsAssignment(types.identifier(id.name))
      ]);
    } else {
      path.replaceWith(
        buildExportsAssignment(declaration)
      );
    }
  } else if (declaration.isClassDeclaration()) {
    throw path.buildCodeFrameError('Exporting ClassDeclaration is not implemented');
  } else {
    path.replaceWith(
      buildExportsAssignment(declaration.node)
    );
  }
};

var exportNamedDeclarationVisitor = function(path, state) {
  var defaultReexportSpecifier = path.get('specifiers')[0];
  var local = defaultReexportSpecifier.get('local').get('name').node;
  var exported = defaultReexportSpecifier.get('exported').get('name').node;
  
  if (local !== 'default') {
    throw path.buildCodeFrameError('Only named exports allowed are reexports in index.js');
  }

  state.set('reexports', true);
  path.replaceWith(
    buildExportsAssignment(
      types.callExpression(
        types.identifier('require'),
        [types.stringLiteral(path.node.source.value)]
      ),
      exported
    )
  );
};

module.exports = function() {
  return {
    visitor: {
      Program: {
        enter: function(path) {
          path.scope.rename('module');
          path.scope.rename('exports');
          path.scope.rename('require');
        },
        exit: function(path, state) {
          if (!state.get('reexports')) {
            return;
          }

          path.unshiftContainer(
            'body',
            buildExportsAssignment(
              types.objectExpression([])
            )
          );
        }
      },
      ImportDeclaration: importDeclarationVisitor,
      ExportDefaultDeclaration: exportDefaultDeclarationVisitor,
      ExportNamedDeclaration: exportNamedDeclarationVisitor,
    }
  };
};