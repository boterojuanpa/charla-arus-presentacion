module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        "linebreak-style": 0,
        "comma-dangle": 0,
        "arrow-body-style": ["error", "always"],
        "padded-blocks": 0,
        indent: ["error", 4],
        "max-len": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        radix: 0,
        "class-methods-use-this": [0],
        quotes: [0, "double"]
    },
};
