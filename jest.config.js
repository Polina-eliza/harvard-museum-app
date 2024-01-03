module.exports = {
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.js$': 'babel-jest',
      '.+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    },
    moduleFileExtensions: ['js', 'json', 'ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@meforma/vue-toaster).+\\.js$"
    ],
    setupFiles: ['./src/jest.setup.js']
  };
