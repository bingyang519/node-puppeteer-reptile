module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      },
};
