/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'standard',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    'vue/multi-word-component-names': 'off', //允許使用單一單字的組件名稱。
    'vue/no-reserved-component-names': 'off', // 允許使用保留的組件名稱
    'no-tabs': 'off', // 強制統一使用空格來縮進。
    'space-before-function-paren': 0 // 函數括號前的空格的檢查設為0
  }
}
