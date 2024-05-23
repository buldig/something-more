module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "no-underscore-dangle": "off",
        "i18next/no-literal-string": ["error", { markupOnly: true }]
    }
}
