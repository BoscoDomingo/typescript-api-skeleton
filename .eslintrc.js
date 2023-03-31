module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    "overrides": [
        {
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
        {
          "files": ["test/**"],
          "plugins": ["jest"],
          "extends": ["plugin:jest/recommended"],
          "rules": { "jest/prefer-expect-assertions": "off" }
        },
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
