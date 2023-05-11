module.exports = {
    "*.{js,jsx}": [
      () => 
      "npm run lint-fix",
    ],
    // '*.{ts,tsx}': [
    //   () => 
    //   'npx tsc -p tsconfig.json --noEmit'
    // ],
};