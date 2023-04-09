module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "max-len": ["warn", 120],
        "max-lines": ["warn", 92],
        "eol-last": ["warn", "always"],
        "indent": ["warn", 4],
        "quotes": ["warn", "double"],
        "semi": "off",
        "@typescript-eslint/semi": "warn"
    },
    reportUnusedDisableDirectives: true,
    noInlineConfig: false
};
