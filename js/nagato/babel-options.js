module.exports = {
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ],
  "plugins": [
    "transform-object-assign",
    "transform-function-bind",
    "transform-runtime",
    "transform-class-properties"
  ]
}
