modules.exports = function (modules, dirname, port) {
  var importmodules = require("./importmodules.js").main; // this is the function that imports the modules
  var servesite = require("./servesite.js").main; // this is the function that uses the modules to serve the site
  var http = require("http"); // http server
  var ejs = require("../libs/ejs/ejs.js"); // templating engine
  var clone = require("../libs/git-clone/index.js"); // clone from git sources
  var mime = require("../libs/mime/mime.js"); // mime library
  var version = "1.1.0"; // verison number
  var fs = require("fs");
  importmodules(modules, dirname, clone); // import the modules
  var error = require(dirname +
    "/modules/" +
    modules.errorHandler.module +
    "/index.js"); // get the error handler
  http
    .createServer(function (req, res) {
      var host = req.headers.host; // this is the host
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
            'attachment; filename="' + filename + '"',
            headers
          );
        } else {
          res.setHeader(status, "Content-Disposition", "attachment", headers);
        }
        res.setHeader("Content-Type", mime.getType(file));
        res.write(fs.readFileSync(file));
        res.end();
      };
      servesite(host, res, req, error, modules, version, ejs, dirname); // serve the site
    })
    .listen(port);
};
