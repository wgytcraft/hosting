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
    const module = modules.websiteData[host].module;
    const config = modules.websiteData[host].config;
    const globalConfig = modules.globalConfig;
    const ultimateConfig = Object.assign(globalConfig, config);
    const sitemodule = require(`${dirname}/modules/${module}/index.js`);
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
