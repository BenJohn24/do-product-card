module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment:'jest-environment-jsdom',
    setupFiles:['./jest.setup.js'],
  
  
  };