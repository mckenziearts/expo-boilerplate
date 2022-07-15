module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        extensions: ['.ios.ts', '.ios.tsx', '.ts', '.tsx', '.android.ts', '.android.tsx', '.json'],
        alias: {
          "@": "./src",
          "@images": "./src/images",
          '@components': './src/components',
          "@locales": "./src/locales",
          "@screens": "./src/screens",
          "@store": "./src/store",
          "@utilities": "./src/utilities"
        }
      }],
    ]
  };
};
