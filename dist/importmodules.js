var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var ncp = require("../libs/ncp/ncp.js");
var fs = require("fs");
exports.main = function (modules, dirname, clone) {
  function asnc(url, directory) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              clone(
                url,
                directory
                  .replace("gh://", "")
                  .replace("bb://", "")
                  .replace("gl://", ""),
                { shallow: true },
                function () {}
              ),
            ];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  }
  for (var _i = 0, _a = modules.moduleList; _i < _a.length; _i++) {
    var module_1 = _a[_i];
    // for each module
    var toClone = true; // clone by default
    var url = "";
    if (module_1.startsWith("gh://")) {
      // github stuff
      url = module_1.replace("gh://", "git://github.com/");
      url = url + ".git";
    } else if (module_1.startsWith("gl://")) {
      // gitlab stuff
      url = module_1.replace("gl://", "git://gitlab.com/");
      url = url + ".git";
    } else if (module_1.startsWith("bb://")) {
      // bitbucket stuff
      var f = module_1.split("/");
      url =
        "https://" + f[2] + "@bitbucket.org/" + module_1.replace("bb://", "");
    } else if (module_1.startsWith("local://")) {
      // local modules
      var toClone_1 = false; // don't clone
    } else if (module_1.startsWith("npm://")) {
      // npm modules
      var toClone_2 = false; // don't clone
      fs.rmdirSync(
        dirname + "/modules/" + module_1.replace("@", "").replace("npm://", ""),
        { recursive: true }
      );
      ncp(
        dirname + "/node_modules/" + module_1.replace("npm://", ""),
        dirname + "/modules/" + module_1.replace("@", "").replace("npm://", ""),
        function (err) {
          if (err) {
            return console.error(err);
          }
          console.log("done!");
        }
      );
    }
    var directory = dirname + "/modules/" + module_1;
    if (toClone) {
      // clone it
      asnc(url, directory);
    }
  }
};
//# sourceMappingURL=importmodules.js.map
