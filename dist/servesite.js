/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = function (
  host,
  res,
  req,
  error,
  modules,
  version,
  ejs,
  dirname
) {
  if (modules.website.includes(host) === true) {
    // if the site is in modulesjson
    var module_1 = modules.websiteData[host].module;
    var config = modules.websiteData[host].config;
    var globalConfig = modules.globalConfig;
    var ultimateConfig = Object.assign(globalConfig, config);
    var sitemodule = require(dirname + "/modules/" + module_1 + "/index.js");
    sitemodule(host, res, req, error, version, ejs, ultimateConfig); // serve the site
  } else {
    // otherwise throw error
    error(
      host,
      res,
      req,
      501,
      "site doesn't exist :(",
      version,
      ejs,
      modules.errorHandler.config
    );
  }
};
//# sourceMappingURL=servesite.js.map
