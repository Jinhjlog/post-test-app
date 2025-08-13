/** @type {import('@babel/core').TransformOptions} */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-transform-class-properties", { loose: true }],
    ],
  }
}
