module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@features': './src/features',
            '@components': './src/components',
            '@screens': './src/screens',
            '@infrastructure': './src/infrastructure',
          },
        },
      ],
    ],
  };
};
