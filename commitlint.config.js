module.exports = {
  'extends': [
    '@commitlint/config-conventional'
  ],
  // Overrides `@commitlint/config-conventional`, because
  // `cz-lerna-changelog`'s default questions are slightly
  // different from that of `cz-conventional-changelog`.
  // We can also override other rules: http://t.cn/EM2aRQs
  rules: {
    // fix `WIP`
    'type-case': [2, 'always', ['lower-case', 'upper-case']],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 发布新功能
        'fix',  // bug 修复
        'docs',  // 文档
        'style',  // 代码格式
        'refactor', // 代码重构
        'perf',
        'test',   // 增加测试
        'chore',  // 构建过程或辅助工具的变动
        'revert',
        'WIP'
      ]
    ]
  }
};
