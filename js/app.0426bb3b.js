/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d0d7699":"a087da1a","chunk-2d21a3d2":"e131bd39","chunk-3cf640af":"9f579676","chunk-5f4ad635":"2dff74b0","chunk-6fc0a25f":"002694e1","chunk-72449522":"ea4e5ac5","chunk-9937b244":"3642b9c9","chunk-c420df12":"7a195647","chunk-cfa57870":"876f089f"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-6fc0a25f":1,"chunk-9937b244":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d0d7699":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-3cf640af":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-6fc0a25f":"d2b7d3dc","chunk-72449522":"31d6cfe0","chunk-9937b244":"9b7a00d7","chunk-c420df12":"31d6cfe0","chunk-cfa57870":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/minin-crm/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "02ed":
/***/ (function(module) {

module.exports = JSON.parse("{\"labelName\":\"Имя\",\"profileSubmitButton\":\"Обновить\",\"profilePageName\":\"Профиль\",\"menuBill\":\"Счет\",\"menuHistory\":\"История\",\"menuPlanning\":\"Планирование\",\"menuRecord\":\"Новая запись\",\"menuCategories\":\"Категории\",\"profilePageTitle\":\"Профиль\"}");

/***/ }),

/***/ "0a8f":
/***/ (function(module) {

module.exports = JSON.parse("{\"labelName\":\"Name\",\"profileSubmitButton\":\"update\",\"profilePageName\":\"Profile\",\"menuBill\":\"bill\",\"menuHistory\":\"history\",\"menuPlanning\":\"planning\",\"menuRecord\":\"New record\",\"menuCategories\":\"categories\",\"profilePageTitle\":\"Profile\"}");

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.cjs.js
var index_cjs = __webpack_require__("59ca");
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js
var index_esm = __webpack_require__("ea7b");

// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.esm.js
var dist_index_esm = __webpack_require__("66ce");

// CONCATENATED MODULE: ./src/store/auth.js






/* harmony default export */ var auth = ({
  state: {},
  mutations: {},
  actions: {
    login: function login(_ref, _ref2) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dispatch, commit, email, password;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _ref.dispatch, commit = _ref.commit;
                email = _ref2.email, password = _ref2.password;
                console.log('async login');
                _context.prev = 3;
                _context.next = 6;
                return index_cjs_default.a.auth().signInWithEmailAndPassword(email, password);

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                commit('setError', _context.t0); //commit - Запуск мутации.

                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 8]]);
      }))();
    },
    isPromise: function isPromise() {
      return 'skotnik';
    },
    getUserId: function getUserId() {
      var user = index_cjs_default.a.auth().currentUser; // console.log('userId', user.uid)

      return user ? user.uid : null;
    },
    logout: function logout(_ref3) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit;
                _context2.next = 3;
                return index_cjs_default.a.auth().signOut();

              case 3:
                commit('clearInfo');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    register: function register(_ref4, _ref5) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var dispatch, commit, email, password, name, uid;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch = _ref4.dispatch, commit = _ref4.commit;
                email = _ref5.email, password = _ref5.password, name = _ref5.name;
                _context3.prev = 2;
                _context3.next = 5;
                return index_cjs_default.a.auth().createUserWithEmailAndPassword(email, password);

              case 5:
                _context3.next = 7;
                return dispatch('getUserId');

              case 7:
                uid = _context3.sent;
                //dispatch - Запуск действия.
                console.log('uid', uid);
                _context3.next = 11;
                return index_cjs_default.a.database().ref("users/".concat(uid, "/info")).set({
                  bill: 10000,
                  //начальное количество денег на счету
                  name: name //имя пользователя

                });

              case 11:
                //`users/${uid}/info` - путь до базы данных, создаваемой для пользователя 
                console.log('try in register');
                _context3.next = 19;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](2);
                console.log('catch in register');
                commit('setError', _context3.t0); //commit - Запуск мутации.

                throw _context3.t0;

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 14]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/store/info.js



