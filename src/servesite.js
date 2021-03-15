exports.main = function (
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
    var module = modules.websiteData[host].module;
    var config = modules.websiteData[host].config;
    var sitemodule = require(`${dirname}/modules/${module}/index.js`);
    sitemodule(host, res, req, error, version, ejs, config); // serve the site
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
