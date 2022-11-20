const { defaults: tsjPreset } = require("ts-jest/presets")
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  transform: tsjPreset.transform,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ["text"],
  coverageProvider: "v8",
};