/* harmony default export */ var store_info = ({
  state: {
    info: {//если объект пустой, значит, никаких данных о пользователе у нас нет
    }
  },
  mutations: {
    setInfo: function setInfo(state, info) {
      state.info = info;
    },
    clearInfo: function clearInfo(state) {
      state.info = {};
    }
  },
  actions: {
    fetchInfo: function fetchInfo(ctx) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var uid, info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return ctx.dispatch('getUserId');

              case 3:
                uid = _context.sent;
                _context.next = 6;
                return index_cjs_default.a.database().ref("/users/".concat(uid, "/info")).once('value');

              case 6:
                info = _context.sent.val();
                ctx.commit('setInfo', info); // console.log(info)

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    }
  },
  getters: {
    info: function info(state) {
      return state.info;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./src/store/category.js






/* harmony default export */ var store_category = ({
  actions: {
    fetchCategory: function fetchCategory(ctx, _ref) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var title, limit, uid, category;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = _ref.title, limit = _ref.limit;
                _context.prev = 1;
                _context.next = 4;
                return ctx.dispatch('getUserId');

              case 4:
                uid = _context.sent;
                _context.next = 7;
                return index_cjs_default.a.database().ref("users/".concat(uid, "/categories")).push({
                  title: title,
                  limit: limit
                });

              case 7:
                category = _context.sent;
                return _context.abrupt("return", {
                  title: title,
                  limit: limit,
                  id: category.key
                });

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                ctx.commit('setError', _context.t0);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }))();
    },
    updateCategory: function updateCategory(ctx, _ref2) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var title, limit, id, uid, category;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                title = _ref2.title, limit = _ref2.limit, id = _ref2.id;
                _context2.prev = 1;
                _context2.next = 4;
                return ctx.dispatch('getUserId');

              case 4:
                uid = _context2.sent;
                _context2.next = 7;
                return index_cjs_default.a.database().ref("users/".concat(uid, "/categories")).child(id).update({
                  title: title,
                  limit: limit
                });

              case 7:
                category = _context2.sent;
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                ctx.commit('setError', _context2.t0);
                throw _context2.t0;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }))();
    },
    getCategories: function getCategories(ctx) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var uid, categories;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return ctx.dispatch('getUserId');

              case 3:
                uid = _context3.sent;
                _context3.next = 6;
                return index_cjs_default.a.database().ref("/users/".concat(uid, "/categories")).once('value');

              case 6:
                _context3.t0 = _context3.sent.val();

                if (_context3.t0) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = {};

              case 9:
                categories = _context3.t0;
                return _context3.abrupt("return", Object.keys(categories).map(function (key) {
                  return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, categories[key]), {}, {
                    id: key
                  });
                }));

              case 13:
                _context3.prev = 13;
                _context3.t1 = _context3["catch"](0);
                ctx.commit('setError', _context3.t1);
                throw _context3.t1;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }))();
    },
    getCategoryById: function getCategoryById(ctx, id) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var uid, category;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return ctx.dispatch('getUserId');

              case 3:
                uid = _context4.sent;
                _context4.next = 6;
                return index_cjs_default.a.database().ref("/users/".concat(uid, "/categories")).child(id).once('value');

              case 6:
                _context4.t0 = _context4.sent.val();

                if (_context4.t0) {
                  _context4.next = 9;
                  break;
                }

                _context4.t0 = {};

              case 9:
                category = _context4.t0;
                return _context4.abrupt("return", Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, category), {}, {
                  id: id
                }));

              case 13:
                _context4.prev = 13;
                _context4.t1 = _context4["catch"](0);
                ctx.commit('setError', _context4.t1);
                throw _context4.t1;

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }))();
    }
  },
  getters: {
    getCats: function getCats(state, actions) {
      return actions.getCategories;
    }
  }
});
// CONCATENATED MODULE: ./src/store/record.js







