module.exports = {
    "*.{ts,tsx}": [
      () => "npm run tscheck",
      "npm run lint-fix",
    ]
};