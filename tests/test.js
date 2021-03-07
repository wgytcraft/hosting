const fs = require('fs-extra');
var {main} = require('../dist/index.js');
main(JSON.parse(fs.readFileSync('modules/modules.json')),__dirname)
