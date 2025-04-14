module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["/workspace/admin/test-ci/frontend/src/setupTests.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};