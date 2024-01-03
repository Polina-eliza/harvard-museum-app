/* eslint-disable no-undef */
module.exports = {
  testEnvironment        : 'jest-environment-jsdom-global',
  moduleFileExtensions : ['js', 'json', 'vue'],
  transform            : {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$' : '@vue/vue3-jest',
    '.+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
  },
  testPathIgnorePatterns : [
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns : [
    '<rootDir>/node_modules/@regru/?!(@meforma/vue-toaster)',
  ],
  setupFiles : [
    '<rootDir>/src/jest.setup.js',
  ],
};