/* harmony default export */ var store_record = ({
  actions: {
    updateInfo: function updateInfo(ctx, toUpdate) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var uid, updateData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return ctx.dispatch('getUserId');

              case 3:
                uid = _context.sent;
                updateData = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, ctx.getters.info), toUpdate); //для того, чтобы обновить info в БД нужно передать туда оба поля: name и bill
                //для этого объединяем исходный объект info с новым toUpdate

                console.log(updateData.name);
                _context.next = 8;
                return index_cjs_default.a.database().ref("users/".concat(uid, "/info")).update(updateData);

              case 8:
                //создаем новое поле в базе данных 
                ctx.commit('setInfo', updateData); //обновляем поле info в $store

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    createRecord: function createRecord(ctx, record) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var uid;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(record);
                _context2.prev = 1;
                _context2.next = 4;
                return ctx.dispatch('getUserId');

              case 4:
                uid = _context2.sent;
                _context2.next = 7;
                return index_cjs_default.a.database().ref("users/".concat(uid, "/records")).push(record);

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }))();
    },
    fetchRecords: function fetchRecords(ctx) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var uid, records;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return ctx.dispatch('getUserId');

              case 3:
                uid = _context3.sent;
                _context3.next = 6;
                return index_cjs_default.a.database().ref("/users/".concat(uid, "/records")).once('value');

              case 6:
                _context3.t0 = _context3.sent.val();

                if (_context3.t0) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = {};

              case 9:
                records = _context3.t0;
                return _context3.abrupt("return", Object.keys(records).map(function (key) {
                  return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, records[key]), {}, {
                    id: key
                  });
                }));

              case 13:
                _context3.prev = 13;
                _context3.t1 = _context3["catch"](0);
                ctx.commit('setError', _context3.t1);
                throw _context3.t1;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }))();
    },
    fetchRecordsById: function fetchRecordsById(ctx, id) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var uid, record;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return ctx.dispatch('getUserId');

              case 3:
                uid = _context4.sent;
                _context4.next = 6;
                return index_cjs_default.a.database().ref("/users/".concat(uid, "/records")).child(id).once('value');

              case 6:
                _context4.t0 = _context4.sent.val();

                if (_context4.t0) {
                  _context4.next = 9;
                  break;
                }

                _context4.t0 = {};

              case 9:
                record = _context4.t0;
                return _context4.abrupt("return", Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, record), {}, {
                  id: id
                }));

              case 13:
                _context4.prev = 13;
                _context4.t1 = _context4["catch"](0);
                ctx.commit('setError', _context4.t1);
                throw _context4.t1;

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js









vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = __webpack_exports__["a"] = (new vuex_esm["a" /* default */].Store({
  state: {
    error: null
  },
  mutations: {
    setError: function setError(state, error) {
      state.error = error;
    },
    clearError: function clearError(state, error) {
      state.error = null;
    }
  },
  getters: {
    error: function error(state) {
      return state.error;
    }
  },
  actions: {
    fetchCurrency: function fetchCurrency() {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var key, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = "49656929fa6f6834e9007f4334997cd3"; //получение ключа из переменной в файле .env, лежащего в корневой парпке приложения

                _context.next = 3;
                return fetch("http://data.fixer.io/api/latest?access_key=".concat(key, "&symbols=USD,EUR,RUB"));

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  modules: {
    auth: auth,
    info: store_info,
    category: store_category,
    record: store_record
  }
}));

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/index.js
var lib = __webpack_require__("1dce");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/vuejs-paginate/dist/index.js
var dist = __webpack_require__("8832");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.esm.js
var vue_meta_esm = __webpack_require__("58ca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=3d77790d&
var Appvue_type_template_id_3d77790d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c(_vm.layout,{tag:"component"},[_c('router-view')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3d77790d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/EmptyLayout.vue?vue&type=template&id=4e6e7fb6&
var EmptyLayoutvue_type_template_id_4e6e7fb6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grey darken-1 empty-layout"},[_c('router-view')],1)}
var EmptyLayoutvue_type_template_id_4e6e7fb6_staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue?vue&type=template&id=4e6e7fb6&

// EXTERNAL MODULE: ./src/utils/messages.js
var messages = __webpack_require__("b444");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/EmptyLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var EmptyLayoutvue_type_script_lang_js_ = ({
  computed: {
    error: function error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error: function error(fbError) {
      console.log(this.$store.getters.error);
      this.$error(messages["a" /* default */][this.$store.getters.error.code] || 'что-то пошло не так');
    }
  }
});
// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_EmptyLayoutvue_type_script_lang_js_ = (EmptyLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_EmptyLayoutvue_type_script_lang_js_,
  EmptyLayoutvue_type_template_id_4e6e7fb6_render,
  EmptyLayoutvue_type_template_id_4e6e7fb6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EmptyLayout = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout.vue?vue&type=template&id=0af77e1d&
var MainLayoutvue_type_template_id_0af77e1d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-main-layout"},[_c('Navbar',{on:{"click":function($event){_vm.isOpen = !_vm.isOpen}}}),_c('Sidebar',{key:_vm.locale,attrs:{"value":_vm.isOpen}}),_vm._v(" "),_c('main',{staticClass:"app-content",class:{full: !_vm.isOpen}},[_c('div',{staticClass:"app-page"},[_c('router-view')],1)]),_c('div',{staticClass:"fixed-action-btn"},[_c('router-link',{directives:[{name:"tooltip",rawName:"v-tooltip",value:('Добавить новую запись'),expression:"'Добавить новую запись'"}],staticClass:"btn-floating btn-large blue",attrs:{"to":"/record"}},[_c('i',{staticClass:"large material-icons"},[_vm._v("add")])])],1)],1)}
var MainLayoutvue_type_template_id_0af77e1d_staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=0af77e1d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar.vue?vue&type=template&id=5dc115d8&
var Sidebarvue_type_template_id_5dc115d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"sidenav app-sidenav",class:{open: _vm.value}},_vm._l((_vm.links),function(item){return _c('router-link',{key:item.url,attrs:{"tag":"li","active-class":"active","to":item.url,"exact":item.exact}},[_c('a',{staticClass:"waves-effect waves-orange pointer",attrs:{"href":"#"}},[_vm._v(_vm._s(item.title))])])}),1)}
var Sidebarvue_type_template_id_5dc115d8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Sidebar.vue?vue&type=template&id=5dc115d8&

// EXTERNAL MODULE: ./src/filters/localize.filter.js
var localize_filter = __webpack_require__("e977");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      links: [{
        title: Object(localize_filter["a" /* default */])('menuBill'),
        url: '/',
        exact: true
      }, {
        title: Object(localize_filter["a" /* default */])('menuHistory'),
        url: '/history'
      }, {
        title: Object(localize_filter["a" /* default */])('menuPlanning'),
        url: '/planning'
      }, {
        title: Object(localize_filter["a" /* default */])('menuRecord'),
        url: '/record'
      }, {
        title: Object(localize_filter["a" /* default */])('menuCategories'),
        url: '/categories'
      }]
    };
  },
  props: ['value']
});
// CONCATENATED MODULE: ./src/components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Sidebar.vue





/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_5dc115d8_render,
  Sidebarvue_type_template_id_5dc115d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=template&id=e81f6e08&
