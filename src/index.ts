exports.main = function (modules: any, dirname: string, port: number) {
	const importmodules = require("./importmodules.js").main; // this is the function that imports the modules
	const servesite = require("./servesite.js").main; // this is the function that uses the modules to serve the site
	const http = require("http"); // http server
	const ejs = require("./ejs/ejs.js"); // templating engine
	const clone = require("./git-clone/index.js"); // clone from git sources
	const version = "1.1.0"; // verison number
	importmodules(modules, dirname, clone); // import the modules
	const error = require(dirname + "/modules/" + modules.errorHandler.module + "/index.js"); // get the error handler
	http.createServer(function (req, res) {
		const host = req.headers.host; // this is the host
		res.setHeader("X-Powered-By", "nodejs@wgytcraft/hosting");
		servesite(host, res, req, error, modules, version, ejs, dirname); // serve the site
	}).listen(port);
};
