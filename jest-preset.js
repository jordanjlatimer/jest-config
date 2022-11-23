const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  transform: tsjPreset.transform,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ["text"],
  coverageProvider: "v8",
};
