module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended'
    ],
    parser: "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/no-multiple-template-root": 0
    },
    "globals": {
        defineOptions: 'writable'
    }
}
