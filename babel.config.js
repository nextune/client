module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js'],
          root: ['./src'],
        }
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
