/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //在rules中添加自定义规则
    // 添加组件命名忽略规则
    // "vue/multi-word-component-names": ["error", {
    //     "ignores": ["index", "main"]//需要忽略的组件名
    // }],
    "vue/multi-word-component-names": 'off',
    "vue/no-multiple-template-root": 'off',
    "no-undef": 'off',
    "no-unused-vars": "off"
},
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