var Navbarvue_type_template_id_e81f6e08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar orange lighten-1"},[_c('div',{staticClass:"nav-wrapper"},[_c('div',{staticClass:"navbar-left"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('click')}}},[_c('i',{staticClass:"material-icons black-text"},[_vm._v("dehaze")])]),_c('span',{staticClass:"black-text"},[_vm._v(_vm._s(_vm._f("dateFilter")(_vm.date,'date')))])]),_c('ul',{staticClass:"right hide-on-small-and-down"},[_c('li',[_c('a',{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{"href":"#","data-target":"dropdown"}},[_vm._v(" "+_vm._s(_vm.name)+" "),_c('i',{staticClass:"material-icons right"},[_vm._v("arrow_drop_down")])]),_c('ul',{staticClass:"dropdown-content",attrs:{"id":"dropdown"}},[_c('li',[_c('router-link',{staticClass:"black-text",attrs:{"to":"/profile"}},[_c('i',{staticClass:"material-icons"},[_vm._v("account_circle")]),_vm._v("Профиль ")])],1),_c('li',{staticClass:"divider",attrs:{"tabindex":"-1"}}),_c('li',[_c('a',{staticClass:"black-text",attrs:{"href":"#"},on:{"click":_vm.logout}},[_c('i',{staticClass:"material-icons"},[_vm._v("assignment_return")]),_vm._v("Выйти ")])])])])])])])}
var Navbarvue_type_template_id_e81f6e08_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=template&id=e81f6e08&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      date: new Date(),
      interval: null,
      dropdown: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    //срабатывает, когда ДОМ-дерево уже готово
    this.interval = setInterval(function () {
      _this.date = new Date();
    }, 1000); //console.log(this.$refs) //список референсов

    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {}); //инциализация дропдауна из Materialize css https://materializecss.com/dropdown.html. Ф-ции. передается референс с именем dropdown
  },
  beforeDestroy: function beforeDestroy() {
    console.log('bef destroy');
    clearInterval(this.interval);

    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
  computed: {
    name: function name() {
      return this.$store.getters.info.name;
    }
  },
  methods: {
    logout: function logout() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('lofout');
                _context.next = 3;
                return _this2.$store.dispatch('logout');

              case 3:
                _this2.$router.push('/login?message=logout');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  filters: {
    lower: function lower(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'date';
      var options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value));
    }
  }
});
// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Navbar.vue





/* normalize component */

var Navbar_component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  Navbarvue_type_template_id_e81f6e08_render,
  Navbarvue_type_template_id_e81f6e08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navbar = (Navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MainLayoutvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      isOpen: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //если загрузился MainLayout, значит система загружается и мы делаем запрос на наличие авторизованного пользователя.
              if (!Object.keys(_this.$store.getters.info).length) {
                //если в геттере 'info' нет никаких ключей...
                _this.$store.dispatch('fetchInfo'); // мы делаем запрос для получения донных о пользователе

              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  components: {
    Sidebar: Sidebar,
    Navbar: Navbar
  },
  computed: {
    locale: function locale() {
      return this.$store.getters.info.locale;
    }
  }
});
// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MainLayoutvue_type_script_lang_js_ = (MainLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/MainLayout.vue





/* normalize component */

