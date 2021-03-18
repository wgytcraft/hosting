# 1hostjs tests

## How to test a module

- edit modules/modules.json to test different modules
- run test.js and go to http://localhost:3000
- look for the correct things

## test a release

- get the release
- make modules/modules.json

```json
{
  "version": "1.1.0-beta",
  "moduleList": [
    "gh://1hostjs/errors",
    "gh://1hostjs/hello-world-template"
  ],
  "errorHandler": {
    "module": "1hostjs/errors",
    "config": {}
  },
  "website": ["test.wgyt.tk"],
  "websiteData": {
    "test.wgyt.tk": {
      "module": "1hostjs/hello-world-template",
      "config": {}
    }
  }
}
```

replacing test.wgyt.tk with the domain you are testing on

- run test.js and go to http://localhost:3000
- look for the correct things
- publish
