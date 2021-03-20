const fs = require("fs");
var wgytcraft = require("..\\dist\\index.js");
wgytcraft(
  JSON.parse(fs.readFileSync(__dirname + "\\modules\\modules.json")),
  __dirname,
  "3000"
);
