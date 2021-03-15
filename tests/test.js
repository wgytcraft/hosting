const fs = require("fs");
var wgytcraft = require("../src/index.js").main;
wgytcraft(
  JSON.parse(fs.readFileSync("/tests/modules/modules.json")),
  __dirname,
  "3000"
);
