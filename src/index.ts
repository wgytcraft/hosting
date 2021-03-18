modules.exports = function (modules: any, dirname: string, port: number) {
  const importmodules = require("./importmodules.js").main; // this is the function that imports the modules
  const servesite = require("./servesite.js").main; // this is the function that uses the modules to serve the site
  const http = require("http"); // http server
  const ejs = require("../libs/ejs/ejs.js"); // templating engine
  const clone = require("../libs/git-clone/index.js"); // clone from git sources
  const mime = require("../libs/mime/mime.js"); // mime library
  const fs = require("fs");
  const version = "1.1.0"; // verison number
  importmodules(modules, dirname, clone); // import the modules
  const error = require(dirname +
    "/modules/" +
    modules.errorHandler.module +
    "/index.js"); // get the error handler
  http
    .createServer(function (req, res) {
      const host = req.headers.host; // this is the host
      res.setHeader("X-Powered-By", "nodejs@wgytcraft/hosting");
      res.send = function (status, headers, data) {
        res.writeHead(status, headers);
        res.write(data);
        res.end();
      };
      res.json = function (status, headers, data) {
        res.writeHead(status, headers);
        res.setheader("Content-Type", "application/json");
        res.write(data);
        res.end();
      };
      res.xml = function (status, headers, data) {
        res.writeHead(status, headers);
        res.setheader("Content-Type", "application/xml");
        res.write(data);
        res.end();
      };
      res.sendFile = function (status, headers, file) {
        res.writeHead(status, headers);
        res.write(fs.readFileSync(file));
        res.setHeader("Content-Type", mime.getType(file));
        res.end();
      };
      res.redirect = function (permanent, url) {
        if (permanent) {
          res.writeHead(301, {
            Location: url,
          });
        } else {
          res.writeHead(302, {
            Location: url,
          });
        }
        res.end();
      };
      res.download = function (status, headers, file, filename) {
        if (filename) {
          res.setHeader(
            status,
            "Content-Disposition",
            `attachment; filename="${filename}"`,
            headers
          );
        } else {
          res.setHeader(status, "Content-Disposition", `attachment`, headers);
        }
        res.setHeader("Content-Type", mime.getType(file));
        res.write(fs.readFileSync(file));
        res.end();
      };
      servesite(host, res, req, error, modules, version, ejs, dirname); // serve the site
    })
    .listen(port);
};
