# __webpack_require__

> require函数，用以加载模块

参数：

name      |type         |description
----------|-------------|-----------------
moduleId  |string       |module id

返回值：

name    |type           |description
--------|---------------|------------------
exports |object         |return the exports of the module

```
function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/
                if (installedModules[moduleId]) {
                        /******/
                        return installedModules[moduleId].exports;
                        /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/
                var module = installedModules[moduleId] = {
                        /******/
                        i: moduleId,
                        /******/
                        l: false,
                        /******/
                        exports: {}
                        /******/
                };
                /******/
                /******/ // Execute the module function
                /******/
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/
                module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/
                return module.exports;
                /******/
        }
```
