var ncp = require("../libs/ncp/ncp.js");
var fs = require("fs");
module.exports = function (modules: any, dirname: string, clone: any) {
  async function asnc(url, directory) {
    await clone(
      url,
      directory.replace("gh://", "").replace("bb://", "").replace("gl://", ""),
      { shallow: true },
      function () {}
    );
  }
  for (let module of modules.moduleList) {
    // for each module
    let toClone = true; // clone by default
    var url = "";
    if (module.startsWith("gh://")) {
      // github stuff
      url = module.replace("gh://", "git://github.com/");
      url = `${url}.git`;
    } else if (module.startsWith("gl://")) {
      // gitlab stuff
      url = module.replace("gl://", "git://gitlab.com/");
      url = `${url}.git`;
    } else if (module.startsWith("bb://")) {
      // bitbucket stuff
      var f = module.split("/");
      url = `https://${f[2]}@bitbucket.org/${module.replace("bb://", "")}`;
    } else if (module.startsWith("local://")) {
      // local modules
      let toClone = false; // don't clone
    } else if (module.startsWith("npm://")) {
      // npm modules
      let toClone = false; // don't clone
      fs.rmdirSync(
        `${dirname}/modules/${module.replace("@", "").replace("npm://", "")}`,
        { recursive: true }
      );
      ncp(
        `${dirname}/node_modules/${module.replace("npm://", "")}`,
        `${dirname}/modules/${module.replace("@", "").replace("npm://", "")}`,
        function (err) {
          if (err) {
            return console.error(err);
          }
          console.log("done!");
        }
      );
    }
    var directory = `${dirname}/modules/${module}`;
    if (toClone) {
      // clone it
      asnc(url, directory);
    }
  }
};