var MainLayout_component = Object(componentNormalizer["a" /* default */])(
  layouts_MainLayoutvue_type_script_lang_js_,
  MainLayoutvue_type_template_id_0af77e1d_render,
  MainLayoutvue_type_template_id_0af77e1d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MainLayout = (MainLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  computed: {
    layout: function layout() {
      // console.log(this.$route.meta)
      return (this.$route.meta.layout || 'empty') + '-layout'; //возвращает строку-название компонента в нижнем регистре, но вью понимает это как camelCase и выводит компонент с именем "EmptyLayout"
    }
  },
  components: {
    EmptyLayout: EmptyLayout,
    MainLayout: MainLayout
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_3d77790d_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__("9483");

// CONCATENATED MODULE: ./src/registerServiceWorker.js
/* eslint-disable no-console */


if (true) {
  Object(register_service_worker["a" /* register */])("".concat("/minin-crm/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    registered: function registered() {
      console.log('Service worker has been registered.');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound: function updatefound() {
      console.log('New content is downloading.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
var routes = [{
  path: '/',
  name: 'Home',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-2d21a3d2").then(__webpack_require__.bind(null, "bb51"));
  }
}, {
  path: '/login',
  name: 'login',
  meta: {
    layout: 'empty'
  },
  //кастомное св-во. layout для задания шаблона
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-5f4ad635").then(__webpack_require__.bind(null, "a55b"));
  }
}, {
  path: '/categories',
  name: 'categories',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-6fc0a25f").then(__webpack_require__.bind(null, "58c2"));
  }
}, {
  path: '/detail-record/:id',
  name: 'detail-record',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-2d0d7699").then(__webpack_require__.bind(null, "7769"));
  }
}, {
  path: '/history',
  name: 'history',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-cfa57870").then(__webpack_require__.bind(null, "e4bb"));
  }
}, {
  path: '/planning',
  name: 'planning',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-72449522").then(__webpack_require__.bind(null, "6859"));
  }
}, {
  path: '/profile',
  name: 'profile',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-9937b244").then(__webpack_require__.bind(null, "c66d"));
  }
}, {
  path: '/record',
  name: 'record',
  meta: {
    layout: 'main'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-3cf640af").then(__webpack_require__.bind(null, "43ef"));
  }
}, {
  path: '/register',
  name: 'register',
  meta: {
    layout: 'empty'
  },
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-c420df12").then(__webpack_require__.bind(null, "73cf"));
  }
}];
var router = new vue_router_esm["a" /* default */]({
  mode: 'history',
  base: "/minin-crm/",
  routes: routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./src/utils/message.plugin.js
//самодельный Вью плагин
/* harmony default export */ var message_plugin = ({
  install: function install(Vue, options) {
    Vue.prototype.$message = function (html) {
      //метод доступен во всех компонентах
      M.toast({
        html: html
      }); //метод для создания туллтипа (из подключенного фреймворка Materialize)
    };

    Vue.prototype.$error = function (html) {
      //метод доступен во всех компонентах
      M.toast({
        html: "[\u043E\u0448\u0438\u0431\u043A\u0430]: ".concat(html)
      }); //метод для создания туллтипа (из подключенного фреймворка Materialize)
    };
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"558b6eed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app/Loader.vue?vue&type=template&id=317deaf6&
var Loadervue_type_template_id_317deaf6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Loadervue_type_template_id_317deaf6_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-loader"},[_c('div',{staticClass:"preloader-wrapper active"},[_c('div',{staticClass:"spinner-layer spinner-red-only"},[_c('div',{staticClass:"circle-clipper left"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"gap-patch"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"circle-clipper right"},[_c('div',{staticClass:"circle"})])])])])}]


// CONCATENATED MODULE: ./src/components/app/Loader.vue?vue&type=template&id=317deaf6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app/Loader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/app/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/app/Loader.vue





/* normalize component */

var Loader_component = Object(componentNormalizer["a" /* default */])(
  app_Loadervue_type_script_lang_js_,
  Loadervue_type_template_id_317deaf6_render,
  Loadervue_type_template_id_317deaf6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Loader = (Loader_component.exports);
// EXTERNAL MODULE: ./src/filters/currency.filter.js
var currency_filter = __webpack_require__("5bb3");

// CONCATENATED MODULE: ./src/filters/date.filter.js

function dateFilter(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'date';
  var options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  var locale = store["a" /* default */].getters.info.locale || 'ru-RU';
  console.log('data gilter locale ' + locale);
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}
// CONCATENATED MODULE: ./src/directives/tooltip.directive.js
/* harmony default export */ var tooltip_directive = ({
  bind: function bind(el, _ref) {
    var value = _ref.value;
    M.Tooltip.init(el, {
      html: value
    });
  },
  unbind: function unbind(el) {
    //метод вызывается, когда данная директива уничтожается
    var tooltip = M.Tooltip.getInstance(el);

    if (tooltip && tooltip.destroy) {
      tooltip.destroy();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/materialize-css/dist/js/materialize.min.js
var materialize_min = __webpack_require__("6885");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./src/utils/title.plugin.js



/* harmony default export */ var title_plugin = ({
  install: function install(Vue, options) {
    Vue.prototype.$title = function (key) {
      var locale = store["a" /* default */].getters.info.locale;
      var appTitle = "Skotnik's CRM";
      return "".concat(Object(localize_filter["a" /* default */])(key), " | ").concat(appTitle);
    };
  }
});
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.cjs.js
var index_cjs = __webpack_require__("59ca");
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js
var index_esm = __webpack_require__("ea7b");

// EXTERNAL MODULE: ./node_modules/firebase/database/dist/index.esm.js
var dist_index_esm = __webpack_require__("66ce");

// CONCATENATED MODULE: ./src/main.js







 //плагин пагинации






 //импорт самодельного рлагина





 //импорт самодельной директивы






vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].use(lib_default.a); //осле подключения плагина в каждом компоненте можно использовать объект 'validations'

vue_runtime_esm["a" /* default */].use(message_plugin); //подключение самодельного рлагина

vue_runtime_esm["a" /* default */].use(title_plugin); //подключение самодельного рлагина

vue_runtime_esm["a" /* default */].component('Loader', Loader); //глобальная регистрация компонента. Теперь он доступен во всем приложении

vue_runtime_esm["a" /* default */].filter('currencyFilter', currency_filter["a" /* default */]); //глобальная регистрация фильтра

vue_runtime_esm["a" /* default */].filter('dateFilter', dateFilter); //глобальная регистрация фильтра

vue_runtime_esm["a" /* default */].filter('localizeFilter', localize_filter["a" /* default */]); //глобальная регистрация фильтра

vue_runtime_esm["a" /* default */].directive('tooltip', tooltip_directive); //глобальная регистрация директивы

vue_runtime_esm["a" /* default */].component('Paginate', dist_default.a);
vue_runtime_esm["a" /* default */].use(vue_meta_esm["a" /* default */], {
  refreshOnceOnNavigation: true
});
var firebaseConfig = {
  apiKey: "AIzaSyBvxvk7od8Mmdrxe_SN3urtmQArZx-Dyb8",
  authDomain: "vue--crm-e8b93.firebaseapp.com",
  databaseURL: "https://vue--crm-e8b93.firebaseio.com",
  projectId: "vue--crm-e8b93",
  storageBucket: "vue--crm-e8b93.appspot.com",
  messagingSenderId: "169796478793",
  appId: "1:169796478793:web:ebba2a5837b43900499c98"
};
index_cjs_default.a.initializeApp(firebaseConfig);
var app;
index_cjs_default.a.auth().onAuthStateChanged(function () {
  //ф-ция, срабатывает неоднократно, чтобы каждый раз не перезапускать Вью
  //делаем проверку на существование переменой 
  if (!app) {
    app = new vue_runtime_esm["a" /* default */]({
      router: src_router,
      store: store["a" /* default */],
      render: function render(h) {
        return h(App);
      }
    }).$mount('#app');
  }
});

/***/ }),

/***/ "5bb3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currencyFilter; });
function currencyFilter(value) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'RUB';
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency
  }).format(value);
}

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b444":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'logout': 'вы вышли из системы',
  'auth/user-not-found': 'нет такого пользователя',
  'auth/wrong-password': 'введен неправильный пароль',
  'auth/email-already-in-use': 'такой e-mail уже занят'
});

/***/ }),

/***/ "e977":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localizeFilter; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4360");
/* harmony import */ var _assets_locals_data_ru_locale_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("02ed");
var _assets_locals_data_ru_locale_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("02ed", 1);
/* harmony import */ var _assets_locals_data_en_locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0a8f");
var _assets_locals_data_en_locale_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("0a8f", 1);



var locals = {
  'ru-RU': _assets_locals_data_ru_locale_json__WEBPACK_IMPORTED_MODULE_1__,
  'en-US': _assets_locals_data_en_locale_json__WEBPACK_IMPORTED_MODULE_2__
};
function localizeFilter(value) {
  var currentLocale = _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getters.info.locale || 'ru-RU';
  return locals[currentLocale][value];
}

/***/ })

/******/ });
//# sourceMappingURL=app.0426bb3b.js.map