exports.main = function (modules, dirname, port) {
    var importmodules = require("./importmodules.js").main; // this is the function that imports the modules
    var servesite = require("./servesite.js").main; // this is the function that uses the modules to serve the site
    var http = require("http"); // http server
    var ejs = require("../libs/ejs/ejs.js"); // templating engine
    var clone = require("../libs/git-clone/index.js"); // clone from git sources
    var version = "1.1.0"; // verison number
    importmodules(modules, dirname, clone); // import the modules
    var error = require(dirname +
        "/modules/" +
        modules.errorHandler.module +
        "/index.js"); // get the error handler
    http
        .createServer(function (req, res) {
        var host = req.headers.host; // this is the host
        res.setHeader("X-Powered-By", "nodejs@wgytcraft/hosting");
        servesite(host, res, req, error, modules, version, ejs, dirname); // serve the site
    })
        .listen(port);
};
//# sourceMappingURL=index.js.map