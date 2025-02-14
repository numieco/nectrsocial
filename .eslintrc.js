module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: 0,
    'vue/no-v-html': 0,
    'vue/html-self-closing': 0,
    'space-before-function-paren': 0,
    'no-console': 0,
    'operator-linebreak': 0,
    'sort-keys': [0, 'asc', { caseSensitive: true, natural: true, minKeys: 2 }],
    'vue/attributes-order': [2, { alphabetical: true }],
    'vue/no-vue-html': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-closing-bracket-newline': [
      'warn',
      { singleline: 'never', multiline: 'never' },
    ],
    // 'vue/singleline-html-element-content-newline': [
    //   'error',
    //   {
    //     ignoreWhenNoAttributes: false,
    //     ignoreWhenEmpty: false,
    //     ignores: ['pre', 'textarea']
    //   }
    // ]
  },
  overrides: [
    {
      files: [''], // *filename
      rules: {
        'eslint-disable-file': 'off',
      },
    },
  ],
}
