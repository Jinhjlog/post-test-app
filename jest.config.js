/** @type {import('@jest/types').Config.ProjectConfig} */
module.exports = {
  preset: "jest-expo",
  setupFiles: ["<rootDir>/test/setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@domain/(.*)$": "<rootDir>/app/domain/$1",
    "^@infrastructure/(.*)$": "<rootDir>/app/infrastructure/$1",
  },
}
