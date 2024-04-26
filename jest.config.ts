import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "babel",
  testEnvironment: "./jest.environment.js",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};

export default createJestConfig(config);
