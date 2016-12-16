/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(94);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(95);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueResource = __webpack_require__(96);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	var _vueMaterial = __webpack_require__(97);
	
	var _vueMaterial2 = _interopRequireDefault(_vueMaterial);
	
	__webpack_require__(98);
	
	var _routes = __webpack_require__(100);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueMaterial2.default);
	
	var router = new _vueRouter2.default({ routes: _routes2.default });
	
	_vue2.default.material.registerTheme('default', {
	  primary: 'blue',
	  accent: 'red',
	  warn: 'yellow'
	});
	_vue2.default.material.setCurrentTheme('default');
	
	var app = new _vue2.default({
	  router: router,
	  template: '<router-view></router-view>'
	}).$mount('#vue-app');

/***/ },

/***/ 9:
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 92:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * Vue.js v2.1.6
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	var warn = noop;
	var formatComponentName;
	
	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };
	
	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}
	
	/*  */
	
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}
	
	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		identity: identity,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		isServerRendering: isServerRendering,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var initProxy;
	
	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };
	
	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }
	
	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };
	
	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	
	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	
	  resetSchedulerState();
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};
	
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            process.env.NODE_ENV !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}
	
	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initMethods(vm);
	  initData(vm);
	  initComputed(vm);
	  initWatch(vm);
	}
	
	var isReservedProp = { key: 1, ref: 1, slot: 1 };
	
	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        if (isReservedProp[key]) {
	          warn(
	            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	            vm
	          );
	        }
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      } else {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}
	
	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}
	
	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	
	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};
	
	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };
	
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };
	
	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }
	
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);
	
	  data = data || {};
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}
	
	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}
	
	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };
	
	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };
	
	    var res = factory(resolve, reject);
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}
	
	/*  */
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture, once;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, once, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      remove$$1(event, oldOn[name].invoker, capture);
	    }
	  }
	}
	
	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;
	
	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}
	
	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}
	
	/*  */
	
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}
	
	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	/*  */
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  needNormalization,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    needNormalization = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) { needNormalization = true; }
	  return _createElement(context, tag, data, children, needNormalization)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  needNormalization
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (needNormalization) {
	    children = normalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      ns = tag === 'foreignObject' ? 'xhtml' : ns;
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}
	
	function applyNS (vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, needNormalization, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // convert text to vnode
	  Vue.prototype._v = createTextVNode;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = createEmptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;
	
	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };
	
	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };
	
	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }
	
	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }
	
	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };
	
	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };
	
	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      return scopedSlotFn(props || {}) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && process.env.NODE_ENV !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(tag, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };
	
	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
	    eventKeyCode,
	    key,
	    builtInAlias
	  ) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  };
	}
	
	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var add = function (event, fn, once) {
	    once ? vm.$once(event, fn) : vm.$on(event, fn);
	  };
	  var remove$$1 = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, add, remove$$1, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}
	
	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	var uid = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}
	
	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}
	
	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}
	
	function Vue$3 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	/*  */
	
	var patternTypes = [String, RegExp];
	
	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      // check pattern
	      var name = opts.Ctor.options.name || opts.tag;
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$3);
	
	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});
	
	Vue$3.version = '2.1.6';
	
	/*  */
	
	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function (tag, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtml'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	var isPreTag = function (tag) { return tag === 'pre'; };
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }
	
	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }
	
	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	
	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }
	
	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }
	
	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.child) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }
	
	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.child) {
	      innerNode = innerNode.child._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }
	
	  function insert (parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.child = oldVnode.child;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');
	
	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	
	        // replacing existing element
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));
	
	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parent !== null) {
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}
	
	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    }, 'dir-postpatch');
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	/*  */
	
	var target;
	
	function add$1 (event, handler, once, capture) {
	  if (once) {
	    var oldHandler = handler;
	    handler = function (ev) {
	      remove$2(event, handler, capture);
	      arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	    };
	  }
	  target.addEventListener(event, handler, capture);
	}
	
	function remove$2 (event, handler, capture) {
	  target.removeEventListener(event, handler, capture);
	}
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target = vnode.elm;
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (!elm.composing && (
	        (document.activeElement !== elm && elm.value !== strCur) ||
	        isValueChanged(vnode, strCur)
	      )) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	function isValueChanged (vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});
	
	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}
	
	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}
	
	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;
	
	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }
	
	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }
	
	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}
	
	/*  */
	
	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	
	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }
	
	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};
	
	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;
	
	  var style = normalizeStyleBinding(vnode.data.style) || {};
	
	  vnode.data.style = style.__ob__ ? extend({}, style) : style;
	
	  var newStyle = getStyle(vnode, true);
	
	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }
	
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	          pendingNode.context === vnode.context &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});
	
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}
	
	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}
	
	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;
	
	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);
	
	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;
	
	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);
	
	/*  */
	
	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}
	
	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
	
	/*  */
	
	var decoder;
	
	function decode (html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent
	}
	
	/*  */
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);
	
	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);
	
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isScriptOrStyle = makeMap('script,style', true);
	var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	var isSpecialTag = function (tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true
	  }
	  if (isSFC && stack.length === 1) {
	    // top-level template that has no pre-processor
	    if (tag === 'template' && !stack[0].attrs.some(hasLang)) {
	      return false
	    } else {
	      return true
	    }
	  }
	  return false
	};
	
	var reCache = {};
	
	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;
	
	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}
	
	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }
	
	      var text = (void 0), rest$1 = (void 0), next = (void 0);
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }
	
	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }
	
	    if (html === last && options.chars) {
	      options.chars(html);
	      break
	    }
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }
	
	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }
	
	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }
	
	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
	
	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }
	
	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }
	
	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }
	
	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}
	
	/*  */
	
	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	      if (c === 0x2f) { // /
	        var j = i - 1;
	        var p = (void 0);
	        // find first non-whitespace prev char
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== ' ') { break }
	        }
	        if (!p || !/[\w$]/.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }
	
	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	
	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }
	
	  return expression
	}
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}
	
	/*  */
	
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;
	
	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});
	
	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}
	
	/*  */
	
	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}
	
	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}
	
	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}
	
	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}
	
	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}
	
	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}
	
	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}
	
	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}
	
	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;
	
	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */
	
	function parseModel (val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;
	
	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    return {
	      exp: val,
	      idx: null
	    }
	  }
	
	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }
	
	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  }
	}
	
	function next () {
	  return str.charCodeAt(++index$1)
	}
	
	function eof () {
	  return index$1 >= len
	}
	
	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}
	
	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}
	
	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}
	
	/*  */
	
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;
	
	var decodeHTMLCached = cached(decode);
	
	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
	
	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        process.env.NODE_ENV !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }
	
	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);
	
	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;
	
	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }
	
	      function checkRootConstraints (el) {
	        if (process.env.NODE_ENV !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else if (process.env.NODE_ENV !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            "Component template should contain exactly one root element:" +
	            "\n\n" + template + "\n\n" +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },
	
	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },
	
	    chars: function chars (text) {
	      if (!currentParent) {
	        if (process.env.NODE_ENV !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	          currentParent.tag === 'textarea' &&
	          currentParent.attrsMap.placeholder === text) {
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}
	
	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}
	
	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}
	
	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}
	
	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}
	
	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      process.env.NODE_ENV !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}
	
	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}
	
	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn$1(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}
	
	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}
	
	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}
	
	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if (process.env.NODE_ENV !== 'production' && el.key) {
	      warn$1(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	    }
	    if (el.tag === 'template') {
	      el.slotScope = getAndRemoveAttr(el, 'scope');
	    }
	  }
	}
	
	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}
	
	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        isProp = false;
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	        }
	        if (isProp || platformMustUseProp(el.tag, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if (process.env.NODE_ENV !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      if (process.env.NODE_ENV !== 'production') {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}
	
	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}
	
	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}
	
	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}
	
	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}
	
	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}
	
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;
	
	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}
	
	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}
	
	/*  */
	
	var isStaticKey;
	var isPlatformReservedTag;
	
	var genStaticKeysCached = cached(genStaticKeys$1);
	
	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}
	
	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}
	
	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}
	
	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}
	
	function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
	  }
	}
	
	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}
	
	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};
	
	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;',
	  ctrl: 'if(!$event.ctrlKey)return;',
	  shift: 'if(!$event.shiftKey)return;',
	  alt: 'if(!$event.altKey)return;',
	  meta: 'if(!$event.metaKey)return;'
	};
	
	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}
	
	function genKeyFilter (keys) {
	  return ("if(" + (keys.map(genFilterCode).join('&&')) + ")return;")
	}
	
	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var alias = keyCodes[key];
	  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
	}
	
	/*  */
	
	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}
	
	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};
	
	/*  */
	
	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;
	
	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_c("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}
	
	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);
	
	      var children = el.inlineTemplate ? null : genChildren(el, true);
	      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}
	
	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}
	
	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      process.env.NODE_ENV !== 'production' && warn$2(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}
	
	function genIf (el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice())
	}
	
	function genIfConditions (conditions) {
	  if (!conditions.length) {
	    return '_e()'
	  }
	
	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }
	
	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return el.once ? genOnce(el) : genElement(el)
	  }
	}
	
	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}
	
	function genData (el) {
	  var data = '{';
	
	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }
	
	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}
	
	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}
	
	function genInlineTemplate (el) {
	  var ast = el.children[0];
	  if (process.env.NODE_ENV !== 'production' && (
	    el.children.length > 1 || ast.type !== 1
	  )) {
	    warn$2('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}
	
	function genScopedSlots (slots) {
	  return ("scopedSlots:{" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "}")
	}
	
	function genScopedSlot (key, el) {
	  return key + ":function(" + (String(el.attrsMap.scope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? genChildren(el) || 'void 0'
	      : genElement(el)) + "}"
	}
	
	function genChildren (el, checkSkip) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 &&
	        el$1.for &&
	        el$1.tag !== 'template' &&
	        el$1.tag !== 'slot') {
	      return genElement(el$1)
	    }
	    return ("[" + (children.map(genNode).join(',')) + "]" + (checkSkip
	        ? canSkipNormalization(children) ? '' : ',true'
	        : ''))
	  }
	}
	
	function canSkipNormalization (children) {
	  for (var i = 0; i < children.length; i++) {
	    var el = children[i];
	    if (needsNormalization(el) ||
	        (el.if && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
	      return false
	    }
	  }
	  return true
	}
	
	function needsNormalization (el) {
	  return el.for || el.tag === 'template' || el.tag === 'slot'
	}
	
	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}
	
	function genText (text) {
	  return ("_v(" + (text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}
	
	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return ("_t(" + slotName + (children ? ("," + children) : '') + (el.attrs ? ((children ? '' : ',null') + ",{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}") : '') + ")")
	}
	
	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el, true);
	  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	  }
	  return res.slice(0, -1)
	}
	
	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}
	
	/*  */
	
	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}
	
	/*  */
	
	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}
	
	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}
	
	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}
	
	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}
	
	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}
	
	/*  */
	
	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if (process.env.NODE_ENV !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}
	
	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};
	
	/*  */
	
	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production') {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }
	
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$2 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}
	
	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$2
	};
	
	var modules$1 = [
	  klass$1,
	  style$1
	];
	
	/*  */
	
	var warn$3;
	
	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  if (process.env.NODE_ENV !== 'production') {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}
	
	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  if (process.env.NODE_ENV !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}
	
	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  if (process.env.NODE_ENV !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}
	
	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }
	
	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';
	
	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	  valueExpression = number || type === 'number'
	    ? ("_n(" + valueExpression + ")")
	    : valueExpression;
	
	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if (process.env.NODE_ENV !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }
	
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (trim || number || type === 'number') {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}
	
	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    el.children.some(checkOptionWarning);
	  }
	
	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');
	
	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}
	
	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}
	
	function genAssignmentCode (value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}
	
	/*  */
	
	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	/*  */
	
	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};
	
	/*  */
	
	var cache = Object.create(null);
	
	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};
	
	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}
	
	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}
	
	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}
	
	/*  */
	
	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});
	
	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);
	
	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }
	
	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	Vue$3.compile = compileToFunctions;
	
	module.exports = Vue$3;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), (function() { return this; }())))

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.1.1
	  * (c) 2016 Evan You
	  * @license MIT
	  */
	'use strict';
	
	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;
	
	    data.routerView = true
	
	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false
	
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }
	
	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }
	
	    var name = props.name
	    var component = inactive
	      ? cache[name]
	      : (cache[name] = matched.components[name])
	
	    if (!inactive) {
	      var hooks = data.hook || (data.hook = {})
	      hooks.init = function (vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.prepatch = function (oldVnode, vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.destroy = function (vnode) {
	        if (matched.instances[name] === vnode.child) {
	          matched.instances[name] = undefined
	        }
	      }
	    }
	
	    return h(component, data, children)
	  }
	}
	
	/*  */
	
	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}
	
	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}
	
	/*  */
	
	var encode = encodeURIComponent
	var decode = decodeURIComponent
	
	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};
	
	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}
	
	function parseQuery (query) {
	  var res = {}
	
	  query = query.trim().replace(/^(\?|#|&)/, '')
	
	  if (!query) {
	    return res
	  }
	
	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null
	
	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })
	
	  return res
	}
	
	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key]
	
	    if (val === undefined) {
	      return ''
	    }
	
	    if (val === null) {
	      return encode(key)
	    }
	
	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }
	
	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}
	
	/*  */
	
	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}
	
	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})
	
	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}
	
	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';
	
	  return (path || '/') + stringifyQuery(query) + hash
	}
	
	var trailingSlashRE = /\/$/
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}
	
	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};
	
	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}
	
	function isIncludedRoute (current, target) {
	  return (
	    current.path.indexOf(target.path.replace(/\/$/, '')) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}
	
	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}
	
	/*  */
	
	// work around weird flow bug
	var toTypes = [String, Object]
	
	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: [String, Array],
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;
	
	    var router = this.$router
	    var current = this.$route
	    var ref = router.resolve(this.to, current, this.append);
	    var normalizedTo = ref.normalizedTo;
	    var resolved = ref.resolved;
	    var href = ref.href;
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)
	
	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(normalizedTo)
	        } else {
	          router.push(normalizedTo)
	        }
	      }
	    }
	
	    var on = { click: guardEvent }
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler })
	    } else {
	      on[this.event] = handler
	    }
	
	    var data = {
	      class: classes
	    }
	
	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false
	        var extend = _Vue.util.extend
	        var aData = a.data = extend({}, a.data)
	        aData.on = on
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }
	
	    return h(this.tag, data, this.$slots.default)
	  }
	}
	
	function guardEvent (e) {
	  // don't redirect with control keys
	  /* istanbul ignore if */
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  /* istanbul ignore if */
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  /* istanbul ignore if */
	  if (e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  /* istanbul ignore if */
	  var target = e.target.getAttribute('target')
	  if (/\b_blank\b/i.test(target)) { return }
	
	  e.preventDefault()
	  return true
	}
	
	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}
	
	var _Vue
	
	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true
	
	  _Vue = Vue
	
	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })
	
	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })
	
	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })
	
	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)
	
	  var strats = Vue.config.optionMergeStrategies
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
	}
	
	/*  */
	
	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }
	
	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }
	
	  var stack = base.split('/')
	
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }
	
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }
	
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }
	
	  return stack.join('/')
	}
	
	function parsePath (path) {
	  var hash = ''
	  var query = ''
	
	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }
	
	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
	  }
	
	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}
	
	/*  */
	
	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)
	
	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })
	
	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}
	
	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.")
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    )
	  }
	
	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }
	
	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(false, ("Named Route '" + (route.name) + "' has a default child route.\n          When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), the default child route will not be rendered.\n          Remove the name from this route and use the name of the default child route for named links instead.")
	        )
	      }
	    }
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }
	
	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }
	
	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record
	  }
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("Duplicate named routes definition: { name: \"" + name + "\", path: \"" + (record.path) + "\" }"))
	    }
	  }
	}
	
	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}
	
	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	
	var isarray = __moduleExports
	
	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      keys.push(token)
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	
	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;
	
	/*  */
	
	var regexpCache = Object.create(null)
	
	function getRouteRegex (path) {
	  var hit = regexpCache[path]
	  var keys, regexp
	
	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }
	
	  return { keys: keys, regexp: regexp }
	}
	
	var regexpCompileCache = Object.create(null)
	
	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    }
	    return ''
	  }
	}
	
	/*  */
	
	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }
	
	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next)
	    next._normalized = true
	    var params = assign(assign({}, current.params), next.params)
	    if (current.name) {
	      next.name = current.name
	      next.params = params
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path
	      next.path = fillParams(rawPath, params, ("path " + (current.path)))
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.")
	    }
	    return next
	  }
	
	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }
	
	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key]
	  }
	  return a
	}
	
	/*  */
	
	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;
	
	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;
	
	    if (name) {
	      var record = nameMap[name]
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; })
	
	      if (typeof location.params !== 'object') {
	        location.params = {}
	      }
	
	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key]
	          }
	        }
	      }
	
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }
	
	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect
	
	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }
	
	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      )
	      return _createRoute(null, location)
	    }
	
	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params
	
	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }
	
	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }
	
	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }
	
	  return match
	}
	
	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp)
	
	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }
	
	  return true
	}
	
	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}
	
	/*  */
	
	var inBrowser = typeof window !== 'undefined'
	
	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent
	
	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }
	
	  return window.history && 'pushState' in window.history
	})()
	
	/*  */
	
	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}
	
	/*  */
	
	
	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};
	
	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};
	
	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;
	
	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    onComplete && onComplete(route)
	    this$1.ensureURL()
	  }, onAbort)
	};
	
	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;
	
	  var current = this.current
	  var abort = function () { onAbort && onAbort() }
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return abort()
	  }
	
	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )
	
	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true)
	        abort()
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to)
	        abort()
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }
	
	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null
	      onComplete(route)
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};
	
	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};
	
	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}
	
	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}
	
	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def)
	  }
	  return def.options[key]
	}
	
	function extractLeaveGuards (matched) {
	  return flatten(flatMapComponents(matched, function (def, instance) {
	    var guard = extractGuard(def, 'beforeRouteLeave')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
	        : wrapLeaveGuard(guard, instance)
	    }
	  }).reverse())
	}
	
	function wrapLeaveGuard (
	  guard,
	  instance
	) {
	  return function routeLeaveGuard () {
	    return guard.apply(instance, arguments)
	  }
	}
	
	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatten(flatMapComponents(matched, function (def, _, match, key) {
	    var guard = extractGuard(def, 'beforeRouteEnter')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
	        : wrapEnterGuard(guard, cbs, match, key, isValid)
	    }
	  }))
	}
	
	function wrapEnterGuard (
	  guard,
	  cbs,
	  match,
	  key,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb)
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid)
	        })
	      }
	    })
	  }
	}
	
	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
	  }
	}
	
	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }
	
	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }
	
	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
	}
	
	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}
	
	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}
	
	/*  */
	
	var positionStore = Object.create(null)
	
	function saveScrollPosition (key) {
	  if (!key) { return }
	  positionStore[key] = {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }
	}
	
	function getScrollPosition (key) {
	  if (!key) { return }
	  return positionStore[key]
	}
	
	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}
	
	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}
	
	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}
	
	function isNumber (v) {
	  return typeof v === 'number'
	}
	
	/*  */
	
	
	var genKey = function () { return String(Date.now()); }
	var _key = genKey()
	
	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;
	
	    History.call(this, router, base)
	
	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })
	
	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }
	
	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;
	
	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };
	
	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;
	
	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };
	
	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;
	
	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };
	
	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath)
	      push ? pushState(current) : replaceState(current)
	    }
	  };
	
	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }
	
	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      assert(typeof behavior === 'function', "scrollBehavior must be a function")
	    }
	
	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }
	
	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };
	
	  return HTML5History;
	}(History));
	
	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}
	
	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}
	
	function replaceState (url) {
	  pushState(url, true)
	}
	
	/*  */
	
	
	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    History.call(this, router, base)
	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }
	    ensureSlash()
	  }
	
	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;
	
	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };
	
	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };
	
	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current)
	    }
	  };
	
	  return HashHistory;
	}(History));
	
	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}
	
	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}
	
	function pushHash (path) {
	  window.location.hash = path
	}
	
	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}
	
	/*  */
	
	
	var AbstractHistory = (function (History) {
	  function AbstractHistory (router) {
	    History.call(this, router)
	    this.stack = []
	    this.index = -1
	  }
	
	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;
	
	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };
	
	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };
	
	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;
	
	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };
	
	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };
	
	  return AbstractHistory;
	}(History));
	
	/*  */
	
	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};
	
	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])
	
	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode
	
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      process.env.NODE_ENV !== 'production' && assert(false, ("invalid mode: " + mode))
	  }
	};
	
	var prototypeAccessors = { currentRoute: {} };
	
	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};
	
	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;
	
	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )
	
	  this.app = app
	
	  var history = this.history
	
	  if (history instanceof HTML5History) {
	    history.transitionTo(getLocation(history.base))
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      window.addEventListener('hashchange', function () {
	        history.onHashChange()
	      })
	    }
	    history.transitionTo(getHash(), setupHashListener, setupHashListener)
	  }
	
	  history.listen(function (route) {
	    this$1.app._route = route
	  })
	};
	
	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};
	
	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};
	
	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};
	
	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};
	
	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};
	
	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};
	
	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};
	
	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).resolved
	    : this.currentRoute
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};
	
	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var normalizedTo = normalizeLocation(to, current || this.history.current, append)
	  var resolved = this.match(normalizedTo, current)
	  var fullPath = resolved.redirectedFrom || resolved.fullPath
	  var base = this.history.base
	  var href = createHref(base, fullPath, this.mode)
	  return {
	    normalizedTo: normalizedTo,
	    resolved: resolved,
	    href: href
	  }
	};
	
	Object.defineProperties( VueRouter.prototype, prototypeAccessors );
	
	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath
	  return base ? cleanPath(base + '/' + path) : path
	}
	
	VueRouter.install = install
	
	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}
	
	module.exports = VueRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },

/***/ 96:
/***/ function(module, exports) {

	/*!
	 * vue-resource v1.0.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;
	
	function Promise$1(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0,
	            result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};
	
	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};
	
	var p$1 = Promise$1.prototype;
	
	p$1.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p$1.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p$1.notify = function notify() {
	    var promise = this;
	
	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	/**
	 * Promise adapter.
	 */
	
	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}
	
	function PromiseObj(executor, context) {
	
	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }
	
	    this.context = context;
	}
	
	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};
	
	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};
	
	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};
	
	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};
	
	var p = PromiseObj.prototype;
	
	p.bind = function (context) {
	    this.context = context;
	    return this;
	};
	
	p.then = function (fulfilled, rejected) {
	
	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};
	
	p.catch = function (rejected) {
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};
	
	p.finally = function (callback) {
	
	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return Promise.reject(reason);
	    });
	};
	
	/**
	 * Utility functions.
	 */
	
	var debug = false;var util = {};var slice = [].slice;
	
	
	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}
	
	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}
	
	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}
	
	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}
	
	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}
	
	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}
	
	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}
	
	var isArray = Array.isArray;
	
	function isString(val) {
	    return typeof val === 'string';
	}
	
	function isBoolean(val) {
	    return val === true || val === false;
	}
	
	function isFunction(val) {
	    return typeof val === 'function';
	}
	
	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}
	
	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}
	
	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}
	
	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}
	
	function when(value, fulfilled, rejected) {
	
	    var promise = PromiseObj.resolve(value);
	
	    if (arguments.length < 2) {
	        return promise;
	    }
	
	    return promise.then(fulfilled, rejected);
	}
	
	function options(fn, obj, opts) {
	
	    opts = opts || {};
	
	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }
	
	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}
	
	function each(obj, iterator) {
	
	    var i, key;
	
	    if (obj && typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }
	
	    return obj;
	}
	
	var assign = Object.assign || _assign;
	
	function merge(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });
	
	    return target;
	}
	
	function defaults(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	
	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });
	
	    return target;
	}
	
	function _assign(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source);
	    });
	
	    return target;
	}
	
	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}
	
	/**
	 * Root Prefix Transform.
	 */
	
	function root (options, next) {
	
	    var url = next(options);
	
	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }
	
	    return url;
	}
	
	/**
	 * Query Parameter Transform.
	 */
	
	function query (options, next) {
	
	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);
	
	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });
	
	    query = Url.params(query);
	
	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }
	
	    return url;
	}
	
	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */
	
	function expand(url, params, variables) {
	
	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);
	
	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }
	
	    return expanded;
	}
	
	function parse(template) {
	
	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];
	
	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {
	
	                    var operator = null,
	                        values = [];
	
	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }
	
	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });
	
	                    if (operator && operator !== '+') {
	
	                        var separator = ',';
	
	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }
	
	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}
	
	function getValues(context, operator, key, modifier) {
	
	    var value = context[key],
	        result = [];
	
	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();
	
	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }
	
	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];
	
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }
	
	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }
	
	    return result;
	}
	
	function isDefined(value) {
	    return value !== undefined && value !== null;
	}
	
	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}
	
	function encodeValue(operator, value, key) {
	
	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);
	
	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}
	
	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}
	
	/**
	 * URL Template (RFC 6570) Transform.
	 */
	
	function template (options) {
	
	    var variables = [],
	        url = expand(options.url, options.params, variables);
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	}
	
	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	function Url(url, params) {
	
	    var self = this || {},
	        options = url,
	        transform;
	
	    if (isString(url)) {
	        options = { url: url, params: params };
	    }
	
	    options = merge({}, Url.options, self.$options, options);
	
	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });
	
	    return transform(options);
	}
	
	/**
	 * Url options.
	 */
	
	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};
	
	/**
	 * Url transforms.
	 */
	
	Url.transforms = [template, query, root];
	
	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */
	
	Url.params = function (obj) {
	
	    var params = [],
	        escape = encodeURIComponent;
	
	    params.add = function (key, value) {
	
	        if (isFunction(value)) {
	            value = value();
	        }
	
	        if (value === null) {
	            value = '';
	        }
	
	        this.push(escape(key) + '=' + escape(value));
	    };
	
	    serialize(params, obj);
	
	    return params.join('&').replace(/%20/g, '+');
	};
	
	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */
	
	Url.parse = function (url) {
	
	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }
	
	    el.href = url;
	
	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};
	
	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}
	
	function serialize(params, obj, scope) {
	
	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;
	
	    each(obj, function (value, key) {
	
	        hash = isObject(value) || isArray(value);
	
	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }
	
	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}
	
	/**
	 * XDomain client (Internet Explorer).
	 */
	
	function xdrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xdr = new XDomainRequest(),
	            handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(xdr.responseText, { status: status }));
	        };
	
	        request.abort = function () {
	            return xdr.abort();
	        };
	
	        xdr.open(request.method, request.getUrl());
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}
	
	/**
	 * CORS Interceptor.
	 */
	
	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();
	
	function cors (request, next) {
	
	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }
	
	    if (request.crossOrigin) {
	
	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }
	
	        delete request.emulateHTTP;
	    }
	
	    next();
	}
	
	function crossOrigin(request) {
	
	    var requestUrl = Url.parse(Url(request));
	
	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}
	
	/**
	 * Body Interceptor.
	 */
	
	function body (request, next) {
	
	    if (isFormData(request.body)) {
	
	        request.headers.delete('Content-Type');
	    } else if (isObject(request.body) || isArray(request.body)) {
	
	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }
	
	    next(function (response) {
	
	        Object.defineProperty(response, 'data', {
	            get: function () {
	                return this.body;
	            },
	            set: function (body) {
	                this.body = body;
	            }
	        });
	
	        return response.bodyText ? when(response.text(), function (text) {
	
	            var type = response.headers.get('Content-Type');
	
	            if (isString(type) && type.indexOf('application/json') === 0) {
	
	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	            } else {
	                response.body = text;
	            }
	
	            return response;
	        }) : response;
	    });
	}
	
	/**
	 * JSONP client.
	 */
	
	function jsonpClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;
	
	        handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(body, { status: status }));
	
	            delete window[callback];
	            document.body.removeChild(script);
	        };
	
	        request.params[name] = callback;
	
	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };
	
	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	}
	
	/**
	 * JSONP Interceptor.
	 */
	
	function jsonp (request, next) {
	
	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }
	
	    next(function (response) {
	
	        if (request.method == 'JSONP') {
	
	            return when(response.json(), function (json) {
	
	                response.body = json;
	
	                return response;
	            });
	        }
	    });
	}
	
	/**
	 * Before Interceptor.
	 */
	
	function before (request, next) {
	
	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }
	
	    next();
	}
	
	/**
	 * HTTP method override Interceptor.
	 */
	
	function method (request, next) {
	
	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }
	
	    next();
	}
	
	/**
	 * Header Interceptor.
	 */
	
	function header (request, next) {
	
	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);
	
	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });
	
	    next();
	}
	
	/**
	 * Timeout Interceptor.
	 */
	
	function timeout (request, next) {
	
	    var timeout;
	
	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }
	
	    next(function (response) {
	
	        clearTimeout(timeout);
	    });
	}
	
	/**
	 * XMLHttp client.
	 */
	
	function xhrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {
	
	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });
	
	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });
	
	            resolve(response);
	        };
	
	        request.abort = function () {
	            return xhr.abort();
	        };
	
	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }
	
	        xhr.open(request.method, request.getUrl(), true);
	
	        if ('responseType' in xhr) {
	            xhr.responseType = 'blob';
	        }
	
	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }
	
	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });
	
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;
	        xhr.send(request.getBody());
	    });
	}
	
	/**
	 * Base client.
	 */
	
	function Client (context) {
	
	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;
	
	    if (!isObject(context)) {
	        context = null;
	    }
	
	    function Client(request) {
	        return new PromiseObj(function (resolve) {
	
	            function exec() {
	
	                handler = reqHandlers.pop();
	
	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
	                    next();
	                }
	            }
	
	            function next(response) {
	
	                if (isFunction(response)) {
	
	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {
	
	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });
	
	                    when(response, resolve);
	
	                    return;
	                }
	
	                exec();
	            }
	
	            exec();
	        }, context);
	    }
	
	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };
	
	    return Client;
	}
	
	function sendRequest(request, resolve) {
	
	    var client = request.client || xhrClient;
	
	    resolve(client(request));
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	/**
	 * HTTP Headers.
	 */
	
	var Headers = function () {
	    function Headers(headers) {
	        var _this = this;
	
	        classCallCheck(this, Headers);
	
	
	        this.map = {};
	
	        each(headers, function (value, name) {
	            return _this.append(name, value);
	        });
	    }
	
	    Headers.prototype.has = function has(name) {
	        return getName(this.map, name) !== null;
	    };
	
	    Headers.prototype.get = function get(name) {
	
	        var list = this.map[getName(this.map, name)];
	
	        return list ? list[0] : null;
	    };
	
	    Headers.prototype.getAll = function getAll(name) {
	        return this.map[getName(this.map, name)] || [];
	    };
	
	    Headers.prototype.set = function set(name, value) {
	        this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	    };
	
	    Headers.prototype.append = function append(name, value) {
	
	        var list = this.getAll(name);
	
	        if (list.length) {
	            list.push(trim(value));
	        } else {
	            this.set(name, value);
	        }
	    };
	
	    Headers.prototype.delete = function _delete(name) {
	        delete this.map[getName(this.map, name)];
	    };
	
	    Headers.prototype.forEach = function forEach(callback, thisArg) {
	        var _this2 = this;
	
	        each(this.map, function (list, name) {
	            each(list, function (value) {
	                return callback.call(thisArg, value, name, _this2);
	            });
	        });
	    };
	
	    return Headers;
	}();
	
	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}
	
	function normalizeName(name) {
	
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }
	
	    return trim(name);
	}
	
	/**
	 * HTTP Response.
	 */
	
	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);
	
	
	        this.url = url;
	        this.ok = status >= 200 && status < 300;
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.headers = new Headers(headers);
	        this.body = body;
	
	        if (isString(body)) {
	
	            this.bodyText = body;
	        } else if (isBlob(body)) {
	
	            this.bodyBlob = body;
	
	            if (isBlobText(body)) {
	                this.bodyText = blobText(body);
	            }
	        }
	    }
	
	    Response.prototype.blob = function blob() {
	        return when(this.bodyBlob);
	    };
	
	    Response.prototype.text = function text() {
	        return when(this.bodyText);
	    };
	
	    Response.prototype.json = function json() {
	        return when(this.text(), function (text) {
	            return JSON.parse(text);
	        });
	    };
	
	    return Response;
	}();
	
	function blobText(body) {
	    return new PromiseObj(function (resolve) {
	
	        var reader = new FileReader();
	
	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	    });
	}
	
	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}
	
	/**
	 * HTTP Request.
	 */
	
	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);
	
	
	        this.body = null;
	        this.params = {};
	
	        assign(this, options, {
	            method: toUpper(options.method || 'GET')
	        });
	
	        if (!(this.headers instanceof Headers)) {
	            this.headers = new Headers(this.headers);
	        }
	    }
	
	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };
	
	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };
	
	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };
	
	    return Request;
	}();
	
	/**
	 * Service for sending network requests.
	 */
	
	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };
	
	function Http(options) {
	
	    var self = this || {},
	        client = Client(self.$vm);
	
	    defaults(options || {}, self.$options, Http.options);
	
	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });
	
	    return client(new Request(options)).then(function (response) {
	
	        return response.ok ? response : PromiseObj.reject(response);
	    }, function (response) {
	
	        if (response instanceof Error) {
	            error(response);
	        }
	
	        return PromiseObj.reject(response);
	    });
	}
	
	Http.options = {};
	
	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};
	
	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];
	
	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {
	
	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});
	
	['post', 'put', 'patch'].forEach(function (method) {
	
	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});
	
	/**
	 * Service for interacting with RESTful services.
	 */
	
	function Resource(url, params, actions, options) {
	
	    var self = this || {},
	        resource = {};
	
	    actions = assign({}, Resource.actions, actions);
	
	    each(actions, function (action, name) {
	
	        action = merge({ url: url, params: assign({}, params) }, options, action);
	
	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });
	
	    return resource;
	}
	
	function opts(action, args) {
	
	    var options = assign({}, action),
	        params = {},
	        body;
	
	    switch (args.length) {
	
	        case 2:
	
	            params = args[0];
	            body = args[1];
	
	            break;
	
	        case 1:
	
	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }
	
	            break;
	
	        case 0:
	
	            break;
	
	        default:
	
	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }
	
	    options.body = body;
	    options.params = assign({}, options.params, params);
	
	    return options;
	}
	
	Resource.actions = {
	
	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }
	
	};
	
	/**
	 * Install plugin.
	 */
	
	function plugin(Vue) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    Util(Vue);
	
	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },
	
	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },
	
	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },
	
	        $promise: {
	            get: function () {
	                var _this = this;
	
	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }
	
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	module.exports = plugin;

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){t.exports=n(252)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=o(i);e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent.mdName),"md-theme-"+(t||r.default.material.currentTheme)}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),r.default.material.currentTheme||r.default.material.setCurrentTheme("default")}},t.exports=e.default},function(t,e,n){(function(e){/*!
		 * Vue.js v2.1.6
		 * (c) 2014-2016 Evan You
		 * Released under the MIT License.
		 */
	"use strict";function n(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function o(t){var e=parseFloat(t,10);return e||0===e?e:t}function i(t,e){for(var n=Object.create(null),o=t.split(","),i=0;i<o.length;i++)n[o[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function r(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function a(t,e){return bn.call(t,e)}function s(t){return"string"==typeof t||"number"==typeof t}function d(t){var e=Object.create(null);return function(n){var o=e[n];return o||(e[n]=t(n))}}function c(t,e){function n(n){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function l(t,e){e=e||0;for(var n=t.length-e,o=new Array(n);n--;)o[n]=t[n+e];return o}function u(t,e){for(var n in e)t[n]=e[n];return t}function f(t){return null!==t&&"object"==typeof t}function m(t){return An.call(t)===xn}function p(t){for(var e={},n=0;n<t.length;n++)t[n]&&u(e,t[n]);return e}function h(){}function v(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}function b(t,e){return t==e||!(!f(t)||!f(e))&&JSON.stringify(t)===JSON.stringify(e)}function g(t,e){for(var n=0;n<t.length;n++)if(b(t[n],e))return n;return-1}function _(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function y(t,e,n,o){Object.defineProperty(t,e,{value:n,enumerable:!!o,writable:!0,configurable:!0})}function E(t){if(!Rn.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}function C(t){return/native code/.test(t.toString())}function A(t){Vn.target&&Yn.push(Vn.target),Vn.target=t}function x(){Vn.target=Yn.pop()}function T(t,e){t.__proto__=e}function M(t,e,n){for(var o=0,i=n.length;o<i;o++){var r=n[o];y(t,r,e[r])}}function O(t){if(f(t)){var e;return a(t,"__ob__")&&t.__ob__ instanceof Jn?e=t.__ob__:Xn.shouldConvert&&!jn()&&(Array.isArray(t)||m(t))&&Object.isExtensible(t)&&!t._isVue&&(e=new Jn(t)),e}}function R(t,e,n,o){var i=new Vn,r=Object.getOwnPropertyDescriptor(t,e);if(!r||r.configurable!==!1){var a=r&&r.get,s=r&&r.set,d=O(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return Vn.target&&(i.depend(),d&&d.dep.depend(),Array.isArray(e)&&k(e)),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||(o&&o(),s?s.call(t,e):n=e,d=O(e),i.notify())}})}}function N(t,e,n){if(Array.isArray(t))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(a(t,e))return void(t[e]=n);var o=t.__ob__;return t._isVue||o&&o.vmCount?void Bn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."):o?(R(o.value,e,n),o.dep.notify(),n):void(t[e]=n)}function w(t,e){var n=t.__ob__;return t._isVue||n&&n.vmCount?void Bn("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):void(a(t,e)&&(delete t[e],n&&n.dep.notify()))}function k(t){for(var e=void 0,n=0,o=t.length;n<o;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&k(e)}function S(t,e){if(!e)return t;for(var n,o,i,r=Object.keys(e),s=0;s<r.length;s++)n=r[s],o=t[n],i=e[n],a(t,n)?m(o)&&m(i)&&S(o,i):N(t,n,i);return t}function $(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function P(t,e){var n=Object.create(t||null);return e?u(n,e):n}function L(t){for(var e in t.components){var n=e.toLowerCase();(vn(n)||On.isReservedTag(n))&&Bn("Do not use built-in or reserved HTML elements as component id: "+e)}}function H(t){var e=t.props;if(e){var n,o,i,r={};if(Array.isArray(e))for(n=e.length;n--;)o=e[n],"string"==typeof o?(i=_n(o),r[i]={type:null}):Bn("props must be strings when using array syntax.");else if(m(e))for(var a in e)o=e[a],i=_n(a),r[i]=m(o)?o:{type:o};t.props=r}}function j(t){var e=t.directives;if(e)for(var n in e){var o=e[n];"function"==typeof o&&(e[n]={bind:o,update:o})}}function F(t,e,n){function o(o){var i=Zn[o]||to;l[o]=i(t[o],e[o],n,o)}L(e),H(e),j(e);var i=e.extends;if(i&&(t="function"==typeof i?F(t,i.options,n):F(t,i,n)),e.mixins)for(var r=0,s=e.mixins.length;r<s;r++){var d=e.mixins[r];d.prototype instanceof Ut&&(d=d.options),t=F(t,d,n)}var c,l={};for(c in t)o(c);for(c in e)a(t,c)||o(c);return l}function D(t,e,n,o){if("string"==typeof n){var i=t[e];if(a(i,n))return i[n];var r=_n(n);if(a(i,r))return i[r];var s=yn(r);if(a(i,s))return i[s];var d=i[n]||i[r]||i[s];return o&&!d&&Bn("Failed to resolve "+e.slice(0,-1)+": "+n,t),d}}function I(t,e,n,o){var i=e[t],r=!a(n,t),s=n[t];if(V(i.type)&&(r&&!a(i,"default")?s=!1:""!==s&&s!==Cn(t)||(s=!0)),void 0===s){s=B(o,i,t);var d=Xn.shouldConvert;Xn.shouldConvert=!0,O(s),Xn.shouldConvert=d}return z(i,t,s,o,r),s}function B(t,e,n){if(a(e,"default")){var o=e.default;return f(o)&&Bn('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',t),t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t[n]?t[n]:"function"==typeof o&&e.type!==Function?o.call(t):o}}function z(t,e,n,o,i){if(t.required&&i)return void Bn('Missing required prop: "'+e+'"',o);if(null!=n||t.required){var r=t.type,a=!r||r===!0,s=[];if(r){Array.isArray(r)||(r=[r]);for(var d=0;d<r.length&&!a;d++){var c=U(n,r[d]);s.push(c.expectedType),a=c.valid}}if(!a)return void Bn('Invalid prop: type check failed for prop "'+e+'". Expected '+s.map(yn).join(", ")+", got "+Object.prototype.toString.call(n).slice(8,-1)+".",o);var l=t.validator;l&&(l(n)||Bn('Invalid prop: custom validator check failed for prop "'+e+'".',o))}}function U(t,e){var n,o=W(e);return n="String"===o?typeof t==(o="string"):"Number"===o?typeof t==(o="number"):"Boolean"===o?typeof t==(o="boolean"):"Function"===o?typeof t==(o="function"):"Object"===o?m(t):"Array"===o?Array.isArray(t):t instanceof e,{valid:n,expectedType:o}}function W(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e&&e[1]}function V(t){if(!Array.isArray(t))return"Boolean"===W(t);for(var e=0,n=t.length;e<n;e++)if("Boolean"===W(t[e]))return!0;return!1}function Y(){co.length=0,lo={},uo={},fo=mo=!1}function q(){for(mo=!0,co.sort(function(t,e){return t.id-e.id}),po=0;po<co.length;po++){var t=co[po],e=t.id;if(lo[e]=null,t.run(),null!=lo[e]&&(uo[e]=(uo[e]||0)+1,uo[e]>On._maxUpdateCount)){Bn("You may have an infinite update loop "+(t.user?'in watcher with expression "'+t.expression+'"':"in a component render function."),t.vm);break}}Fn&&On.devtools&&Fn.emit("flush"),Y()}function G(t){var e=t.id;if(null==lo[e]){if(lo[e]=!0,mo){for(var n=co.length-1;n>=0&&co[n].id>t.id;)n--;co.splice(Math.max(n,po)+1,0,t)}else co.push(t);fo||(fo=!0,Dn(q))}}function K(t){bo.clear(),X(t,bo)}function X(t,e){var n,o,i=Array.isArray(t);if((i||f(t))&&Object.isExtensible(t)){if(t.__ob__){var r=t.__ob__.dep.id;if(e.has(r))return;e.add(r)}if(i)for(n=t.length;n--;)X(t[n],e);else for(o=Object.keys(t),n=o.length;n--;)X(t[o[n]],e)}}function J(t){t._watchers=[],Z(t),nt(t),Q(t),tt(t),ot(t)}function Z(t){var e=t.$options.props;if(e){var n=t.$options.propsData||{},o=t.$options._propKeys=Object.keys(e),i=!t.$parent;Xn.shouldConvert=i;for(var r=function(i){var r=o[i];go[r]&&Bn('"'+r+'" is a reserved attribute and cannot be used as component prop.',t),R(t,r,I(r,e,n,t),function(){t.$parent&&!Xn.isSettingProps&&Bn("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \""+r+'"',t)})},a=0;a<o.length;a++)r(a);Xn.shouldConvert=!0}}function Q(t){var e=t.$options.data;e=t._data="function"==typeof e?e.call(t):e||{},m(e)||(e={},Bn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",t));for(var n=Object.keys(e),o=t.$options.props,i=n.length;i--;)o&&a(o,n[i])?Bn('The data property "'+n[i]+'" is already declared as a prop. Use prop default value instead.',t):at(t,n[i]);O(e),e.__ob__&&e.__ob__.vmCount++}function tt(t){var e=t.$options.computed;if(e)for(var n in e){var o=e[n];"function"==typeof o?(_o.get=et(o,t),_o.set=h):(_o.get=o.get?o.cache!==!1?et(o.get,t):c(o.get,t):h,_o.set=o.set?c(o.set,t):h),Object.defineProperty(t,n,_o)}}function et(t,e){var n=new vo(e,t,h,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Vn.target&&n.depend(),n.value}}function nt(t){var e=t.$options.methods;if(e)for(var n in e)t[n]=null==e[n]?h:c(e[n],t),null==e[n]&&Bn('method "'+n+'" has an undefined value in the component definition. Did you reference the function correctly?',t)}function ot(t){var e=t.$options.watch;if(e)for(var n in e){var o=e[n];if(Array.isArray(o))for(var i=0;i<o.length;i++)it(t,n,o[i]);else it(t,n,o)}}function it(t,e,n){var o;m(n)&&(o=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,o)}function rt(t){var e={};e.get=function(){return this._data},e.set=function(t){Bn("Avoid replacing instance root $data. Use nested data properties instead.",this)},Object.defineProperty(t.prototype,"$data",e),t.prototype.$set=N,t.prototype.$delete=w,t.prototype.$watch=function(t,e,n){var o=this;n=n||{},n.user=!0;var i=new vo(o,t,e,n);return n.immediate&&e.call(o,i.value),function(){i.teardown()}}}function at(t,e){_(e)||Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){return t._data[e]},set:function(n){t._data[e]=n}})}function st(t){return new yo(void 0,void 0,void 0,String(t))}function dt(t){var e=new yo(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isCloned=!0,e}function ct(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=dt(t[n]);return e}function lt(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ut(t){t.prototype._mount=function(t,e){var n=this;return n.$el=t,n.$options.render||(n.$options.render=Eo,n.$options.template&&"#"!==n.$options.template.charAt(0)?Bn("You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",n):Bn("Failed to mount component: template or render function not defined.",n)),ft(n,"beforeMount"),n._watcher=new vo(n,function(){n._update(n._render(),e)},h),e=!1,null==n.$vnode&&(n._isMounted=!0,ft(n,"mounted")),n},t.prototype._update=function(t,e){var n=this;n._isMounted&&ft(n,"beforeUpdate");var o=n.$el,i=n._vnode,r=Co;Co=n,n._vnode=t,i?n.$el=n.__patch__(i,t):n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),Co=r,o&&(o.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&ft(n,"updated")},t.prototype._updateFromParent=function(t,e,n,o){var i=this,r=!(!i.$options._renderChildren&&!o);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=o,t&&i.$options.props){Xn.shouldConvert=!1,Xn.isSettingProps=!0;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var d=a[s];i[d]=I(d,i.$options.props,t,i)}Xn.shouldConvert=!0,Xn.isSettingProps=!1,i.$options.propsData=t}if(e){var c=i.$options._parentListeners;i.$options._parentListeners=e,i._updateListeners(e,c)}r&&(i.$slots=jt(o,n.context),i.$forceUpdate())},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){ft(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||r(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,ft(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.__patch__(t._vnode,null)}}}function ft(t,e){var n=t.$options[e];if(n)for(var o=0,i=n.length;o<i;o++)n[o].call(t);t.$emit("hook:"+e)}function mt(t,e,n,o,i){if(t){var r=n.$options._base;if(f(t)&&(t=r.extend(t)),"function"!=typeof t)return void Bn("Invalid Component definition: "+String(t),n);if(!t.cid)if(t.resolved)t=t.resolved;else if(t=yt(t,r,function(){n.$forceUpdate()}),!t)return;zt(t),e=e||{};var a=Et(e,t);if(t.options.functional)return pt(t,a,e,n,o);var s=e.on;e.on=e.nativeOn,t.options.abstract&&(e={}),At(e);var d=t.options.name||i,c=new yo("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:a,listeners:s,tag:i,children:o});return c}}function pt(t,e,n,o,i){var r={},a=t.options.props;if(a)for(var s in a)r[s]=I(s,a,e);var d=Object.create(o),c=function(t,e,n,o){return St(d,t,e,n,o,!0)},l=t.options.render.call(null,c,{props:r,data:n,parent:o,children:i,slots:function(){return jt(i,o)}});return l instanceof yo&&(l.functionalContext=o,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function ht(t,e,n,o){var i=t.componentOptions,r={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},a=t.data.inlineTemplate;return a&&(r.render=a.render,r.staticRenderFns=a.staticRenderFns),new i.Ctor(r)}function vt(t,e,n,o){if(!t.child||t.child._isDestroyed){var i=t.child=ht(t,Co,n,o);i.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var r=t;bt(r,r)}}function bt(t,e){var n=e.componentOptions,o=e.child=t.child;o._updateFromParent(n.propsData,n.listeners,e,n.children)}function gt(t){t.child._isMounted||(t.child._isMounted=!0,ft(t.child,"mounted")),t.data.keepAlive&&(t.child._inactive=!1,ft(t.child,"activated"))}function _t(t){t.child._isDestroyed||(t.data.keepAlive?(t.child._inactive=!0,ft(t.child,"deactivated")):t.child.$destroy())}function yt(t,e,n){if(!t.requested){t.requested=!0;var o=t.pendingCallbacks=[n],i=!0,r=function(n){if(f(n)&&(n=e.extend(n)),t.resolved=n,!i)for(var r=0,a=o.length;r<a;r++)o[r](n)},a=function(e){Bn("Failed to resolve async component: "+String(t)+(e?"\nReason: "+e:""))},s=t(r,a);return s&&"function"==typeof s.then&&!t.resolved&&s.then(r,a),i=!1,t.resolved}t.pendingCallbacks.push(n)}function Et(t,e){var n=e.options.props;if(n){var o={},i=t.attrs,r=t.props,a=t.domProps;if(i||r||a)for(var s in n){var d=Cn(s);Ct(o,r,s,d,!0)||Ct(o,i,s,d)||Ct(o,a,s,d)}return o}}function Ct(t,e,n,o,i){if(e){if(a(e,n))return t[n]=e[n],i||delete e[n],!0;if(a(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function At(t){t.hook||(t.hook={});for(var e=0;e<xo.length;e++){var n=xo[e],o=t.hook[n],i=Ao[n];t.hook[n]=o?xt(i,o):i}}function xt(t,e){return function(n,o,i,r){t(n,o,i,r),e(n,o,i,r)}}function Tt(t,e,n,o){o+=e;var i=t.__injected||(t.__injected={});if(!i[o]){i[o]=!0;var r=t[e];r?t[e]=function(){r.apply(this,arguments),n.apply(this,arguments)}:t[e]=n}}function Mt(t,e,n,o,i){var r,a,s,d,c,l,u;for(r in t)if(a=t[r],s=e[r],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];t[r]=s}else s.fn=a,t[r]=s}else u="~"===r.charAt(0),c=u?r.slice(1):r,l="!"===c.charAt(0),c=l?c.slice(1):c,Array.isArray(a)?n(c,a.invoker=Ot(a),u,l):(a.invoker||(d=a,a=t[r]={},a.fn=d,a.invoker=Rt(a)),n(c,a.invoker,u,l));else Bn('Invalid handler for event "'+r+'": got '+String(a),i);for(r in e)t[r]||(u="~"===r.charAt(0),c=u?r.slice(1):r,l="!"===c.charAt(0),c=l?c.slice(1):c,o(c,e[r].invoker,l))}function Ot(t){return function(e){for(var n=arguments,o=1===arguments.length,i=0;i<t.length;i++)o?t[i](e):t[i].apply(null,n)}}function Rt(t){return function(e){var n=1===arguments.length;n?t.fn(e):t.fn.apply(null,arguments)}}function Nt(t){return s(t)?[st(t)]:Array.isArray(t)?wt(t):void 0}function wt(t,e){var n,o,i,r=[];for(n=0;n<t.length;n++)o=t[n],null!=o&&"boolean"!=typeof o&&(i=r[r.length-1],Array.isArray(o)?r.push.apply(r,wt(o,(e||"")+"_"+n)):s(o)?i&&i.text?i.text+=String(o):""!==o&&r.push(st(o)):o.text&&i&&i.text?r[r.length-1]=st(i.text+o.text):(o.tag&&null==o.key&&null!=e&&(o.key="__vlist"+e+"_"+n+"__"),r.push(o)));return r}function kt(t){return t&&t.filter(function(t){return t&&t.componentOptions})[0]}function St(t,e,n,o,i,r){return(Array.isArray(n)||s(n))&&(i=o,o=n,n=void 0),r&&(i=!0),$t(t,e,n,o,i)}function $t(t,e,n,o,i){if(n&&n.__ob__)return Bn("Avoid using observed data object as vnode data: "+JSON.stringify(n)+"\nAlways create fresh vnode data objects in each render!",t),Eo();if(!e)return Eo();Array.isArray(o)&&"function"==typeof o[0]&&(n=n||{},n.scopedSlots={default:o[0]},o.length=0),i&&(o=Nt(o));var r,a;if("string"==typeof e){var s;a=On.getTagNamespace(e),On.isReservedTag(e)?r=new yo(On.parsePlatformTagName(e),n,o,void 0,void 0,t):(s=D(t.$options,"components",e))?r=mt(s,n,t,o,e):(a="foreignObject"===e?"xhtml":a,r=new yo(e,n,o,void 0,void 0,t))}else r=mt(e,n,t,o);return r?(a&&Pt(r,a),r):Eo()}function Pt(t,e){if(t.ns=e,t.children)for(var n=0,o=t.children.length;n<o;n++){var i=t.children[n];i.tag&&!i.ns&&Pt(i,e)}}function Lt(t){t.$vnode=null,t._vnode=null,t._staticTrees=null;var e=t.$options._parentVnode,n=e&&e.context;t.$slots=jt(t.$options._renderChildren,n),t.$scopedSlots={},t._c=function(e,n,o,i){return St(t,e,n,o,i,!1)},t.$createElement=function(e,n,o,i){return St(t,e,n,o,i,!0)},t.$options.el&&t.$mount(t.$options.el)}function Ht(t){function e(t,e,n){if(Array.isArray(t))for(var o=0;o<t.length;o++)t[o]&&"string"!=typeof t[o]&&i(t[o],e+"_"+o,n);else i(t,e,n)}function i(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}t.prototype.$nextTick=function(t){return Dn(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,o=e.staticRenderFns,i=e._parentVnode;if(t._isMounted)for(var r in t.$slots)t.$slots[r]=ct(t.$slots[r]);i&&i.data.scopedSlots&&(t.$scopedSlots=i.data.scopedSlots),o&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=i;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){if(!On.errorHandler)throw Bn("Error when rendering "+In(t)+":"),e;On.errorHandler.call(null,e,t),a=t._vnode}return a instanceof yo||(Array.isArray(a)&&Bn("Multiple root nodes returned from render function. Render function should return a single root node.",t),a=Eo()),a.parent=i,a},t.prototype._s=n,t.prototype._v=st,t.prototype._n=o,t.prototype._e=Eo,t.prototype._q=b,t.prototype._i=g,t.prototype._m=function(t,n){var o=this._staticTrees[t];return o&&!n?Array.isArray(o)?ct(o):dt(o):(o=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),e(o,"__static__"+t,!1),o)},t.prototype._o=function(t,n,o){return e(t,"__once__"+n+(o?"_"+o:""),!0),t},t.prototype._f=function(t){return D(this.$options,"filters",t,!0)||Mn},t.prototype._l=function(t,e){var n,o,i,r,a;if(Array.isArray(t))for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(f(t))for(r=Object.keys(t),n=new Array(r.length),o=0,i=r.length;o<i;o++)a=r[o],n[o]=e(t[a],a,o);return n},t.prototype._t=function(t,e,n){var o=this.$scopedSlots[t];if(o)return o(n||{})||e;var i=this.$slots[t];return i&&(i._rendered&&Bn('Duplicate presence of slot "'+t+'" found in the same render tree - this will likely cause render errors.',this),i._rendered=!0),i||e},t.prototype._b=function(t,e,n,o){if(n)if(f(n)){Array.isArray(n)&&(n=p(n));for(var i in n)if("class"===i||"style"===i)t[i]=n[i];else{var r=o||On.mustUseProp(e,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={});r[i]=n[i]}}else Bn("v-bind without argument expects an Object or Array value",this);return t},t.prototype._k=function(t,e,n){var o=On.keyCodes[e]||n;return Array.isArray(o)?o.indexOf(t)===-1:o!==t}}function jt(t,e){var n={};if(!t)return n;for(var o,i,r=[],a=0,s=t.length;a<s;a++)if(i=t[a],(i.context===e||i.functionalContext===e)&&i.data&&(o=i.data.slot)){var d=n[o]||(n[o]=[]);"template"===i.tag?d.push.apply(d,i.children):d.push(i)}else r.push(i);return r.length&&(1!==r.length||" "!==r[0].text&&!r[0].isComment)&&(n.default=r),n}function Ft(t){t._events=Object.create(null);var e=t.$options._parentListeners,n=function(e,n,o){o?t.$once(e,n):t.$on(e,n)},o=c(t.$off,t);t._updateListeners=function(e,i){Mt(e,i||{},n,o,t)},e&&t._updateListeners(e)}function Dt(t){t.prototype.$on=function(t,e){var n=this;return(n._events[t]||(n._events[t]=[])).push(e),n},t.prototype.$once=function(t,e){function n(){o.$off(t,n),e.apply(o,arguments)}var o=this;return n.fn=e,o.$on(t,n),o},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var o=n._events[t];if(!o)return n;if(1===arguments.length)return n._events[t]=null,n;for(var i,r=o.length;r--;)if(i=o[r],i===e||i.fn===e){o.splice(r,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?l(n):n;for(var o=l(arguments,1),i=0,r=n.length;i<r;i++)n[i].apply(e,o)}return e}}function It(t){t.prototype._init=function(t){var e=this;e._uid=To++,e._isVue=!0,t&&t._isComponent?Bt(e,t):e.$options=F(zt(e.constructor),t||{},e),Qn(e),e._self=e,lt(e),Ft(e),ft(e,"beforeCreate"),J(e),ft(e,"created"),Lt(e)}}function Bt(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function zt(t){var e=t.options;if(t.super){var n=t.super.options,o=t.superOptions,i=t.extendOptions;n!==o&&(t.superOptions=n,i.render=e.render,i.staticRenderFns=e.staticRenderFns,i._scopeId=e._scopeId,e=t.options=F(n,i),e.name&&(e.components[e.name]=t))}return e}function Ut(t){this instanceof Ut||Bn("Vue is a constructor and should be called with the `new` keyword"),this._init(t)}function Wt(t){t.use=function(t){if(!t.installed){var e=l(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}}}function Vt(t){t.mixin=function(t){this.options=F(this.options,t)}}function Yt(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,o=n.cid,i=t._Ctor||(t._Ctor={});if(i[o])return i[o];var r=t.name||n.options.name;/^[a-zA-Z][\w-]*$/.test(r)||Bn('Invalid component name: "'+r+'". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=F(n.options,t),a.super=n,a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,On._assetTypes.forEach(function(t){a[t]=n[t]}),r&&(a.options.components[r]=a),a.superOptions=n.options,a.extendOptions=t,i[o]=a,a}}function qt(t){On._assetTypes.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&On.isReservedTag(t)&&Bn("Do not use built-in or reserved HTML elements as component id: "+t),"component"===e&&m(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Gt(t,e){return"string"==typeof t?t.split(",").indexOf(e)>-1:t.test(e)}function Kt(t){var e={};e.get=function(){return On},e.set=function(){Bn("Do not replace the Vue.config object, set individual fields instead.")},Object.defineProperty(t,"config",e),t.util=eo,t.set=N,t.delete=w,t.nextTick=Dn,t.options=Object.create(null),On._assetTypes.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,u(t.options.components,Ro),Wt(t),Vt(t),Yt(t),qt(t)}function Xt(t){for(var e=t.data,n=t,o=t;o.child;)o=o.child._vnode,o.data&&(e=Jt(o.data,e));for(;n=n.parent;)n.data&&(e=Jt(e,n.data));return Zt(e)}function Jt(t,e){return{staticClass:Qt(t.staticClass,e.staticClass),class:t.class?[t.class,e.class]:e.class}}function Zt(t){var e=t.class,n=t.staticClass;return n||e?Qt(n,te(e)):""}function Qt(t,e){return t?e?t+" "+e:t:e||""}function te(t){var e="";if(!t)return e;if("string"==typeof t)return t;if(Array.isArray(t)){for(var n,o=0,i=t.length;o<i;o++)t[o]&&(n=te(t[o]))&&(e+=n+" ");return e.slice(0,-1)}if(f(t)){for(var r in t)t[r]&&(e+=r+" ");return e.slice(0,-1)}return e}function ee(t){return Bo(t)?"svg":"math"===t?"math":void 0}function ne(t){if(!wn)return!0;if(zo(t))return!1;if(t=t.toLowerCase(),null!=Uo[t])return Uo[t];var e=document.createElement(t);return t.indexOf("-")>-1?Uo[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Uo[t]=/HTMLUnknownElement/.test(e.toString())}function oe(t){if("string"==typeof t){var e=t;if(t=document.querySelector(t),!t)return Bn("Cannot find element: "+e),document.createElement("div")}return t}function ie(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&"multiple"in e.data.attrs&&n.setAttribute("multiple","multiple"),n)}function re(t,e){return document.createElementNS(Do[t],e)}function ae(t){return document.createTextNode(t)}function se(t){return document.createComment(t)}function de(t,e,n){t.insertBefore(e,n)}function ce(t,e){t.removeChild(e)}function le(t,e){t.appendChild(e)}function ue(t){return t.parentNode}function fe(t){return t.nextSibling}function me(t){return t.tagName}function pe(t,e){t.textContent=e}function he(t,e,n){t.setAttribute(e,n)}function ve(t,e){var n=t.data.ref;if(n){var o=t.context,i=t.child||t.elm,a=o.$refs;e?Array.isArray(a[n])?r(a[n],i):a[n]===i&&(a[n]=void 0):t.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(i)<0?a[n].push(i):a[n]=[i]:a[n]=i}}function be(t){return null==t}function ge(t){return null!=t}function _e(t,e){return t.key===e.key&&t.tag===e.tag&&t.isComment===e.isComment&&!t.data==!e.data}function ye(t,e,n){var o,i,r={};for(o=e;o<=n;++o)i=t[o].key,ge(i)&&(r[i]=o);return r}function Ee(t){function e(t){return new yo(N.tagName(t).toLowerCase(),{},[],void 0,t)}function o(t,e){function n(){0===--n.listeners&&r(t)}return n.listeners=e,n}function r(t){var e=N.parentNode(t);e&&N.removeChild(e,t)}function a(t,e,n,o,i){if(t.isRootInsert=!i,!d(t,e,n,o)){var r=t.data,a=t.children,s=t.tag;ge(s)?(r&&r.pre&&w++,w||t.ns||On.ignoredElements&&On.ignoredElements.indexOf(s)>-1||!On.isUnknownElement(s)||Bn("Unknown custom element: <"+s+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',t.context),t.elm=t.ns?N.createElementNS(t.ns,s):N.createElement(s,t),h(t),u(t,a,e),ge(r)&&m(t,e),l(n,t.elm,o),r&&r.pre&&w--):t.isComment?(t.elm=N.createComment(t.text),l(n,t.elm,o)):(t.elm=N.createTextNode(t.text),l(n,t.elm,o))}}function d(t,e,n,o){var i=t.data;if(ge(i)){var r=ge(t.child)&&i.keepAlive;if(ge(i=i.hook)&&ge(i=i.init)&&i(t,!1,n,o),ge(t.child))return p(t,e),r&&c(t,e,n,o),!0}}function c(t,e,n,o){for(var i,r=t;r.child;)if(r=r.child._vnode,ge(i=r.data)&&ge(i=i.transition)){for(i=0;i<O.activate.length;++i)O.activate[i](Yo,r);e.push(r);break}l(n,t.elm,o)}function l(t,e,n){t&&(n?N.insertBefore(t,e,n):N.appendChild(t,e))}function u(t,e,n){if(Array.isArray(e))for(var o=0;o<e.length;++o)a(e[o],n,t.elm,null,!0);else s(t.text)&&N.appendChild(t.elm,N.createTextNode(t.text))}function f(t){for(;t.child;)t=t.child._vnode;return ge(t.tag)}function m(t,e){for(var n=0;n<O.create.length;++n)O.create[n](Yo,t);T=t.data.hook,ge(T)&&(T.create&&T.create(Yo,t),T.insert&&e.push(t))}function p(t,e){t.data.pendingInsert&&e.push.apply(e,t.data.pendingInsert),t.elm=t.child.$el,f(t)?(m(t,e),h(t)):(ve(t),e.push(t))}function h(t){var e;ge(e=t.context)&&ge(e=e.$options._scopeId)&&N.setAttribute(t.elm,e,""),ge(e=Co)&&e!==t.context&&ge(e=e.$options._scopeId)&&N.setAttribute(t.elm,e,"")}function v(t,e,n,o,i,r){for(;o<=i;++o)a(n[o],r,t,e)}function b(t){var e,n,o=t.data;if(ge(o))for(ge(e=o.hook)&&ge(e=e.destroy)&&e(t),e=0;e<O.destroy.length;++e)O.destroy[e](t);if(ge(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function g(t,e,n,o){for(;n<=o;++n){var i=e[n];ge(i)&&(ge(i.tag)?(_(i),b(i)):N.removeChild(t,i.elm))}}function _(t,e){if(e||ge(t.data)){var n=O.remove.length+1;for(e?e.listeners+=n:e=o(t.elm,n),ge(T=t.child)&&ge(T=T._vnode)&&ge(T.data)&&_(T,e),T=0;T<O.remove.length;++T)O.remove[T](t,e);ge(T=t.data.hook)&&ge(T=T.remove)?T(t,e):e()}else r(t.elm)}function y(t,e,n,o,i){for(var r,s,d,c,l=0,u=0,f=e.length-1,m=e[0],p=e[f],h=n.length-1,b=n[0],_=n[h],y=!i;l<=f&&u<=h;)be(m)?m=e[++l]:be(p)?p=e[--f]:_e(m,b)?(E(m,b,o),m=e[++l],b=n[++u]):_e(p,_)?(E(p,_,o),p=e[--f],_=n[--h]):_e(m,_)?(E(m,_,o),y&&N.insertBefore(t,m.elm,N.nextSibling(p.elm)),m=e[++l],_=n[--h]):_e(p,b)?(E(p,b,o),y&&N.insertBefore(t,p.elm,m.elm),p=e[--f],b=n[++u]):(be(r)&&(r=ye(e,l,f)),s=ge(b.key)?r[b.key]:null,be(s)?(a(b,o,t,m.elm),b=n[++u]):(d=e[s],d||Bn("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."),_e(d,b)?(E(d,b,o),e[s]=void 0,y&&N.insertBefore(t,b.elm,m.elm),b=n[++u]):(a(b,o,t,m.elm),b=n[++u])));l>f?(c=be(n[h+1])?null:n[h+1].elm,v(t,c,n,u,h,o)):u>h&&g(t,e,l,f)}function E(t,e,n,o){if(t!==e){if(e.isStatic&&t.isStatic&&e.key===t.key&&(e.isCloned||e.isOnce))return e.elm=t.elm,void(e.child=t.child);var i,r=e.data,a=ge(r);a&&ge(i=r.hook)&&ge(i=i.prepatch)&&i(t,e);var s=e.elm=t.elm,d=t.children,c=e.children;if(a&&f(e)){for(i=0;i<O.update.length;++i)O.update[i](t,e);ge(i=r.hook)&&ge(i=i.update)&&i(t,e)}be(e.text)?ge(d)&&ge(c)?d!==c&&y(s,d,c,n,o):ge(c)?(ge(t.text)&&N.setTextContent(s,""),v(s,null,c,0,c.length-1,n)):ge(d)?g(s,d,0,d.length-1):ge(t.text)&&N.setTextContent(s,""):t.text!==e.text&&N.setTextContent(s,e.text),a&&ge(i=r.hook)&&ge(i=i.postpatch)&&i(t,e)}}function C(t,e,n){if(n&&t.parent)t.parent.data.pendingInsert=e;else for(var o=0;o<e.length;++o)e[o].data.hook.insert(e[o])}function A(t,e,n){if(!x(t,e))return!1;e.elm=t;var o=e.tag,i=e.data,r=e.children;if(ge(i)&&(ge(T=i.hook)&&ge(T=T.init)&&T(e,!0),ge(T=e.child)))return p(e,n),!0;if(ge(o)){if(ge(r))if(t.hasChildNodes()){for(var a=!0,s=t.firstChild,d=0;d<r.length;d++){if(!s||!A(s,r[d],n)){a=!1;break}s=s.nextSibling}if(!a||s)return"undefined"==typeof console||k||(k=!0,console.warn("Parent: ",t),console.warn("Mismatching childNodes vs. VNodes: ",t.childNodes,r)),!1}else u(e,r,n);if(ge(i))for(var c in i)if(!S(c)){m(e,n);break}}return!0}function x(t,e){return e.tag?0===e.tag.indexOf("vue-component")||e.tag.toLowerCase()===(t.tagName&&t.tagName.toLowerCase()):n(e.text)===t.data}var T,M,O={},R=t.modules,N=t.nodeOps;for(T=0;T<qo.length;++T)for(O[qo[T]]=[],M=0;M<R.length;++M)void 0!==R[M][qo[T]]&&O[qo[T]].push(R[M][qo[T]]);var w=0,k=!1,S=i("attrs,style,class,staticClass,staticStyle,key");return function(t,n,o,i,r,s){if(!n)return void(t&&b(t));var d,c,l=!1,u=[];if(t){var m=ge(t.nodeType);if(!m&&_e(t,n))E(t,n,u,i);else{if(m){if(1===t.nodeType&&t.hasAttribute("server-rendered")&&(t.removeAttribute("server-rendered"),o=!0),o){if(A(t,n,u))return C(n,u,!0),t;Bn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}t=e(t)}if(d=t.elm,c=N.parentNode(d),a(n,u,c,N.nextSibling(d)),n.parent){for(var p=n.parent;p;)p.elm=n.elm,p=p.parent;if(f(n))for(var h=0;h<O.create.length;++h)O.create[h](Yo,n.parent)}null!==c?g(c,[t],0,0):ge(t.tag)&&b(t)}}else l=!0,a(n,u,r,s);return C(n,u,l),n.elm}}function Ce(t,e){(t.data.directives||e.data.directives)&&Ae(t,e)}function Ae(t,e){var n,o,i,r=t===Yo,a=xe(t.data.directives,t.context),s=xe(e.data.directives,e.context),d=[],c=[];for(n in s)o=a[n],i=s[n],o?(i.oldValue=o.value,Me(i,"update",e,t),i.def&&i.def.componentUpdated&&c.push(i)):(Me(i,"bind",e,t),i.def&&i.def.inserted&&d.push(i));if(d.length){var l=function(){for(var n=0;n<d.length;n++)Me(d[n],"inserted",e,t)};r?Tt(e.data.hook||(e.data.hook={}),"insert",l,"dir-insert"):l()}if(c.length&&Tt(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var n=0;n<c.length;n++)Me(c[n],"componentUpdated",e,t)},"dir-postpatch"),!r)for(n in a)s[n]||Me(a[n],"unbind",t)}function xe(t,e){var n=Object.create(null);if(!t)return n;var o,i;for(o=0;o<t.length;o++)i=t[o],
	i.modifiers||(i.modifiers=Ko),n[Te(i)]=i,i.def=D(e.$options,"directives",i.name,!0);return n}function Te(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Me(t,e,n,o){var i=t.def&&t.def[e];i&&i(n.elm,t,n,o)}function Oe(t,e){if(t.data.attrs||e.data.attrs){var n,o,i,r=e.elm,a=t.data.attrs||{},s=e.data.attrs||{};s.__ob__&&(s=e.data.attrs=u({},s));for(n in s)o=s[n],i=a[n],i!==o&&Re(r,n,o);$n&&s.value!==a.value&&Re(r,"value",s.value);for(n in a)null==s[n]&&(Ho(n)?r.removeAttributeNS(Lo,jo(n)):$o(n)||r.removeAttribute(n))}}function Re(t,e,n){Po(e)?Fo(n)?t.removeAttribute(e):t.setAttribute(e,e):$o(e)?t.setAttribute(e,Fo(n)||"false"===n?"false":"true"):Ho(e)?Fo(n)?t.removeAttributeNS(Lo,jo(e)):t.setAttributeNS(Lo,e,n):Fo(n)?t.removeAttribute(e):t.setAttribute(e,n)}function Ne(t,e){var n=e.elm,o=e.data,i=t.data;if(o.staticClass||o.class||i&&(i.staticClass||i.class)){var r=Xt(e),a=n._transitionClasses;a&&(r=Qt(r,te(a))),r!==n._prevClass&&(n.setAttribute("class",r),n._prevClass=r)}}function we(t,e,n,o){if(n){var i=e;e=function(n){ke(t,e,o),1===arguments.length?i(n):i.apply(null,arguments)}}No.addEventListener(t,e,o)}function ke(t,e,n){No.removeEventListener(t,e,n)}function Se(t,e){if(t.data.on||e.data.on){var n=e.data.on||{},o=t.data.on||{};No=e.elm,Mt(n,o,we,ke,e.context)}}function $e(t,e){if(t.data.domProps||e.data.domProps){var n,o,i=e.elm,r=t.data.domProps||{},a=e.data.domProps||{};a.__ob__&&(a=e.data.domProps=u({},a));for(n in r)null==a[n]&&(i[n]="");for(n in a)if(o=a[n],"textContent"!==n&&"innerHTML"!==n||(e.children&&(e.children.length=0),o!==r[n]))if("value"===n){i._value=o;var s=null==o?"":String(o);!i.composing&&(document.activeElement!==i&&i.value!==s||Pe(e,s))&&(i.value=s)}else i[n]=o}}function Pe(t,e){var n=t.elm.value,i=t.elm._vModifiers;return i&&i.number||"number"===t.elm.type?o(n)!==o(e):i&&i.trim?n.trim()!==e.trim():n!==e}function Le(t){var e=He(t.style);return t.staticStyle?u(t.staticStyle,e):e}function He(t){return Array.isArray(t)?p(t):"string"==typeof t?ei(t):t}function je(t,e){var n,o={};if(e)for(var i=t;i.child;)i=i.child._vnode,i.data&&(n=Le(i.data))&&u(o,n);(n=Le(t.data))&&u(o,n);for(var r=t;r=r.parent;)r.data&&(n=Le(r.data))&&u(o,n);return o}function Fe(t,e){var n=e.data,o=t.data;if(n.staticStyle||n.style||o.staticStyle||o.style){var i,r,a=e.elm,s=t.data.staticStyle,d=t.data.style||{},c=s||d,l=He(e.data.style)||{};e.data.style=l.__ob__?u({},l):l;var f=je(e,!0);for(r in c)null==f[r]&&ii(a,r,"");for(r in f)i=f[r],i!==c[r]&&ii(a,r,null==i?"":i)}}function De(t,e){if(e&&e.trim())if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+t.getAttribute("class")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ie(t,e){if(e&&e.trim())if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e);else{for(var n=" "+t.getAttribute("class")+" ",o=" "+e+" ";n.indexOf(o)>=0;)n=n.replace(o," ");t.setAttribute("class",n.trim())}}function Be(t){hi(function(){hi(t)})}function ze(t,e){(t._transitionClasses||(t._transitionClasses=[])).push(e),De(t,e)}function Ue(t,e){t._transitionClasses&&r(t._transitionClasses,e),Ie(t,e)}function We(t,e,n){var o=Ve(t,e),i=o.type,r=o.timeout,a=o.propCount;if(!i)return n();var s=i===ci?fi:pi,d=0,c=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++d>=a&&c()};setTimeout(function(){d<a&&c()},r+1),t.addEventListener(s,l)}function Ve(t,e){var n,o=window.getComputedStyle(t),i=o[ui+"Delay"].split(", "),r=o[ui+"Duration"].split(", "),a=Ye(i,r),s=o[mi+"Delay"].split(", "),d=o[mi+"Duration"].split(", "),c=Ye(s,d),l=0,u=0;e===ci?a>0&&(n=ci,l=a,u=r.length):e===li?c>0&&(n=li,l=c,u=d.length):(l=Math.max(a,c),n=l>0?a>c?ci:li:null,u=n?n===ci?r.length:d.length:0);var f=n===ci&&vi.test(o[ui+"Property"]);return{type:n,timeout:l,propCount:u,hasTransform:f}}function Ye(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return qe(e)+qe(t[n])}))}function qe(t){return 1e3*Number(t.slice(0,-1))}function Ge(t,e){var n=t.elm;n._leaveCb&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=Xe(t.data.transition);if(o&&!n._enterCb&&1===n.nodeType){for(var i=o.css,r=o.type,a=o.enterClass,s=o.enterActiveClass,d=o.appearClass,c=o.appearActiveClass,l=o.beforeEnter,u=o.enter,f=o.afterEnter,m=o.enterCancelled,p=o.beforeAppear,h=o.appear,v=o.afterAppear,b=o.appearCancelled,g=Co,_=Co.$vnode;_&&_.parent;)_=_.parent,g=_.context;var y=!g._isMounted||!t.isRootInsert;if(!y||h||""===h){var E=y?d:a,C=y?c:s,A=y?p||l:l,x=y&&"function"==typeof h?h:u,T=y?v||f:f,M=y?b||m:m,O=i!==!1&&!$n,R=x&&(x._length||x.length)>1,N=n._enterCb=Je(function(){O&&Ue(n,C),N.cancelled?(O&&Ue(n,E),M&&M(n)):T&&T(n),n._enterCb=null});t.data.show||Tt(t.data.hook||(t.data.hook={}),"insert",function(){var e=n.parentNode,o=e&&e._pending&&e._pending[t.key];o&&o.context===t.context&&o.tag===t.tag&&o.elm._leaveCb&&o.elm._leaveCb(),x&&x(n,N)},"transition-insert"),A&&A(n),O&&(ze(n,E),ze(n,C),Be(function(){Ue(n,E),N.cancelled||R||We(n,r,N)})),t.data.show&&(e&&e(),x&&x(n,N)),O||R||N()}}}function Ke(t,e){function n(){v.cancelled||(t.data.show||((o.parentNode._pending||(o.parentNode._pending={}))[t.key]=t),c&&c(o),p&&(ze(o,s),ze(o,d),Be(function(){Ue(o,s),v.cancelled||h||We(o,a,v)})),l&&l(o,v),p||h||v())}var o=t.elm;o._enterCb&&(o._enterCb.cancelled=!0,o._enterCb());var i=Xe(t.data.transition);if(!i)return e();if(!o._leaveCb&&1===o.nodeType){var r=i.css,a=i.type,s=i.leaveClass,d=i.leaveActiveClass,c=i.beforeLeave,l=i.leave,u=i.afterLeave,f=i.leaveCancelled,m=i.delayLeave,p=r!==!1&&!$n,h=l&&(l._length||l.length)>1,v=o._leaveCb=Je(function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[t.key]=null),p&&Ue(o,d),v.cancelled?(p&&Ue(o,s),f&&f(o)):(e(),u&&u(o)),o._leaveCb=null});m?m(n):n()}}function Xe(t){if(t){if("object"==typeof t){var e={};return t.css!==!1&&u(e,bi(t.name||"v")),u(e,t),e}return"string"==typeof t?bi(t):void 0}}function Je(t){var e=!1;return function(){e||(e=!0,t())}}function Ze(t,e){e.data.show||Ge(e)}function Qe(t,e,n){var o=e.value,i=t.multiple;if(i&&!Array.isArray(o))return void Bn('<select multiple v-model="'+e.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(o).slice(8,-1),n);for(var r,a,s=0,d=t.options.length;s<d;s++)if(a=t.options[s],i)r=g(o,en(a))>-1,a.selected!==r&&(a.selected=r);else if(b(en(a),o))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}function tn(t,e){for(var n=0,o=e.length;n<o;n++)if(b(en(e[n]),t))return!1;return!0}function en(t){return"_value"in t?t._value:t.value}function nn(t){t.target.composing=!0}function on(t){t.target.composing=!1,rn(t.target,"input")}function rn(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function an(t){return!t.child||t.data&&t.data.transition?t:an(t.child._vnode)}function sn(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?sn(kt(e.children)):t}function dn(t){var e={},n=t.$options;for(var o in n.propsData)e[o]=t[o];var i=n._parentListeners;for(var r in i)e[_n(r)]=i[r].fn;return e}function cn(t,e){return/\d-keep-alive$/.test(e.tag)?t("keep-alive"):null}function ln(t){for(;t=t.parent;)if(t.data.transition)return!0}function un(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function fn(t){t.data.newPos=t.elm.getBoundingClientRect()}function mn(t){var e=t.data.pos,n=t.data.newPos,o=e.left-n.left,i=e.top-n.top;if(o||i){t.data.moved=!0;var r=t.elm.style;r.transform=r.WebkitTransform="translate("+o+"px,"+i+"px)",r.transitionDuration="0s"}}var pn,hn,vn=i("slot,component",!0),bn=Object.prototype.hasOwnProperty,gn=/-(\w)/g,_n=d(function(t){return t.replace(gn,function(t,e){return e?e.toUpperCase():""})}),yn=d(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),En=/([^-])([A-Z])/g,Cn=d(function(t){return t.replace(En,"$1-$2").replace(En,"$1-$2").toLowerCase()}),An=Object.prototype.toString,xn="[object Object]",Tn=function(){return!1},Mn=function(t){return t},On={optionMergeStrategies:Object.create(null),silent:!1,devtools:!0,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Tn,isUnknownElement:Tn,getTagNamespace:h,parsePlatformTagName:Mn,mustUseProp:Tn,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},Rn=/[^\w.$]/,Nn="__proto__"in{},wn="undefined"!=typeof window,kn=wn&&window.navigator.userAgent.toLowerCase(),Sn=kn&&/msie|trident/.test(kn),$n=kn&&kn.indexOf("msie 9.0")>0,Pn=kn&&kn.indexOf("edge/")>0,Ln=kn&&kn.indexOf("android")>0,Hn=kn&&/iphone|ipad|ipod|ios/.test(kn),jn=function(){return void 0===pn&&(pn=!wn&&"undefined"!=typeof e&&"server"===e.process.env.VUE_ENV),pn},Fn=wn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Dn=function(){function t(){o=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],o=!1;if("undefined"!=typeof Promise&&C(Promise)){var i=Promise.resolve(),r=function(t){console.error(t)};e=function(){i.then(t).catch(r),Hn&&setTimeout(h)}}else if("undefined"==typeof MutationObserver||!C(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())e=function(){setTimeout(t,0)};else{var a=1,s=new MutationObserver(t),d=document.createTextNode(String(a));s.observe(d,{characterData:!0}),e=function(){a=(a+1)%2,d.data=String(a)}}return function(t,i){var r;if(n.push(function(){t&&t.call(i),r&&r(i)}),o||(o=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){r=t})}}();hn="undefined"!=typeof Set&&C(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return this.set[t]===!0},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var In,Bn=h,zn="undefined"!=typeof console;Bn=function(t,e){zn&&!On.silent&&console.error("[Vue warn]: "+t+" "+(e?Un(In(e)):""))},In=function(t){if(t.$root===t)return"root instance";var e=t._isVue?t.$options.name||t.$options._componentTag:t.name;return(e?"component <"+e+">":"anonymous component")+(t._isVue&&t.$options.__file?" at "+t.$options.__file:"")};var Un=function(t){return"anonymous component"===t&&(t+=' - use the "name" option for better debugging messages.'),"\n(found in "+t+")"},Wn=0,Vn=function(){this.id=Wn++,this.subs=[]};Vn.prototype.addSub=function(t){this.subs.push(t)},Vn.prototype.removeSub=function(t){r(this.subs,t)},Vn.prototype.depend=function(){Vn.target&&Vn.target.addDep(this)},Vn.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},Vn.target=null;var Yn=[],qn=Array.prototype,Gn=Object.create(qn);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=qn[t];y(Gn,t,function(){for(var n=arguments,o=arguments.length,i=new Array(o);o--;)i[o]=n[o];var r,a=e.apply(this,i),s=this.__ob__;switch(t){case"push":r=i;break;case"unshift":r=i;break;case"splice":r=i.slice(2)}return r&&s.observeArray(r),s.dep.notify(),a})});var Kn=Object.getOwnPropertyNames(Gn),Xn={shouldConvert:!0,isSettingProps:!1},Jn=function(t){if(this.value=t,this.dep=new Vn,this.vmCount=0,y(t,"__ob__",this),Array.isArray(t)){var e=Nn?T:M;e(t,Gn,Kn),this.observeArray(t)}else this.walk(t)};Jn.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)R(t,e[n],t[e[n]])},Jn.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)O(t[e])};var Zn=On.optionMergeStrategies;Zn.el=Zn.propsData=function(t,e,n,o){return n||Bn('option "'+o+'" can only be used during instance creation with the `new` keyword.'),to(t,e)},Zn.data=function(t,e,n){return n?t||e?function(){var o="function"==typeof e?e.call(n):e,i="function"==typeof t?t.call(n):void 0;return o?S(o,i):i}:void 0:e?"function"!=typeof e?(Bn('The "data" option should be a function that returns a per-instance value in component definitions.',n),t):t?function(){return S(e.call(this),t.call(this))}:e:t},On._lifecycleHooks.forEach(function(t){Zn[t]=$}),On._assetTypes.forEach(function(t){Zn[t+"s"]=P}),Zn.watch=function(t,e){if(!e)return t;if(!t)return e;var n={};u(n,t);for(var o in e){var i=n[o],r=e[o];i&&!Array.isArray(i)&&(i=[i]),n[o]=i?i.concat(r):[r]}return n},Zn.props=Zn.methods=Zn.computed=function(t,e){if(!e)return t;if(!t)return e;var n=Object.create(null);return u(n,t),u(n,e),n};var Qn,to=function(t,e){return void 0===e?t:e},eo=Object.freeze({defineReactive:R,_toString:n,toNumber:o,makeMap:i,isBuiltInTag:vn,remove:r,hasOwn:a,isPrimitive:s,cached:d,camelize:_n,capitalize:yn,hyphenate:Cn,bind:c,toArray:l,extend:u,isObject:f,isPlainObject:m,toObject:p,noop:h,no:Tn,identity:Mn,genStaticKeys:v,looseEqual:b,looseIndexOf:g,isReserved:_,def:y,parsePath:E,hasProto:Nn,inBrowser:wn,UA:kn,isIE:Sn,isIE9:$n,isEdge:Pn,isAndroid:Ln,isIOS:Hn,isServerRendering:jn,devtools:Fn,nextTick:Dn,get _Set(){return hn},mergeOptions:F,resolveAsset:D,get warn(){return Bn},get formatComponentName(){return In},validateProp:I}),no=i("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),oo=function(t,e){Bn('Property or method "'+e+'" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.',t)},io="undefined"!=typeof Proxy&&Proxy.toString().match(/native code/);if(io){var ro=i("stop,prevent,self,ctrl,shift,alt,meta");On.keyCodes=new Proxy(On.keyCodes,{set:function(t,e,n){return ro(e)?(Bn("Avoid overwriting built-in modifier in config.keyCodes: ."+e),!1):(t[e]=n,!0)}})}var ao={has:function t(e,n){var t=n in e,o=no(n)||"_"===n.charAt(0);return t||o||oo(e,n),t||!o}},so={get:function(t,e){return"string"!=typeof e||e in t||oo(t,e),t[e]}};Qn=function(t){if(io){var e=t.$options,n=e.render&&e.render._withStripped?so:ao;t._renderProxy=new Proxy(t,n)}else t._renderProxy=t};var co=[],lo={},uo={},fo=!1,mo=!1,po=0,ho=0,vo=function(t,e,n,o){void 0===o&&(o={}),this.vm=t,t._watchers.push(this),this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.expression=e.toString(),this.cb=n,this.id=++ho,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new hn,this.newDepIds=new hn,"function"==typeof e?this.getter=e:(this.getter=E(e),this.getter||(this.getter=function(){},Bn('Failed watching path: "'+e+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',t))),this.value=this.lazy?void 0:this.get()};vo.prototype.get=function(){A(this);var t=this.getter.call(this.vm,this.vm);return this.deep&&K(t),x(),this.cleanupDeps(),t},vo.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},vo.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var o=this.depIds;this.depIds=this.newDepIds,this.newDepIds=o,this.newDepIds.clear(),o=this.deps,this.deps=this.newDeps,this.newDeps=o,this.newDeps.length=0},vo.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():G(this)},vo.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||f(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){if(!On.errorHandler)throw Bn('Error in watcher "'+this.expression+'"',this.vm),t;On.errorHandler.call(null,t,this.vm)}else this.cb.call(this.vm,t,e)}}},vo.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},vo.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},vo.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var bo=new hn,go={key:1,ref:1,slot:1},_o={enumerable:!0,configurable:!0,get:h,set:h},yo=function(t,e,n,o,i,r,a){this.tag=t,this.data=e,this.children=n,this.text=o,this.elm=i,this.ns=void 0,this.context=r,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},Eo=function(){var t=new yo;return t.text="",t.isComment=!0,t},Co=null,Ao={init:vt,prepatch:bt,insert:gt,destroy:_t},xo=Object.keys(Ao),To=0;It(Ut),rt(Ut),Dt(Ut),ut(Ut),Ht(Ut);var Mo=[String,RegExp],Oo={name:"keep-alive",abstract:!0,props:{include:Mo,exclude:Mo},created:function(){this.cache=Object.create(null)},render:function(){var t=kt(this.$slots.default);if(t&&t.componentOptions){var e=t.componentOptions,n=e.Ctor.options.name||e.tag;if(n&&(this.include&&!Gt(this.include,n)||this.exclude&&Gt(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.child=this.cache[o].child:this.cache[o]=t,t.data.keepAlive=!0}return t},destroyed:function(){var t=this;for(var e in this.cache){var n=t.cache[e];ft(n.child,"deactivated"),n.child.$destroy()}}},Ro={KeepAlive:Oo};Kt(Ut),Object.defineProperty(Ut.prototype,"$isServer",{get:jn}),Ut.version="2.1.6";var No,wo,ko=i("input,textarea,option,select"),So=function(t,e){return"value"===e&&ko(t)||"selected"===e&&"option"===t||"checked"===e&&"input"===t||"muted"===e&&"video"===t},$o=i("contenteditable,draggable,spellcheck"),Po=i("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Lo="http://www.w3.org/1999/xlink",Ho=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},jo=function(t){return Ho(t)?t.slice(6,t.length):""},Fo=function(t){return null==t||t===!1},Do={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml"},Io=i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Bo=i("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),zo=function(t){return Io(t)||Bo(t)},Uo=Object.create(null),Wo=Object.freeze({createElement:ie,createElementNS:re,createTextNode:ae,createComment:se,insertBefore:de,removeChild:ce,appendChild:le,parentNode:ue,nextSibling:fe,tagName:me,setTextContent:pe,setAttribute:he}),Vo={create:function(t,e){ve(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ve(t,!0),ve(e))},destroy:function(t){ve(t,!0)}},Yo=new yo("",{},[]),qo=["create","activate","update","remove","destroy"],Go={create:Ce,update:Ce,destroy:function(t){Ce(t,Yo)}},Ko=Object.create(null),Xo=[Vo,Go],Jo={create:Oe,update:Oe},Zo={create:Ne,update:Ne},Qo={create:Se,update:Se},ti={create:$e,update:$e},ei=d(function(t){var e={},n=/;(?![^(]*\))/g,o=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(o);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}),ni=/^--/,oi=/\s*!important$/,ii=function(t,e,n){ni.test(e)?t.style.setProperty(e,n):oi.test(n)?t.style.setProperty(e,n.replace(oi,""),"important"):t.style[ai(e)]=n},ri=["Webkit","Moz","ms"],ai=d(function(t){if(wo=wo||document.createElement("div"),t=_n(t),"filter"!==t&&t in wo.style)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ri.length;n++){var o=ri[n]+e;if(o in wo.style)return o}}),si={create:Fe,update:Fe},di=wn&&!$n,ci="transition",li="animation",ui="transition",fi="transitionend",mi="animation",pi="animationend";di&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ui="WebkitTransition",fi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(mi="WebkitAnimation",pi="webkitAnimationEnd"));var hi=wn&&window.requestAnimationFrame||setTimeout,vi=/\b(transform|all)(,|$)/,bi=d(function(t){return{enterClass:t+"-enter",leaveClass:t+"-leave",appearClass:t+"-enter",enterActiveClass:t+"-enter-active",leaveActiveClass:t+"-leave-active",appearActiveClass:t+"-enter-active"}}),gi=wn?{create:Ze,activate:Ze,remove:function(t,e){t.data.show?e():Ke(t,e)}}:{},_i=[Jo,Zo,Qo,ti,si,gi],yi=_i.concat(Xo),Ei=Ee({nodeOps:Wo,modules:yi}),Ci=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;$n&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&rn(t,"input")});var Ai={inserted:function(t,e,n){if(Ci.test(n.tag)||Bn("v-model is not supported on element type: <"+n.tag+">. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.",n.context),"select"===n.tag){var o=function(){Qe(t,e,n.context)};o(),(Sn||Pn)&&setTimeout(o,0)}else"textarea"!==n.tag&&"text"!==t.type||(t._vModifiers=e.modifiers,e.modifiers.lazy||(Ln||(t.addEventListener("compositionstart",nn),t.addEventListener("compositionend",on)),$n&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qe(t,e,n.context);var o=t.multiple?e.value.some(function(e){return tn(e,t.options)}):e.value!==e.oldValue&&tn(e.value,t.options);o&&rn(t,"change")}}},xi={bind:function(t,e,n){var o=e.value;n=an(n);var i=n.data&&n.data.transition,r=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;o&&i&&!$n?(n.data.show=!0,Ge(n,function(){t.style.display=r})):t.style.display=o?r:"none"},update:function(t,e,n){var o=e.value,i=e.oldValue;if(o!==i){n=an(n);var r=n.data&&n.data.transition;r&&!$n?(n.data.show=!0,o?Ge(n,function(){t.style.display=t.__vOriginalDisplay}):Ke(n,function(){t.style.display="none"})):t.style.display=o?t.__vOriginalDisplay:"none"}}},Ti={model:Ai,show:xi},Mi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},Oi={name:"transition",props:Mi,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag}),n.length)){n.length>1&&Bn("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var o=this.mode;o&&"in-out"!==o&&"out-in"!==o&&Bn("invalid <transition> mode: "+o,this.$parent);var i=n[0];if(ln(this.$vnode))return i;var r=sn(i);if(!r)return i;if(this._leaving)return cn(t,i);var a=r.key=null==r.key||r.isStatic?"__v"+(r.tag+this._uid)+"__":r.key,s=(r.data||(r.data={})).transition=dn(this),d=this._vnode,c=sn(d);if(r.data.directives&&r.data.directives.some(function(t){return"show"===t.name})&&(r.data.show=!0),c&&c.data&&c.key!==a){var l=c.data.transition=u({},s);if("out-in"===o)return this._leaving=!0,Tt(l,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()},a),cn(t,i);if("in-out"===o){var f,m=function(){f()};Tt(s,"afterEnter",m,a),Tt(s,"enterCancelled",m,a),Tt(l,"delayLeave",function(t){f=t},a)}}return i}}},Ri=u({tag:String,moveClass:String},Mi);delete Ri.mode;var Ni={props:Ri,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),o=this.prevChildren=this.children,i=this.$slots.default||[],r=this.children=[],a=dn(this),s=0;s<i.length;s++){var d=i[s];if(d.tag)if(null!=d.key&&0!==String(d.key).indexOf("__vlist"))r.push(d),n[d.key]=d,(d.data||(d.data={})).transition=a;else{var c=d.componentOptions,l=c?c.Ctor.options.name||c.tag:d.tag;Bn("<transition-group> children must be keyed: <"+l+">")}}if(o){for(var u=[],f=[],m=0;m<o.length;m++){var p=o[m];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):f.push(p)}this.kept=t(e,null,u),this.removed=f}return t(e,null,r)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(un),t.forEach(fn),t.forEach(mn);document.body.offsetHeight;t.forEach(function(t){if(t.data.moved){var n=t.elm,o=n.style;ze(n,e),o.transform=o.WebkitTransform=o.transitionDuration="",n.addEventListener(fi,n._moveCb=function t(o){o&&!/transform$/.test(o.propertyName)||(n.removeEventListener(fi,t),n._moveCb=null,Ue(n,e))})}})}},methods:{hasMove:function(t,e){if(!di)return!1;if(null!=this._hasMove)return this._hasMove;ze(t,e);var n=Ve(t);return Ue(t,e),this._hasMove=n.hasTransform}}},wi={Transition:Oi,TransitionGroup:Ni};Ut.config.isUnknownElement=ne,Ut.config.isReservedTag=zo,Ut.config.getTagNamespace=ee,Ut.config.mustUseProp=So,u(Ut.options.directives,Ti),u(Ut.options.components,wi),Ut.prototype.__patch__=wn?Ei:h,Ut.prototype.$mount=function(t,e){return t=t&&wn?oe(t):void 0,this._mount(t,e)},setTimeout(function(){On.devtools&&(Fn?Fn.emit("init",Ut):wn&&!Pn&&/Chrome\/\d+/.test(window.navigator.userAgent)&&console.log("Download the Vue Devtools for a better development experience:\nhttps://github.com/vuejs/vue-devtools"))},0),t.exports=Ut}).call(e,function(){return this}())},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=n,t.exports=e.default},function(t,e){"use strict";function n(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n(),t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.constructor===Array};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:[String,Number],disabled:Boolean,required:Boolean,maxlength:[Number,String],placeholder:String},watch:{value:function(t){this.setParentValue(t)},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()},maxlength:function(){this.handleMaxLength()}},methods:{handleMaxLength:function(){this.parentContainer.enableCounter=this.maxlength>0,this.parentContainer.counterLength=this.maxlength},setParentValue:function(t){this.parentContainer.setValue(t||this.$el.value)},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},onFocus:function(){this.parentContainer.isFocused=!0},onBlur:function(){this.parentContainer.isFocused=!1,this.setParentValue()},onInput:function(){var t=this.$el.value;this.setParentValue(),this.parentContainer.inputLength=t?t.length:0,this.$emit("change",t),this.$emit("input",t)}}},t.exports=e.default},function(t,e,n){var o,i,r;/*!
			Autosize 3.0.20
			license: MIT
			http://www.jacklmoore.com/autosize
		*/
	!function(n,a){i=[e,t],o=a,r="function"==typeof o?o.apply(e,i):o,!(void 0!==r&&(t.exports=r))}(this,function(t,e){"use strict";function n(t){function e(){var e=window.getComputedStyle(t,null);"vertical"===e.resize?t.style.resize="none":"both"===e.resize&&(t.style.resize="horizontal"),d="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(d)&&(d=0),s()}function n(e){var n=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=n,t.style.overflowY=e}function o(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}function i(){var e=t.style.height,n=o(t),i=document.documentElement&&document.documentElement.scrollTop;t.style.height="auto";var r=t.scrollHeight+d;return 0===t.scrollHeight?void(t.style.height=e):(t.style.height=r+"px",c=t.clientWidth,n.forEach(function(t){t.node.scrollTop=t.scrollTop}),void(i&&(document.documentElement.scrollTop=i)))}function s(){i();var e=Math.round(parseFloat(t.style.height)),o=window.getComputedStyle(t,null),r=Math.round(parseFloat(o.height));if(r!==e?"visible"!==o.overflowY&&(n("visible"),i(),r=Math.round(parseFloat(window.getComputedStyle(t,null).height))):"hidden"!==o.overflowY&&(n("hidden"),i(),r=Math.round(parseFloat(window.getComputedStyle(t,null).height))),l!==r){l=r;var s=a("autosize:resized");try{t.dispatchEvent(s)}catch(t){}}}if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!r.has(t)){var d=null,c=t.clientWidth,l=null,u=function(){t.clientWidth!==c&&s()},f=function(e){window.removeEventListener("resize",u,!1),t.removeEventListener("input",s,!1),t.removeEventListener("keyup",s,!1),t.removeEventListener("autosize:destroy",f,!1),t.removeEventListener("autosize:update",s,!1),Object.keys(e).forEach(function(n){t.style[n]=e[n]}),r.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",f,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",s,!1),window.addEventListener("resize",u,!1),t.addEventListener("input",s,!1),t.addEventListener("autosize:update",s,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",r.set(t,{destroy:f,update:s}),e()}}function o(t){var e=r.get(t);e&&e.destroy()}function i(t){var e=r.get(t);e&&e.update()}var r="function"==typeof Map?new Map:function(){var t=[],e=[];return{has:function(e){return t.indexOf(e)>-1},get:function(n){return e[t.indexOf(n)]},set:function(n,o){t.indexOf(n)===-1&&(t.push(n),e.push(o))},delete:function(n){var o=t.indexOf(n);o>-1&&(t.splice(o,1),e.splice(o,1))}}}(),a=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){a=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(s=function(t){return t},s.destroy=function(t){return t},s.update=function(t){return t}):(s=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return n(t,e)}),t},s.destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],o),t},s.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],i),t}),e.exports=s})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-avatar",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(140),a=o(r),s=n(118),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-backdrop",t.extend(a.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(141),a=o(r);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-bottom-bar",t.extend(a.default)),t.component("md-bottom-bar-item",t.extend(d.default)),t.material.styles.push(l.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(142),a=o(r),s=n(143),d=o(s),c=n(119),l=o(c);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-button",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(144),a=o(r),s=n(120),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-button-toggle",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(145),a=o(r),s=n(121),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-card",t.extend(a.default)),t.component("md-card-media",t.extend(d.default)),t.component("md-card-media-cover",t.extend(l.default)),t.component("md-card-media-actions",t.extend(f.default)),t.component("md-card-header",t.extend(p.default)),t.component("md-card-header-text",t.extend(v.default)),t.component("md-card-content",t.extend(g.default)),t.component("md-card-actions",t.extend(y.default)),t.component("md-card-area",t.extend(C.default)),t.component("md-card-expand",t.extend(x.default)),t.material.styles.push(M.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(146),a=o(r),s=n(153),d=o(s),c=n(155),l=o(c),u=n(154),f=o(u),m=n(151),p=o(m),h=n(152),v=o(h),b=n(149),g=o(b),_=n(147),y=o(_),E=n(148),C=o(E),A=n(150),x=o(A),T=n(122),M=o(T);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-checkbox",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(156),a=o(r),s=n(123),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-dialog",t.extend(a.default)),t.component("md-dialog-title",t.extend(d.default)),t.component("md-dialog-content",t.extend(l.default)),t.component("md-dialog-actions",t.extend(f.default)),t.component("md-dialog-alert",t.extend(p.default)),t.component("md-dialog-confirm",t.extend(v.default)),t.component("md-dialog-prompt",t.extend(g.default)),t.material.styles.push(y.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(157),a=o(r),s=n(160),d=o(s),c=n(159),l=o(c),u=n(158),f=o(u),m=n(161),p=o(m),h=n(162),v=o(h),b=n(163),g=o(b),_=n(124),y=o(_);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-divider",t.extend(a.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(164),a=o(r);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-icon",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(165),a=o(r),s=n(125),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-input-container",a.default),t.component("md-input",d.default),t.component("md-textarea",l.default),t.material.styles.push(f.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(167),a=o(r),s=n(166),d=o(s),c=n(168),l=o(c),u=n(126),f=o(u);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-layout",t.extend(a.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(169),a=o(r);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-list",t.extend(a.default)),t.component("md-list-item",t.extend(d.default)),t.component("md-list-expand",t.extend(l.default)),t.material.styles.push(f.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(170),a=o(r),s=n(172),d=o(s),c=n(171),l=o(c),u=n(127),f=o(u);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-menu",t.extend(a.default)),t.component("md-menu-item",t.extend(d.default)),t.component("md-menu-content",t.extend(l.default)),t.material.styles.push(f.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(173),a=o(r),s=n(175),d=o(s),c=n(174),l=o(c),u=n(128),f=o(u);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-radio",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(176),a=o(r),s=n(129),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-select",t.extend(a.default)),t.component("md-option",t.extend(d.default)),t.material.styles.push(l.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(178),a=o(r),s=n(177),d=o(s),c=n(130),l=o(c);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-sidenav",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(179),a=o(r),s=n(131),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-spinner",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(180),a=o(r),s=n(132),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-subheader",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(181),a=o(r),s=n(133),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-switch",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(182),a=o(r),s=n(134),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-table",t.extend(a.default)),t.component("md-table-header",{functional:!0,render:function(t,e){return t("thead",{staticClass:"md-table-header"},e.children)}}),t.component("md-table-body",{functional:!0,render:function(t,e){return t("tbody",{staticClass:"md-table-body"},e.children)}}),t.component("md-table-row",t.extend(d.default)),t.component("md-table-head",t.extend(l.default)),t.component("md-table-cell",t.extend(f.default)),t.component("md-table-edit",t.extend(p.default)),t.component("md-table-card",t.extend(v.default)),t.component("md-table-pagination",t.extend(y.default)),t.component("md-table-alternate-header",t.extend(g.default)),t.material.styles.push(C.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(183),a=o(r),s=n(190),d=o(s),c=n(188),l=o(c),u=n(186),f=o(u),m=n(187),p=o(m),h=n(185),v=o(h),b=n(184),g=o(b),_=n(189),y=o(_),E=n(135),C=o(E);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-tabs",t.extend(a.default)),t.component("md-tab",t.extend(d.default)),t.material.styles.push(l.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(192),a=o(r),s=n(191),d=o(s),c=n(136),l=o(c);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-toolbar",t.extend(a.default)),t.material.styles.push(d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(193),a=o(r),s=n(137),d=o(s);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-tooltip",t.extend(a.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(194),a=o(r);t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-whiteframe",t.extend(a.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(195),a=o(r);t.exports=e.default},function(t,e,n){"use strict";function o(t){var e="md-ink-ripple",n="md-ripple",o="md-active",i=void 0,r=void 0,a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;t.removeEventListener("mousedown",i)},s=function(t,r){r&&!function(){var a=r.querySelector(":scope > ."+e+"> ."+n);a&&(i=function(t){var e=r.getBoundingClientRect();t.stopPropagation(),a.classList.remove(o);var n=t.pageY-e.top-a.offsetHeight/2-document.body.scrollTop,i=t.pageX-e.left-a.offsetWidth/2-document.body.scrollLeft;a.style.top=n+"px",a.style.left=i+"px",a.classList.add(o)},t.removeEventListener("mousedown",i),t.addEventListener("mousedown",i))}()},d=function(t,e,n){return t=document.createElement("div"),t.className=e,n&&(t.style.width=n,t.style.height=n),t},c=function(t){var e=["relative","absolute","fixed"];return e.indexOf(getComputedStyle(t).position)>-1},l=function(t){var e=!1,n=t;if(!t)return!1;if(c(t))return t;for(;!e&&(n=n.parentNode,n&&"body"!==n.tagName.toLowerCase());)n&&c(n)&&(e=n);return e},u=function(t,o){var i=l(t);if(i){var a=i.querySelector(":scope > ."+e+"> ."+n);if(!a){var c=Math.round(Math.max(i.offsetWidth,i.offsetHeight))+"px",u=o||d(a,e),f=d(a,n,c);u.appendChild(f),i.appendChild(u)}i===t&&a||(r=t,s(t,i))}};t.directive("mdInkRipple",function(e,n){t.nextTick(function(){n.value?a(e):u(e)})}),t.component("md-ink-ripple",{props:{mdDisabled:Boolean},render:function(t){return t("div",{staticClass:"md-ink-ripple"})},watch:{mdDisabled:function(){this.mdDisabled?a(this.$el.parentNode):u(this.$el.parentNode,this.$el)}},mounted:function(){this.mdDisabled||u(this.$el.parentNode,this.$el)},destroyed:function(){a(this.$el.parentNode)}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,n(139),n(196),t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.material=new t({data:function(){return{styles:[],currentTheme:null}},methods:{registerTheme:function(t,e){var n={};"string"==typeof t?n[t]=e:n=t,b(n,this.styles)},applyCurrentTheme:function(t){document.body.classList.remove("md-theme-"+this.currentTheme),document.body.classList.add("md-theme-"+t),this.currentTheme=t},setCurrentTheme:function(t){p.indexOf(t)>=0?this.applyCurrentTheme(t):(p.indexOf("default")===-1?this.registerTheme("default",f):console.warn("The theme '"+t+"' doesn't exists. You need to register it first in order to use."),this.applyCurrentTheme("default"))}}}),t.component("md-theme",l.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(35),a=o(r),s=n(36),d=o(s),c=n(197),l=o(c),u=["primary","accent","background","warn","hue-1","hue-2","hue-3"],f={primary:"indigo",accent:"pink",background:"grey",warn:"deep-orange"},m=function(t,e){var n=document.head,o="md-theme-"+e,i=n.querySelector("#"+o);if(i)i.textContent=t;else{var r=document.createElement("style");t=t.replace(/THEME_NAME/g,o),r.type="text/css",r.id=o,r.textContent=t,n.appendChild(r)}},p=[],h=function(t,e){return u.forEach(function(n){t=t.replace(RegExp("("+n.toUpperCase()+")-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?","g"),function(t,o,i,r,s){var c=void 0,l=0===+r?500:r;if(e[n]?"string"==typeof e[n]?c=a.default[e[n]]:(c=a.default[e[n].color]||a.default[f[n]],l=0===+r?e[n].hue:r):c=a.default[f[n]],"COLOR"===i){var u=a.default[e[n]];return r||u||("accent"===n?l="A200":"background"===n&&(l=50)),s?(0,d.default)(c[l],s):c[l]}return c.darkText.indexOf(l)>=0?s?(0,d.default)("#000",s):"rgba(0, 0, 0, .87)":s?(0,d.default)("#fff",s):"rgba(255, 255, 255, .87)"})}),t},v=function(t,e,n){var o=[];n.forEach(function(e){o.push(h(e,t))}),m(o.join("\n"),e)},b=function(t,e){var n=t?Object.keys(t):[];n.forEach(function(n){v(t[n],n,e),p.push(n)})};t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",darkText:[50,100,200,300,"A100"]},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",darkText:[50,100,200,"A100"]},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",darkText:[50,100,200,"A100"]},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",darkText:[50,100,200,"A100"]},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",darkText:[50,100,200,"A100"]},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",darkText:[50,100,200,300,400,"A100"]},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",darkText:[50,100,200,300,400,500,"A100","A200","A300"]},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",darkText:[50,100,200,300,400,500,600,"A100","A200","A300","A400"]},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",darkText:[50,100,200,300,400,"A100","A200","A300","A400"]},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",darkText:[50,100,200,300,400,500,"A100","A200","A300","A400"]},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",darkText:[50,100,200,300,400,500,600,"A100","A200","A300","A400"]},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",darkText:[50,100,200,300,400,500,600,700,800,"A100","A200","A300","A400"]},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",darkText:[50,100,200,300,400,500,600,700,"A100","A200","A300","A400"]},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",darkText:[50,100,200,300,400,"A100","A200"]},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",darkText:[50,100,200,"A100","A200","A300","A400"]},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#fff",A200:"#000000",A400:"#303030",A700:"#616161",darkText:[50,100,200,300,400,500,"A100"]},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",darkText:[50,100,200,300,"A100","A200","A300","A400"]},white:{50:"#fff",100:"#fff",200:"#fff",300:"#fff",400:"#fff",500:"#fff",600:"#fff",700:"#fff",800:"#fff",900:"#fff",A100:"#fff",A200:"#fff",A400:"#fff",A700:"#fff",darkText:[50,100,200,300,400,500,600,700,800,900,"A100","A200","A300","A400"]},black:{50:"#000",100:"#000",200:"#000",300:"#000",400:"#000",500:"#000",600:"#000",700:"#000",800:"#000",900:"#000",A100:"#000",A200:"#000",A400:"#000",A700:"#000",darkText:[]}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n="",o="",i="",r=t.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);if(!r)throw new Error("Invalid color"+t);if(t=r[1],6===t.length)n=parseInt(t.substring(0,2),16),o=parseInt(t.substring(2,4),16),i=parseInt(t.substring(4,6),16);else if(3===t.length){var a=t.substring(0,1),s=t.substring(1,2),d=t.substring(2,3);n=parseInt(a+a,16),o=parseInt(s+s,16),i=parseInt(d+d,16)}return e?(e>1&&(e/=100),"rgba("+n+", "+o+", "+i+", "+e+")"):"rgb("+n+", "+o+", "+i+")"},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){return i.installed?void console.warn("Vue Material is already installed."):(i.installed=!0,t.use(a.default),t.use(d.default),void t.material.styles.push(l.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(34),a=o(r),s=n(33),d=o(s),c=n(138),l=o(c);n(251),t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=8,o=function(t,e){return e.top<=n-parseInt(getComputedStyle(t).marginTop,10)},i=function(t,e){return e.top+t.offsetHeight+n>=window.innerHeight-parseInt(getComputedStyle(t).marginTop,10)},r=function(t,e){return e.left<=n-parseInt(getComputedStyle(t).marginLeft,10)},a=function(t,e){return e.left+t.offsetWidth+n>=window.innerWidth-parseInt(getComputedStyle(t).marginLeft,10)},s=function(t,e){var s=getComputedStyle(t);return o(t,e)&&(e.top=n-parseInt(s.marginTop,10)),r(t,e)&&(e.left=n-parseInt(s.marginLeft,10)),a(t,e)&&(e.left=window.innerWidth-n-t.offsetWidth-parseInt(s.marginLeft,10)),i(t,e)&&(e.top=window.innerHeight-n-t.offsetHeight-parseInt(s.marginTop,10)),e};e.default=s,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return Math.random().toString(36).slice(4)};e.default=n,t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={mixins:[r.default]},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{close:function(){this.$emit("close")}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{mdShift:Boolean},mixins:[r.default],computed:{classes:function(){return this.mdShift?"md-shift":"md-fixed"}}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdIcon:String,mdActive:Boolean,href:String},data:function(){return{active:!1}},computed:{classes:function(){return{"md-active":this.active}}},watch:{mdActive:function(t){this.setActive(t)}},methods:{setActive:function(t){this.$parent.$children.forEach(function(t){t.active=!1}),this.active=!!t}},mounted:function(){if(!this.$parent.$el.classList.contains("md-bottom-bar"))throw this.$destroy(),new Error("You should wrap the md-bottom-bar-item in a md-bottom-bar");this.mdActive&&(this.active=!0)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{href:String,target:String,rel:String,type:{type:String,default:"button"},disabled:Boolean},mixins:[r.default],computed:{newRel:function(){return"_blank"===this.target?this.rel||"noopener":this.rel}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),a=void 0;e.default={props:{mdSingle:Boolean},mixins:[r.default],mounted:function(){var t=this;this.$children.forEach(function(e){var n=e.$el,o="md-toggle";a=function(){t.mdSingle?(t.$children.forEach(function(t){t.$el.classList.remove(o)}),n.classList.add(o)):n.classList.toggle(o)},n&&n.classList.contains("md-button")&&n.addEventListener("click",a)})},beforeDestroy:function(){this.$children.forEach(function(t){var e=t.$el;e&&e.classList.contains("md-button")&&e.removeEventListener("click",a)})}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{mdWithHover:Boolean},mixins:[r.default],computed:{classes:function(){return{"md-with-hover":this.mdWithHover}}}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdInset:Boolean},computed:{classes:function(){return{"md-inset":this.mdInset}}}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{setContentMargin:function(){this.content.style.marginTop=-this.content.offsetHeight+"px"},toggle:function(){this.$refs.expand.classList.toggle("md-active")},onWindowResize:function(){window.requestAnimationFrame(this.setContentMargin)}},mounted:function(){this.trigger=this.$el.querySelector("[md-expand-trigger]"),this.content=this.$el.querySelector(".md-card-content"),this.content&&(this.setContentMargin(),this.trigger.addEventListener("click",this.toggle),window.addEventListener("resize",this.onWindowResize))},destroyed:function(){this.content&&(this.trigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.onWindowResize))}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.parentClasses=this.$parent.$el.classList,this.parentClasses.contains("md-card-header")&&(this.insideParent=!0,this.parentClasses.add("md-card-header-flex"))},destroyed:function(){this.parentClasses.remove("md-card-header-flex")}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdRatio:String,mdMedium:Boolean,mdBig:Boolean},computed:{classes:function t(){var t={"md-16-9":"16:9"===this.mdRatio||"16/9"===this.mdRatio,"md-4-3":"4:3"===this.mdRatio||"4/3"===this.mdRatio,"md-1-1":"1:1"===this.mdRatio||"1/1"===this.mdRatio};return(this.mdMedium||this.mdBig)&&(t={"md-medium":this.mdMedium,"md-big":this.mdBig}),t}}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=document.createElement("canvas");t.onload=function(){var t=0,o=void 0,i=void 0,r=void 0,a=void 0,s=void 0,d=void 0,c=void 0;n.width=this.width,n.height=this.height,o=n.getContext("2d"),o.drawImage(this,0,0),i=o.getImageData(0,0,n.width,n.height),r=i.data;for(var l=0,u=r.length;l<u;l+=4)a=r[l],s=r[l+1],d=r[l+2],c=Math.floor((a+s+d)/3),t+=c;e(Math.floor(t/(this.width*this.height)))}};e.default={props:{mdTextScrim:Boolean,mdSolid:Boolean},data:function(){return{backdropBg:{}}},computed:{classes:function(){return{"md-text-scrim":this.mdTextScrim,"md-solid":this.mdSolid}},styles:function(){return{background:this.backdropBg}}},methods:{applyScrimColor:function(t){this.$refs.backdrop&&(this.backdropBg="linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, "+t/2+") 66%, rgba(0, 0, 0, "+t+") 100%)")},applySolidColor:function(t){var e=this.$el.querySelector(".md-card-area");e&&(e.style.background="rgba(0, 0, 0, "+t+")")}},mounted:function(){var t=this,e=this.$el.querySelector("img");e&&(this.mdTextScrim||this.mdSolid)&&n(e,function(e){var n=256,o=(100*Math.abs(n-e)/n+15)/100;o>=.7&&(o=.7),t.mdTextScrim?t.applyScrimColor(o):t.mdSolid&&t.applySolidColor(o)})}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{name:String,value:[String,Boolean],id:String,disabled:Boolean},mixins:[r.default],data:function(){return{checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.checked),"md-disabled":this.disabled}}},watch:{value:function(){this.checked=this.value}},methods:{toggleCheck:function(t){this.disabled||(this.checked=!this.checked,this.$emit("change",this.checked,t),this.$emit("input",this.checked,t))}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(4),s=o(a);e.default={props:{mdClickOutsideToClose:{type:Boolean,default:!0},mdEscToClose:{type:Boolean,default:!0},mdBackdrop:{type:Boolean,default:!0},mdOpenFrom:String,mdCloseTo:String,mdFullscreen:{type:Boolean,default:!1}},mixins:[r.default],data:function(){return{active:!1,transitionOff:!1,dialogTransform:""}},computed:{classes:function(){return{"md-active":this.active}},dialogClasses:function(){return{"md-fullscreen":this.mdFullscreen,"md-transition-off":this.transitionOff,"md-reference":this.mdOpenFrom||this.mdCloseTo}},styles:function(){return{transform:this.dialogTransform}}},methods:{removeDialog:function(){this.rootElement.contains(this.dialogElement)&&this.$el.parentNode.removeChild(this.$el)},calculateDialogPos:function(t){var e=document.querySelector(t);if(e){var n=e.getBoundingClientRect(),o=this.dialogInnerElement.getBoundingClientRect(),i=n.width/o.width,r=n.height/o.height,a={top:-(o.top-n.top),left:-(o.left-n.left+n.width)};n.top>o.top+o.height&&(a.top=n.top-o.top),n.left>o.left+o.width&&(a.left=n.left-o.left-n.width),this.dialogTransform="translate3D("+a.left+"px, "+a.top+"px, 0) scale("+i+", "+r+")"}},open:function(){var t=this;this.rootElement.appendChild(this.dialogElement),this.transitionOff=!0,this.calculateDialogPos(this.mdOpenFrom),window.setTimeout(function(){t.dialogElement.focus(),t.transitionOff=!1,t.active=!0}),this.$emit("open")},closeOnEsc:function(){this.mdEscToClose&&this.close()},close:function(){var t=this;this.rootElement.contains(this.dialogElement)&&this.$nextTick(function(){var e=function e(){var n=t.dialogElement.querySelector(".md-ripple.md-active");n&&n.classList.remove("md-active"),t.dialogInnerElement.removeEventListener(s.default,e),
	t.rootElement.removeChild(t.dialogElement),t.dialogTransform=""};t.transitionOff=!0,t.dialogTransform="",t.calculateDialogPos(t.mdCloseTo),window.setTimeout(function(){t.transitionOff=!1,t.active=!1,t.dialogInnerElement.addEventListener(s.default,e)}),t.$emit("close")})}},mounted:function(){var t=this;this.$nextTick(function(){t.rootElement=t.$root.$el,t.dialogElement=t.$el,t.dialogInnerElement=t.$refs.dialog,t.removeDialog()})},beforeDestroy:function(){this.removeDialog()}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"}},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(){this.debounce||this.$emit("close")},open:function(){this.$emit("open"),this.debounce=!1,this.$refs.dialog.open()},close:function(){this.fireCloseEvent(),this.debounce=!0,this.$refs.dialog.close()}},mounted:function(){if(!this.mdContent&&!this.mdContentHtml)throw new Error("Missing md-content or md-content-html attributes")}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"},mdCancelText:{type:String,default:"Cancel"}},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(t){this.debounce||this.$emit("close",t)},open:function(){this.$emit("open"),this.debounce=!1,this.$refs.dialog.open()},close:function(t){this.fireCloseEvent(t),this.debounce=!0,this.$refs.dialog.close()}},mounted:function(){if(!this.mdContent&&!this.mdContentHtml)throw new Error("Missing md-content or md-content-html attributes")}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:[String,Number],required:!0},mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"},mdCancelText:{type:String,default:"Cancel"},mdInputId:String,mdInputName:String,mdInputMaxlength:[String,Number],mdInputPlaceholder:String},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(t){this.debounce||this.$emit("close",t)},open:function(){var t=this;this.$emit("open"),this.debounce=!1,this.$refs.dialog.open(),window.setTimeout(function(){t.$refs.input.$el.focus()})},close:function(t){this.fireCloseEvent(t),this.debounce=!0,this.$refs.dialog.close()},confirmValue:function(){this.$emit("input",this.$refs.input.$el.value),this.close("ok")}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={mixins:[r.default]},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),r=o(i),a=n(3),s=o(a);e.default={mixins:[r.default],props:{type:{type:String,default:"text"}},mounted:function(){if(this.parentContainer=(0,s.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-input in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength()}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(5),s=o(a);e.default={props:{mdInline:Boolean,mdHasPassword:Boolean},mixins:[r.default],data:function(){return{value:"",input:!1,showPassword:!1,enableCounter:!1,hasSelect:!1,hasPlaceholder:!1,isDisabled:!1,isRequired:!1,isFocused:!1,counterLength:0,inputLength:0}},computed:{hasValue:function(){return(0,s.default)(this.value)?this.value.length>0:Boolean(this.value)},classes:function(){return{"md-input-inline":this.mdInline,"md-has-password":this.mdHasPassword,"md-has-select":this.hasSelect,"md-has-value":this.hasValue,"md-input-placeholder":this.hasPlaceholder,"md-input-disabled":this.isDisabled,"md-input-required":this.isRequired,"md-input-focused":this.isFocused}}},methods:{isInput:function(){return this.input&&"input"===this.input.tagName.toLowerCase()},togglePasswordType:function(){this.isInput()&&("password"===this.input.type?(this.input.type="text",this.showPassword=!0):(this.input.type="password",this.showPassword=!1),this.input.focus())},setValue:function(t){this.value=t}},mounted:function(){if(this.input=this.$el.querySelectorAll("input, textarea, select")[0],!this.input)throw this.$destroy(),new Error("Missing input/select/textarea inside md-input-container")}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r=o(i),a=n(6),s=o(a),d=n(3),c=o(d);e.default={mixins:[s.default],watch:{value:function(){var t=this;this.$nextTick(function(){r.default.update(t.$el)})}},mounted:function(){if(this.parentContainer=(0,c.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-textarea in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength(),this.$el.getAttribute("rows")||this.$el.setAttribute("rows","1"),(0,r.default)(this.$el)},beforeDestroy:function(){r.default.destroy(this.$el)}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTag:{type:String,default:"div"},mdRow:Boolean,mdRowXsmall:Boolean,mdRowSmall:Boolean,mdRowMedium:Boolean,mdRowLarge:Boolean,mdRowXlarge:Boolean,mdColumn:Boolean,mdColumnXsmall:Boolean,mdColumnSmall:Boolean,mdColumnMedium:Boolean,mdColumnLarge:Boolean,mdColumnXlarge:Boolean,mdHideXsmall:Boolean,mdHideSmall:Boolean,mdHideMedium:Boolean,mdHideLarge:Boolean,mdHideXlarge:Boolean,mdGutter:[String,Number,Boolean],mdFlex:[String,Number,Boolean],mdFlexXsmall:[String,Number,Boolean],mdFlexSmall:[String,Number,Boolean],mdFlexMedium:[String,Number,Boolean],mdFlexLarge:[String,Number,Boolean],mdFlexXlarge:[String,Number,Boolean],mdFlexOffset:[String,Number]},computed:{classes:function t(){var t={"md-row":this.mdRow,"md-row-xsmall":this.mdRowXsmall,"md-row-small":this.mdRowSmall,"md-row-medium":this.mdRowMedium,"md-row-large":this.mdRowLarge,"md-row-xlarge":this.mdRowXlarge,"md-column":this.mdColumn,"md-column-xsmall":this.mdColumnXsmall,"md-column-small":this.mdColumnSmall,"md-column-medium":this.mdColumnMedium,"md-column-large":this.mdColumnLarge,"md-column-xlarge":this.mdColumnXlarge,"md-hide-xsmall":this.mdHideXsmall,"md-hide-small":this.mdHideSmall,"md-hide-medium":this.mdHideMedium,"md-hide-large":this.mdHideLarge,"md-hide-xlarge":this.mdHideXlarge};return this.mdGutter&&("boolean"==typeof this.mdGutter?t["md-gutter"]=!0:this.mdGutter&&(t["md-gutter-"+this.mdGutter]=!0)),this.mdFlexOffset&&(t["md-flex-offset-"+this.mdFlexOffset]=!0),this.generateFlexClasses("","mdFlex",t),this.generateFlexClasses("xsmall","mdFlexXsmall",t),this.generateFlexClasses("small","mdFlexSmall",t),this.generateFlexClasses("medium","mdFlexMedium",t),this.generateFlexClasses("large","mdFlexLarge",t),this.generateFlexClasses("xlarge","mdFlexXlarge",t),t}},methods:{generateFlexClasses:function(t,e,n){t&&(t="-"+t),this[e]&&("boolean"==typeof this[e]?n["md-flex"+t]=!0:n["md-flex"+t+"-"+this[e]]=!0)}},render:function(t){return t(this.mdTag,{staticClass:"md-layout",class:this.classes},this.$slots.default)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={mixins:[r.default]},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{height:0}},methods:{calculatePadding:function(){this.height=-this.$el.offsetHeight+"px"}},mounted:function(){this.calculatePadding()}},t.exports=e.default},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{href:String,target:String,disabled:Boolean},render:function(t){var e=this,o="md-button md-list-item-container",i="md-list-item-holder",r=this.$slots.default,a=r[0].componentOptions,s=void 0,d=void 0,c={staticClass:"md-list-item",on:{click:function(t){e.$emit("click",t)}}},l=function(e){return t("div",{staticClass:i},e)},u=function(){return t("md-ink-ripple")},f=function(){return r[0].data.staticClass=o+" "+i,t("li",c,[].concat(n(r),[u()]))},m=function(){r.some(function(t,e){if(t.componentOptions&&"md-list-expand"===t.componentOptions.tag)return s=t,d=e,!0})},p=function(){return t("md-icon",{staticClass:"md-list-expand-indicator"},"keyboard_arrow_down")},h=function(t){t.$children.some(function(t){t.$el.classList.contains("md-list-expand")&&t.calculatePadding()})},v=function(t){var e=void 0;t.$parent.$children.some(function(t){var n=t.$el.classList;if(n.contains("md-list-item-expand")&&n.contains("md-active"))return e=t,n.remove("md-active"),h(t),!0}),e&&t.$el===e.$el||t.$el.classList.add("md-active")},b=function(){return r.splice(d,1),r.push(p()),t("button",{staticClass:o,on:{click:function(){v(e),e.$emit("click")}}},[l(r),u()])},g=function(){return c.staticClass+=" md-list-item-expand",t("li",c,[b(),s])};if(a&&"router-link"===a.tag)return f();if(m(),s)return g();var _=t("md-button",{staticClass:o,attrs:{target:this.target,href:this.href,disabled:this.disabled}},[l(r)]);return this.target&&(_.data.attrs.rel="noopener"),t("li",c,[_])}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=o(i),a=n(38),s=o(a);e.default={props:{mdSize:{type:[Number,String],default:0},mdDirection:{type:String,default:"bottom right"},mdAlignTrigger:{type:Boolean,default:!1},mdOffsetX:{type:[Number,String],default:0},mdOffsetY:{type:[Number,String],default:0},mdCloseOnSelect:{type:Boolean,default:!0}},data:function(){return{active:!1}},watch:{mdSize:function(t,e){t>=1&&t<=7&&(this.removeLastSizeMenuContentClass(e),this.addNewSizeMenuContentClass(t))},mdDirection:function(t,e){this.removeLastDirectionMenuContentClass(e),this.addNewDirectionMenuContentClass(t)},mdAlignTrigger:function(t){this.handleAlignTriggerClass(t)}},methods:{validateMenu:function(){if(!this.menuContent)throw this.$destroy(),new Error("You must have a md-menu-content inside your menu.");if(!this.menuTrigger)throw this.$destroy(),new Error("You must have an element with a md-menu-trigger attribute inside your menu.")},removeLastSizeMenuContentClass:function(t){this.menuContent.classList.remove("md-size-"+t)},removeLastDirectionMenuContentClass:function(t){this.menuContent.classList.remove("md-direction-"+t.replace(/ /g,"-"))},addNewSizeMenuContentClass:function(t){this.menuContent.classList.add("md-size-"+t)},addNewDirectionMenuContentClass:function(t){this.menuContent.classList.add("md-direction-"+t.replace(/ /g,"-"))},handleAlignTriggerClass:function(t){t&&this.menuContent.classList.add("md-align-trigger")},getPosition:function(t,e){var n=this.menuTrigger.getBoundingClientRect(),o="top"===t?n.top+n.height-this.menuContent.offsetHeight:n.top,i="left"===e?n.left-this.menuContent.offsetWidth+n.width:n.left;return o+=parseInt(this.mdOffsetY,10),i+=parseInt(this.mdOffsetX,10),this.mdAlignTrigger&&("top"===t?o-=n.height:o+=n.height),{top:o,left:i}},calculateMenuContentPos:function(){var t=void 0;t=this.mdDirection?this.getPosition.apply(this,this.mdDirection.trim().split(" ")):this.getPosition("bottom","right"),t=(0,s.default)(this.menuContent,t),this.menuContent.style.top=t.top+window.pageYOffset+"px",this.menuContent.style.left=t.left+window.pageXOffset+"px"},recalculateOnResize:function(){window.requestAnimationFrame(this.calculateMenuContentPos)},open:function(){this.rootElement.contains(this.menuContent)&&this.rootElement.removeChild(this.menuContent),this.rootElement.appendChild(this.menuContent),this.rootElement.appendChild(this.backdropElement),window.addEventListener("resize",this.recalculateOnResize),this.calculateMenuContentPos(),getComputedStyle(this.menuContent).top,this.menuContent.classList.add("md-active"),this.menuContent.focus(),this.active=!0,this.$emit("open")},close:function t(){var e=this,t=function t(n){if(e.menuContent&&n.target===e.menuContent){var o=e.menuContent.querySelector(".md-ripple.md-active");e.menuContent.removeEventListener(r.default,t),e.menuTrigger.focus(),e.active=!1,o&&o.classList.remove("md-active"),e.rootElement.removeChild(e.menuContent),e.rootElement.removeChild(e.backdropElement),window.removeEventListener("resize",e.recalculateOnResize)}};this.menuContent.addEventListener(r.default,t),this.menuContent.classList.remove("md-active"),this.$emit("close")},toggle:function(){this.active?this.close():this.open()}},mounted:function(){var t=this;this.$nextTick(function(){t.rootElement=t.$root.$el,t.menuTrigger=t.$el.querySelector("[md-menu-trigger]"),t.menuContent=t.$el.querySelector(".md-menu-content"),t.backdropElement=t.$refs.backdrop.$el,t.validateMenu(),t.handleAlignTriggerClass(t.mdAlignTrigger),t.addNewSizeMenuContentClass(t.mdSize),t.addNewDirectionMenuContentClass(t.mdDirection),t.$el.removeChild(t.$refs.backdrop.$el),t.menuContent.parentNode.removeChild(t.menuContent),t.menuTrigger.addEventListener("click",t.toggle)})},beforeDestroy:function(){this.rootElement.contains(this.menuContent)&&(this.rootElement.removeChild(this.menuContent),this.rootElement.removeChild(this.backdropElement)),this.menuTrigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.recalculateOnResize)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={data:function(){return{oldHighlight:!1,highlighted:!1,itemsAmount:0}},mixins:[r.default],methods:{close:function(){this.highlighted=!1,this.$parent.close()},highlightItem:function(t){this.oldHighlight=this.highlighted,"up"===t&&(1===this.highlighted?this.highlighted=this.itemsAmount:this.highlighted--),"down"===t&&(this.highlighted===this.itemsAmount?this.highlighted=1:this.highlighted++)},fireClick:function(){this.highlighted>0&&this.$children[0].$children[this.highlighted-1].$el.click()}},mounted:function(){if(!this.$parent.$el.classList.contains("md-menu"))throw this.$destroy(),new Error("You must wrap the md-menu-content in a md-menu")}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=o(i);n(91),e.default={props:{disabled:Boolean},data:function(){return{parentContent:{},index:0}},computed:{classes:function(){return{"md-highlighted":this.highlighted}},highlighted:function(){return this.index===this.parentContent.highlighted&&(this.disabled&&(this.parentContent.oldHighlight>this.parentContent.highlighted?this.parentContent.highlighted--:this.parentContent.highlighted++),1===this.index?this.parentContent.$el.scrollTop=0:this.index===this.parentContent.itemsAmount?this.parentContent.$el.scrollTop=this.parentContent.$el.scrollHeight:this.$el.scrollIntoViewIfNeeded(!1),!0)}},methods:{close:function(t){this.disabled||(this.parentMenu.mdCloseOnSelect&&this.parentContent.close(),this.$emit("click"),this.$emit("selected",t))}},mounted:function(){if(this.parentContent=(0,r.default)(this.$parent,"md-menu-content"),this.parentMenu=(0,r.default)(this.$parent,"md-menu"),!this.parentContent)throw this.$destroy(),new Error("You must wrap the md-menu-item in a md-menu-content");this.parentContent.itemsAmount++,this.index=this.parentContent.itemsAmount}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{name:String,id:String,value:[String,Boolean,Number],mdValue:{type:[String,Boolean,Number],required:!0},disabled:Boolean},mixins:[r.default],computed:{classes:function(){return{"md-checked":this.value&&this.mdValue.toString()===this.value.toString(),"md-disabled":this.disabled}}},methods:{toggleCheck:function(t){this.disabled||(this.$emit("change",this.mdValue,t),this.$emit("input",this.mdValue,t))}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=o(i);e.default={props:{value:[String,Boolean,Number]},data:function(){return{parentSelect:{},check:!1,index:0}},computed:{isSelected:function(){if(this.value&&this.parentSelect.value){var t=this.value.toString();return this.parentSelect.multiple?this.parentSelect.value.indexOf(t)>=0:this.value&&this.parentSelect.value&&t===this.parentSelect.value.toString()}return!1},classes:function(){return{"md-selected":this.isSelected,"md-checked":this.check}}},methods:{setParentOption:function(){this.parentSelect.multiple?this.check=!this.check:this.parentSelect.selectOption(this.value,this.$refs.item.textContent)},selectOption:function(t){this.setParentOption(),this.$emit("selected",t)}},watch:{isSelected:function(t){this.parentSelect.multiple&&(this.check=t)},check:function(t){t?this.parentSelect.selectMultiple(this.index,this.value,this.$refs.item.textContent):this.parentSelect.selectMultiple(this.index)}},mounted:function(){if(this.parentSelect=(0,r.default)(this.$parent,"md-select"),this.parentContent=(0,r.default)(this.$parent,"md-menu-content"),!this.parentSelect)throw new Error("You must wrap the md-option in a md-select");this.parentSelect.optionsAmount++,this.index=this.parentSelect.optionsAmount,this.parentSelect.multipleOptions[this.index]={},this.parentSelect.options[this.index]=this,this.parentSelect.value===this.value&&this.setParentOption()},beforeDestroy:function(){this.parentSelect&&(delete this.parentSelect.options[this.index],delete this.parentSelect.multipleOptions[this.index])}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(1),a=o(r),s=n(3),d=o(s),c=n(5),l=o(c);e.default={props:{name:String,id:String,required:Boolean,multiple:Boolean,value:[String,Number,Array],disabled:Boolean,placeholder:String,mdMenuClass:String},mixins:[a.default],data:function(){return{selectedValue:null,selectedText:null,multipleText:null,multipleOptions:{},options:{},optionsAmount:0}},computed:{classes:function(){return{"md-disabled":this.disabled}},contentClasses:function(){return this.multiple?"md-multiple "+this.mdMenuClass:this.mdMenuClass}},watch:{value:function(t){this.setTextAndValue(t)},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()}},methods:{setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},getSingleValue:function(t){var e=this,n={};return Object.keys(this.options).forEach(function(o){var i=e.options[o];i.value===t&&(n.value=t,n.text=i.$refs.item.textContent)}),n},getMultipleValue:function(t){var e=this;if((0,l.default)(this.value)){var n=function(){var n=[];return t.forEach(function(t){Object.keys(e.options).forEach(function(o){var i=e.options[o];if(i.value===t){var r=i.$refs.item.textContent;e.multipleOptions[o]={value:t,text:r},n.push(r)}})}),{v:{value:t,text:n.join(", ")}}}();if("object"===("undefined"==typeof n?"undefined":i(n)))return n.v}return{}},setTextAndValue:function(t){var e=this.multiple?this.getMultipleValue(t):this.getSingleValue(t);this.selectedValue=e.value,this.selectedText=e.text,this.selectedText&&this.parentContainer&&this.parentContainer.setValue(this.selectedText)},changeValue:function(t){this.$emit("input",t),this.$emit("change",t)},selectMultiple:function(t,e,n){var o=[];this.multipleOptions[t]={value:e,text:n};for(var i in this.multipleOptions)this.multipleOptions.hasOwnProperty(i)&&this.multipleOptions[i].value&&o.push(this.multipleOptions[i].value);this.changeValue(o)},selectOption:function(t,e){this.selectedText=e,this.setTextAndValue(t),this.changeValue(t)}},mounted:function(){this.parentContainer=(0,d.default)(this.$parent,"md-input-container"),this.parentContainer&&(this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.parentContainer.hasSelect=!0),this.setTextAndValue(this.value)},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.setValue(""),this.parentContainer.hasSelect=!1)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={data:function(){return{mdVisible:!1}},mixins:[r.default],computed:{classes:function(){return this.mdVisible&&"md-active"}},methods:{show:function(){this.mdVisible=!0,this.$el.focus(),this.$emit("open")},close:function(){this.mdVisible=!1,this.$el.blur(),this.$emit("close")},toggle:function(){this.mdVisible?this.close():this.show()}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{mdSize:{type:Number,default:50},mdStroke:{type:Number,default:3.5},mdIndeterminate:Boolean,mdProgress:{type:Number,default:0}},mixins:[r.default],computed:{classes:function(){return{"md-indeterminate":this.mdIndeterminate}},styles:function(){var t=this.mdSize+"px";return{width:t,height:t}},dashProgress:function(){var t=125*this.mdProgress/100;return!this.mdIndeterminate&&(t>=125&&(t=130),t+", 200")}},data:function(){return{}},methods:{}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={mixins:[r.default]},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),a=75,s="-1px";e.default={props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}},mixins:[r.default],data:function(){return{leftPos:s,checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(t){this.changeState(t)}},methods:{setPosition:function(){this.leftPos=this.checked?a+"%":s},changeState:function(t,e){this.checked=t,this.$emit("change",this.checked,e),this.$emit("input",this.checked,e)},toggle:function(t){this.disabled||this.changeState(!this.checked,t)}},mounted:function(){this.$nextTick(this.setPosition)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(3),s=o(a);e.default={props:{mdSortType:String,mdSort:String},mixins:[r.default],data:function(){return{sortType:this.mdSortType,sortBy:this.mdSort,hasRowSelection:!1,data:[],numberOfRows:0,numberOfSelected:0,selectedRows:{}}},methods:{emitSort:function(t){this.sortBy=t,this.$emit("sort",{name:t,type:this.sortType})},emitSelection:function(){this.$emit("select",this.selectedRows)}},mounted:function(){this.parentCard=(0,s.default)(this.$parent,"md-table-card"),this.parentCard&&(this.parentCard.tableInstance=this)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),a=n(3),s=o(a);e.default={props:{mdSelectedLabel:{type:String,default:"selected"}},mixins:[r.default],data:function(){return{classes:{},tableInstance:{}}},mounted:function(){var t=this;this.parentCard=(0,s.default)(this.$parent,"md-table-card"),this.$nextTick(function(){t.tableInstance=t.parentCard.tableInstance,t.$watch("tableInstance.numberOfSelected",function(){t.$refs.counter.textContent=t.tableInstance.numberOfSelected,t.classes={"md-active":t.tableInstance.numberOfSelected>0}})})}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={mixins:[r.default]},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdNumeric:Boolean},data:function(){return{hasAction:!1}},computed:{classes:function(){return{"md-numeric":this.mdNumeric,"md-has-action":this.hasAction}}},mounted:function(){this.$children.length>0&&(this.hasAction=!0)}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:[String,Number],mdLarge:Boolean,mdId:String,mdName:String,mdPlaceholder:String,mdMaxlength:[Number,String]},data:function(){return{active:!1}},computed:{triggerClasses:function(){return{"md-edited":this.value}},dialogClasses:function(){return{"md-active":this.active,"md-large":this.mdLarge}},realValue:function(){console.log(this.value)}},methods:{openDialog:function(){this.active=!0,this.$refs.input.$el.focus(),document.addEventListener("click",this.closeDialogOnOffClick)},closeDialog:function(){this.active&&(this.active=!1,this.$refs.input.$el.blur(),document.removeEventListener("click",this.closeDialogOnOffClick))},closeDialogOnOffClick:function(t){this.$refs.dialog.contains(t.target)||this.closeDialog()},confirmDialog:function(){var t=this.$refs.input.$el.value;this.closeDialog(),this.$emit("input",t),this.$emit("edited",t)}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=o(i);e.default={props:{mdNumeric:Boolean,mdSortBy:String,mdTooltip:String},data:function(){return{sortType:null,sorted:!1,parentTable:{}}},computed:{classes:function(){var t=this.hasMatchSort();return t||(this.sorted=!1),{"md-numeric":this.mdNumeric,"md-sortable":this.mdSortBy,"md-sorted":t&&this.sorted,"md-sorted-descending":t&&"desc"===this.sortType}}},methods:{hasMatchSort:function(){return this.parentTable.sortBy===this.mdSortBy},changeSort:function(){this.mdSortBy&&("asc"===this.sortType&&this.sorted?this.sortType="desc":this.sortType="asc",this.sorted=!0,this.parentTable.sortType=this.sortType,this.parentTable.emitSort(this.mdSortBy))}},mounted:function(){this.parentTable=(0,r.default)(this.$parent,"md-table"),this.hasMatchSort()&&(this.sorted=!0,this.sortType=this.parentTable.sortType)}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdSize:{type:[Number,String],default:10},mdPageOptions:[Array,Boolean],mdPage:{type:[Number,String],default:1},mdTotal:{type:[Number,String],default:"Many"},mdLabel:{type:String,default:"Rows per page"},mdSeparator:{type:String,default:"of"}},data:function(){return{subTotal:0,currentSize:parseInt(this.mdSize,10),currentPage:parseInt(this.mdPage,10),totalItems:isNaN(this.mdTotal)?Number.MAX_SAFE_INTEGER:parseInt(this.mdTotal,10)}},computed:{lastPage:function(){return!1}},methods:{emitPaginationEvent:function(){if(this.canFireEvents){var t=this.currentPage*this.currentSize;this.subTotal=t>this.mdTotal?this.mdTotal:t,this.$emit("pagination",{size:this.currentSize,page:this.currentPage})}},changeSize:function(){this.canFireEvents&&(this.$emit("size",this.currentSize),this.emitPaginationEvent())},previousPage:function(){this.canFireEvents&&(this.currentPage--,this.$emit("page",this.currentPage),this.emitPaginationEvent())},nextPage:function(){this.canFireEvents&&(this.currentPage++,this.$emit("page",this.currentPage),this.emitPaginationEvent())}},mounted:function(){var t=this;this.$nextTick(function(){t.subTotal=t.currentPage*t.currentSize,t.mdPageOptions=t.mdPageOptions||[10,25,50,100],t.currentSize=t.mdPageOptions[0],t.canFireEvents=!0})}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=o(i),a="md-transition-off";e.default={props:{mdAutoSelect:Boolean,mdSelection:Boolean,mdItem:Object},data:function(){return{parentTable:{},headRow:!1,checkbox:!1,index:0}},computed:{isDisabled:function(){return!this.mdSelection&&!this.headRow},hasSelection:function(){return this.mdSelection||this.headRow&&this.parentTable.hasRowSelection},classes:function(){return{"md-selected":this.checkbox}}},watch:{mdItem:function(t,e){this.parentTable.data[this.index]=this.mdItem,this.handleMultipleSelection(t===e)}},methods:{setSelectedRow:function(t,e){t?(this.parentTable.selectedRows[e]=this.parentTable.data[e],++this.parentTable.numberOfSelected):(delete this.parentTable.selectedRows[e],--this.parentTable.numberOfSelected)},handleSingleSelection:function(t){this.setSelectedRow(t,this.index-1),this.parentTable.$children[0].checkbox=this.parentTable.numberOfSelected===this.parentTable.numberOfRows},handleMultipleSelection:function(t){var e=this;this.parentTable.numberOfRows>25&&this.parentTable.$el.classList.add(a),this.parentTable.$children.forEach(function(n,o){n.checkbox=t,n.headRow||e.setSelectedRow(t,o-1)}),t?this.parentTable.numberOfSelected=this.parentTable.numberOfRows:this.parentTable.numberOfSelected=0,window.setTimeout(function(){return e.parentTable.$el.classList.remove(a)})},select:function(t){this.hasSelection&&(this.headRow?this.handleMultipleSelection(t):this.handleSingleSelection(t),this.parentTable.emitSelection())},autoSelect:function(){this.mdAutoSelect&&this.hasSelection&&(this.checkbox=!this.checkbox,this.handleSingleSelection(this.checkbox),this.parentTable.emitSelection())}},mounted:function(){this.parentTable=(0,r.default)(this.$parent,"md-table"),"thead"===this.$el.parentNode.tagName.toLowerCase()?this.headRow=!0:(this.parentTable.numberOfRows++,this.index=this.parentTable.numberOfRows,this.mdSelection&&(this.parentTable.hasRowSelection=!0),this.mdItem&&this.parentTable.data.push(this.mdItem))}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(39),r=o(i),a=n(3),s=o(a);e.default={props:{id:[String,Number],mdLabel:[String,Number],mdIcon:String,mdActive:Boolean,mdDisabled:Boolean,mdTooltip:String,mdTooltipDelay:{type:String,default:"0"},mdTooltipDirection:{type:String,default:"bottom"}},data:function(){return{mounted:!1,tabId:this.id||"tab-"+(0,r.default)(),width:"0px",left:"0px"}},watch:{mdActive:function(){this.updateTabData()},mdDisabled:function(){this.updateTabData()},mdIcon:function(){this.updateTabData()},mdLabel:function(){this.updateTabData()},mdTooltip:function(){this.updateTabData()},mdTooltipDelay:function(){this.updateTabData()},mdTooltipDirection:function(){this.updateTabData()}},computed:{styles:function(){return{width:this.width,left:this.left}}},methods:{getTabData:function(){return{id:this.tabId,label:this.mdLabel,icon:this.mdIcon,active:this.mdActive,disabled:this.mdDisabled,tooltip:this.mdTooltip,tooltipDelay:this.mdTooltipDelay,tooltipDirection:this.mdTooltipDirection,ref:this}},updateTabData:function(){this.parentTabs.updateTab(this.getTabData())}},mounted:function(){var t=this;if(this.parentTabs=(0,s.default)(this.$parent,"md-tabs"),
	!this.parentTabs)throw new Error("You must wrap the md-tab in a md-tabs");this.$nextTick(function(){t.mounted=!0,t.parentTabs.registerTab(t.getTabData()),t.mdActive&&(t.parentTabs.activeTab=t.tabId)})},beforeDestroy:function(){this.parentTabs.unregisterTab(this.getTabData())}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={props:{mdFixed:Boolean,mdCentered:Boolean,mdRight:Boolean,mdDynamicHeight:{type:Boolean,default:!0},mdElevation:{type:[String,Number],default:0}},mixins:[r.default],data:function(){return{tabList:{},activeTab:null,activeTabNumber:0,hasIcons:!1,hasLabel:!1,transitionControl:null,contentHeight:"0px",contentWidth:"0px"}},computed:{tabClasses:function(){return{"md-dynamic-height":this.mdDynamicHeight,"md-transition-off":this.transitionOff}},navigationClasses:function(){return{"md-has-icon":this.hasIcons,"md-has-label":this.hasLabel,"md-fixed":this.mdFixed,"md-right":!this.mdCentered&&this.mdRight,"md-centered":this.mdCentered||this.mdFixed}},indicatorClasses:function(){var t=this.lastIndicatorNumber>this.activeTabNumber;return this.lastIndicatorNumber=this.activeTabNumber,{"md-transition-off":this.transitionOff,"md-to-right":!t,"md-to-left":t}}},methods:{getHeaderClass:function(t){return{"md-active":this.activeTab===t.id,"md-disabled":t.disabled}},registerTab:function(t){this.tabList[t.id]=t,this.$forceUpdate()},unregisterTab:function(t){delete this.tabList[t.id]},updateTab:function(t){if(this.registerTab(t),t.active)if(t.disabled){var e=Object.keys(this.tabList),n=e.indexOf(t.id)+1,o=e[n];o?this.setActiveTab(this.tabList[o]):this.setActiveTab(this.tabList[0])}else this.setActiveTab(t)},observeElementChanges:function(){this.contentObserver=new MutationObserver(this.calculateOnWatch),this.navigationObserver=new MutationObserver(this.calculateOnWatch),this.contentObserver.observe(this.$refs.tabContent,{childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.navigationObserver.observe(this.$refs.tabNavigation.$el,{attributes:!0})},getTabIndex:function(t){var e=Object.keys(this.tabList);return e.indexOf(t)},calculateIndicatorPos:function(){var t=this.$el.offsetWidth,e=this.$refs.tabHeader[this.activeTabNumber],n=e.offsetLeft,o=t-n-e.offsetWidth;this.$refs.indicator.style.left=n+"px",this.$refs.indicator.style.right=o+"px"},calculateTabsWidthAndPosition:function(){var t=this.$el.offsetWidth;this.contentWidth=t*this.activeTabNumber+"px";var e=0;for(var n in this.tabList){var o=this.tabList[n];o.ref.width=t+"px",o.ref.left=t*e+"px",e++}},calculateContentHeight:function(){var t=this;this.$nextTick(function(){var e=t.tabList[t.activeTab].ref.$el.offsetHeight;t.contentHeight=e+"px"})},calculatePosition:function(){var t=this;window.requestAnimationFrame(function(){t.calculateIndicatorPos(),t.calculateTabsWidthAndPosition(),t.calculateContentHeight()})},debounceTransition:function(){var t=this;window.clearTimeout(this.transitionControl),this.transitionControl=window.setTimeout(function(){t.calculatePosition(),t.transitionOff=!1},200)},calculateOnWatch:function(){this.transitionOff=!0,this.calculatePosition(),this.debounceTransition()},setActiveTab:function(t){this.hasIcons=!!t.icon,this.hasLabel=!!t.label,this.activeTab=t.id,this.activeTabNumber=this.getTabIndex(this.activeTab),this.calculatePosition(),this.$emit("change",this.activeTabNumber)}},mounted:function(){var t=this;this.$nextTick(function(){if(t.observeElementChanges(),window.addEventListener("resize",t.calculateOnWatch),!t.activeTab){var e=Object.keys(t.tabList)[0];t.setActiveTab(t.tabList[e])}})},beforeDestroy:function(){this.contentObserver&&this.contentObserver.disconnect(),this.navigationObserver&&this.navigationObserver.disconnect(),window.removeEventListener("resize",this.calculateOnWatch)}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i);e.default={mixins:[r.default]},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),a=o(r);e.default={props:{mdDirection:{type:String,default:"bottom"},mdDelay:{type:String,default:"0"}},data:function(){return{active:!1,parentClass:null,transitionOff:!1,topPosition:!1,leftPosition:!1}},computed:{classes:function(){var t={"md-active":this.active,"md-transition-off":this.transitionOff,"md-tooltip-top":"top"===this.mdDirection,"md-tooltip-right":"right"===this.mdDirection,"md-tooltip-bottom":"bottom"===this.mdDirection,"md-tooltip-left":"left"===this.mdDirection};return this.parentClass&&(t[this.parentClass]=!0),t},style:function(){return{"transition-delay":this.mdDelay+"ms",top:this.topPosition+"px",left:this.leftPosition+"px"}}},watch:{mdDirection:function(){this.calculateTooltipPosition()}},methods:{removeTooltips:function(){var t=[].concat(i(this.rootElement.querySelectorAll(".md-tooltip")));t.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)}),this.tooltipElement.removeEventListener(a.default,this.removeTooltips)},calculateTooltipPosition:function(){var t=this.parentElement.getBoundingClientRect(),e={};switch(this.mdDirection){case"top":e.top=t.top-this.$el.offsetHeight,e.left=t.left+t.width/2;break;case"right":e.top=t.top,e.left=t.left+t.width;break;case"bottom":e.top=t.bottom,e.left=t.left+t.width/2;break;case"left":e.top=t.top,e.left=t.left-this.$el.offsetWidth;break;default:console.warn("Invalid "+this.mdDirection+" option to md-direction option")}this.topPosition=e.top,this.leftPosition=e.left},generateTooltipClasses:function(){var t=[];[].concat(i(this.parentElement.classList)).forEach(function(e){e.indexOf("md-")>=0&&"md-active"!==e&&t.push(e+"-tooltip")}),this.parentClass=t.join(" ")},open:function(){var t=this;this.removeTooltips(),this.$nextTick(function(){t.rootElement.appendChild(t.tooltipElement),getComputedStyle(t.tooltipElement).top,t.transitionOff=!0,t.generateTooltipClasses(),t.calculateTooltipPosition(),window.setTimeout(function(){t.transitionOff=!1,t.active=!0},10)})},close:function(){this.active=!1,this.tooltipElement.removeEventListener(a.default,this.removeTooltips),this.tooltipElement.addEventListener(a.default,this.removeTooltips)}},mounted:function(){var t=this;this.$nextTick(function(){t.tooltipElement=t.$el,t.parentElement=t.tooltipElement.parentNode,t.rootElement=t.$root.$el,t.$el.parentNode.removeChild(t.$el),t.parentElement.addEventListener("mouseenter",t.open),t.parentElement.addEventListener("focus",t.open),t.parentElement.addEventListener("mouseleave",t.close),t.parentElement.addEventListener("blur",t.close)})},beforeDestroy:function(){this.active=!1,this.removeTooltips(),this.parentElement&&(this.parentElement.removeEventListener("mouseenter",this.open),this.parentElement.removeEventListener("focus",this.open),this.parentElement.removeEventListener("mouseleave",this.close),this.parentElement.removeEventListener("blur",this.close))}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdElevation:{type:[String,Number],default:1},mdTag:{type:String,default:"div"}},computed:{classes:function(){var t=parseInt(this.mdElevation,10),e="md-whiteframe-";return isNaN(t)||"number"!=typeof t?this.mdElevation.indexOf("dp")>-1&&(e+=this.mdElevation):(e+=t,e+="dp"),e}},render:function(t){return t(this.mdTag,{staticClass:"md-whiteframe",class:this.classes},this.$slots.default)}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTag:String,mdName:{type:String,default:"default"}},data:function(){return{name:"md-theme"}},render:function(t){return this.mdTag||this.$slots.default.length>1?t(this.mdTag||"div",{staticClass:"md-theme"},this.$slots.default):this.$slots.default[0]}},t.exports=e.default},function(t,e,n){e=t.exports=n(90)(),e.push([t.id,'html{height:100%;box-sizing:border-box}html *,html :after,html :before{box-sizing:inherit}body{min-height:100%;margin:0;position:relative;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,.87);font-family:Roboto,Noto Sans,Noto,sans-serif}[tabindex="-1"]:focus{outline:none}audio,canvas,embed,iframe,img,object,svg,video{max-width:100%;height:auto;font-style:italic;vertical-align:middle}[tabindex="-1"]:focus{outline:none!important}.md-scrollbar::-webkit-scrollbar,.md-scrollbar ::-webkit-scrollbar{width:10px;height:10px;box-shadow:inset 1px 1px 0 rgba(0,0,0,.12);transition:all .5s cubic-bezier(.35,0,.25,1);background-color:rgba(0,0,0,.05)}.md-scrollbar::-webkit-scrollbar:hover,.md-scrollbar ::-webkit-scrollbar:hover{box-shadow:inset 1px 1px 0 rgba(0,0,0,.054),inset 0 -1px 0 rgba(0,0,0,.038);background-color:rgba(0,0,0,.087)}.md-scrollbar::-webkit-scrollbar-button,.md-scrollbar ::-webkit-scrollbar-button{display:none}.md-scrollbar::-webkit-scrollbar-corner,.md-scrollbar ::-webkit-scrollbar-corner{background-color:transparent}.md-scrollbar::-webkit-scrollbar-thumb,.md-scrollbar ::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.26);box-shadow:inset 1px 1px 0 rgba(0,0,0,.054),inset 0 -1px 0 rgba(0,0,0,.087);transition:all .5s cubic-bezier(.35,0,.25,1)}.md-caption{font-size:12px;font-weight:400;letter-spacing:.02em;line-height:17px}.md-body-1,body{font-weight:400;line-height:20px}.md-body-1,.md-body-2,body{font-size:14px;letter-spacing:.01em}.md-body-2{font-weight:500;line-height:24px}.md-subheading{font-size:16px;font-weight:400;letter-spacing:.01em;line-height:24px}.md-title{font-size:20px;font-weight:500;letter-spacing:.005em;line-height:26px}.md-headline{font-size:24px;line-height:32px}.md-display-1,.md-headline{font-weight:400;letter-spacing:0}.md-display-1{font-size:34px;line-height:40px}.md-display-2{font-size:45px;font-weight:400;letter-spacing:0;line-height:48px}.md-display-3{font-size:56px;font-weight:400;letter-spacing:-.005em;line-height:58px}.md-display-4{font-size:112px;font-weight:300;letter-spacing:-.01em;line-height:112px}a:not(.md-button):not(.md-bottom-bar-item){text-decoration:none}a:not(.md-button):not(.md-bottom-bar-item):hover{text-decoration:underline}button:focus{outline:none}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,n=window.getComputedStyle(e,null),o=parseInt(n.getPropertyValue("border-top-width")),i=parseInt(n.getPropertyValue("border-left-width")),r=this.offsetTop-e.offsetTop<e.scrollTop,a=this.offsetTop-e.offsetTop+this.clientHeight-o>e.scrollTop+e.clientHeight,s=this.offsetLeft-e.offsetLeft<e.scrollLeft,d=this.offsetLeft-e.offsetLeft+this.clientWidth-i>e.scrollLeft+e.clientWidth,c=r&&!a;(r||a)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-o+this.clientHeight/2),(s||d)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-i+this.clientWidth/2),(r||a||s||d)&&!t&&this.scrollIntoView(c)})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=".THEME_NAME.md-avatar.md-primary.md-avatar-icon{background-color:PRIMARY-COLOR}.THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon{color:PRIMARY-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-accent.md-avatar-icon{background-color:ACCENT-COLOR}.THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon{color:ACCENT-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-warn.md-avatar-icon{background-color:WARN-COLOR}.THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon{color:WARN-CONTRAST-0.99999}\n"},function(t,e){t.exports=".THEME_NAME.md-bottom-bar.md-fixed{background-color:BACKGROUND-COLOR}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active{color:PRIMARY-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active{color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active{color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not(.md-active){color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-accent{background-color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not(.md-active){color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active{color:ACCENT-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-warn{background-color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item{color:WARN-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not(.md-active){color:WARN-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active{color:WARN-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-transparent{background-color:transparent}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}\n"},function(t,e){t.exports=".THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button){color:BACKGROUND-COLOR-900;background-color:BACKGROUND-COLOR-50}.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button):hover{background-color:BACKGROUND-COLOR-200}.THEME_NAME.md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised){color:BACKGROUND-COLOR}.THEME_NAME.md-button:not([disabled]).md-fab{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-button:not([disabled]).md-fab:hover{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-fab.md-clean{color:BACKGROUND-COLOR-900;background-color:BACKGROUND-COLOR-50}.THEME_NAME.md-button:not([disabled]).md-fab.md-clean:hover{background-color:BACKGROUND-COLOR-200}.THEME_NAME.md-button:not([disabled]).md-primary:not(.md-icon-button){color:PRIMARY-COLOR}.THEME_NAME.md-button:not([disabled]).md-primary.md-raised,.THEME_NAME.md-button:not([disabled]).md-primary.md-fab{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-primary.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-primary.md-fab:hover{background-color:PRIMARY-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised){color:PRIMARY-COLOR}.THEME_NAME.md-button:not([disabled]).md-accent:not(.md-icon-button){color:ACCENT-COLOR}.THEME_NAME.md-button:not([disabled]).md-accent.md-raised{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-accent.md-raised:hover{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised){color:ACCENT-COLOR}.THEME_NAME.md-button:not([disabled]).md-warn:not(.md-icon-button){color:WARN-COLOR}.THEME_NAME.md-button:not([disabled]).md-warn.md-raised,.THEME_NAME.md-button:not([disabled]).md-warn.md-fab{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-button:not([disabled]).md-warn.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-warn.md-fab:hover{background-color:WARN-COLOR-600}.THEME_NAME.md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised){color:WARN-COLOR}\n"},function(t,e){t.exports='.THEME_NAME.md-button-toggle .md-button:after{width:1px;position:absolute;top:0;bottom:0;left:0;content:" "}.THEME_NAME.md-button-toggle .md-toggle{color:BACKGROUND-CONTRAST-600;background-color:BACKGROUND-COLOR-500}.THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]){background-color:BACKGROUND-COLOR-600}.THEME_NAME.md-button-toggle .md-toggle+.md-toggle:after{background-color:BACKGROUND-COLOR-600}.THEME_NAME.md-button-toggle.md-primary .md-toggle{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]){background-color:PRIMARY-COLOR-600}.THEME_NAME.md-button-toggle.md-primary .md-toggle+.md-toggle:after{background-color:PRIMARY-COLOR-700}.THEME_NAME.md-button-toggle.md-accent .md-toggle{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]){background-color:ACCENT-COLOR-600}.THEME_NAME.md-button-toggle.md-accent .md-toggle+.md-toggle:after{background-color:ACCENT-COLOR-700}.THEME_NAME.md-button-toggle.md-warn .md-toggle{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]){background-color:WARN-COLOR-600}.THEME_NAME.md-button-toggle.md-warn .md-toggle+.md-toggle:after{background-color:WARN-COLOR-700}.THEME_NAME.md-button-toggle [disabled]{color:rgba(0,0,0,0.26)}.THEME_NAME.md-button-toggle [disabled].md-toggle{color:BACKGROUND-CONTRAST-0.2;background-color:rgba(0,0,0,0.26)}\n'},function(t,e){t.exports=".THEME_NAME.md-card{background-color:BACKGROUND-COLOR-A100}.THEME_NAME.md-card.md-primary{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button .md-icon{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-card.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button .md-icon{color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-card.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button .md-icon{color:WARN-CONTRAST-0.87}.THEME_NAME.md-card .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card .md-card-actions .md-icon-button .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-card>.md-card-area:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop{background:linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%)}.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area{background-color:BACKGROUND-CONTRAST-0.4}.THEME_NAME.md-card .md-card-expand .md-card-actions{background-color:BACKGROUND-COLOR-A100}\n"},function(t,e){t.exports=".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary.md-checked .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn.md-checked .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"},function(t,e){t.exports=".THEME_NAME.md-dialog-container .md-dialog{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}\n"},function(t,e){t.exports=".THEME_NAME.md-icon.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-icon.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-icon.md-warn{color:WARN-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-input-container.md-input-invalid:after{background-color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid input,.THEME_NAME.md-input-container.md-input-invalid textarea{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused.md-input-inline label{color:rgba(0,0,0,0.54)}.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused:after{height:2px;background-color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-focused input,.THEME_NAME.md-input-container.md-input-focused textarea{color:PRIMARY-COLOR;text-shadow:0 0 0 BACKGROUND-CONTRAST;-webkit-text-fill-color:transparent}.THEME_NAME.md-input-container.md-input-focused label{color:PRIMARY-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-list{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}.THEME_NAME.md-list.md-transparent{background-color:transparent;color:inherit}.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container{color:ACCENT-COLOR}.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container>.md-icon{color:ACCENT-COLOR}.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container{color:WARN-COLOR}.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container>.md-icon{color:WARN-COLOR}.THEME_NAME.md-list .md-list-item-expand .md-list-item-container{background-color:BACKGROUND-COLOR-A100}.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus{background-color:rgba(153,153,153,0.2)}\n"},function(t,e){t.exports=".THEME_NAME.md-menu-content{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}.THEME_NAME.md-menu-content .md-menu-item:hover .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-menu-item:focus .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-menu-content .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"},function(t,e){t.exports=".THEME_NAME.md-radio .md-radio-container:after{background-color:ACCENT-COLOR}.THEME_NAME.md-radio.md-checked .md-radio-container{border-color:ACCENT-COLOR}.THEME_NAME.md-radio.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-radio.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-radio.md-primary .md-radio-container:after{background-color:PRIMARY-COLOR}.THEME_NAME.md-radio.md-primary.md-checked .md-radio-container{border-color:PRIMARY-COLOR}.THEME_NAME.md-radio.md-primary.md-checked .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-radio.md-warn .md-radio-container:after{background-color:WARN-COLOR}.THEME_NAME.md-radio.md-warn.md-checked .md-radio-container{border-color:WARN-COLOR}.THEME_NAME.md-radio.md-warn.md-checked .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-radio.md-disabled .md-radio-container{border-color:rgba(0,0,0,0.26)}.THEME_NAME.md-radio.md-disabled .md-radio-container:after{background-color:rgba(0,0,0,0.26)}.THEME_NAME.md-radio.md-disabled.md-checked .md-radio-container{border-color:rgba(0,0,0,0.26)}\n"},function(t,e){t.exports=".THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-select-content .md-menu-item.md-selected,.THEME_NAME.md-select-content .md-menu-item.md-checked{color:PRIMARY-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-sidenav .md-sidenav-content{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}\n"},function(t,e){t.exports=".THEME_NAME.md-spinner .md-spinner-path{stroke:PRIMARY-COLOR}.THEME_NAME.md-spinner.md-accent .md-spinner-path{stroke:ACCENT-COLOR}.THEME_NAME.md-spinner.md-warn .md-spinner-path{stroke:WARN-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-subheader.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-subheader.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-subheader.md-warn{color:WARN-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},function(t,e){t.exports=".THEME_NAME.md-table-card .md-toolbar{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST-A100}.THEME_NAME.md-table-alternate-header{background-color:BACKGROUND-COLOR-A100}.THEME_NAME.md-table-alternate-header .md-toolbar{background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-CONTRAST-A100}.THEME_NAME.md-table-alternate-header .md-counter{color:ACCENT-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-tabs>.md-tabs-navigation{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-CONTRAST}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-disabled{color:PRIMARY-CONTRAST-0.26}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-indicator{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation{background-color:transparent;border-bottom:1px solid BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-disabled{color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-indicator{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header:focus{color:ACCENT-CONTRAST}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-disabled{color:ACCENT-CONTRAST-0.26}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation{background-color:WARN-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header{color:WARN-CONTRAST-0.54}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header:focus{color:WARN-CONTRAST}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-disabled{color:WARN-CONTRAST-0.26}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}\n"},function(t,e){t.exports=".THEME_NAME.md-toolbar{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-transparent{background-color:transparent;color:BACKGROUND-CONTRAST}\n"},function(t,e){t.exports=".THEME_NAME :not(input):not(textarea)::selection{background:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME a:not(.md-button){color:ACCENT-COLOR}.THEME_NAME a:not(.md-button):hover{color:ACCENT-COLOR-800}body.THEME_NAME{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST-0.87}.THEME_NAME .md-caption,.THEME_NAME .md-display-1,.THEME_NAME .md-display-2,.THEME_NAME .md-display-3,.THEME_NAME .md-display-4{color:BACKGROUND-CONTRAST-0.57}.THEME_NAME code:not(.hljs){background-color:ACCENT-COLOR-A100-0.2;color:ACCENT-COLOR-800}\n"},function(t,e){!function(){function t(t,o){var i=t[o];t[o]=function(t){var o,r=!1,a=!1;return t.match(n)?(t=t.replace(n,""),this.parentNode||(e.appendChild(this),a=!0),parentNode=this.parentNode,this.id||(this.id="rootedQuerySelector_id_"+(new Date).getTime(),r=!0),o=i.call(parentNode,"#"+this.id+" "+t),r&&(this.id=""),a&&e.removeChild(this),o):i.call(this,t)}}if(!HTMLElement.prototype.querySelectorAll)throw new Error("rootedQuerySelectorAll: This polyfill can only be used with browsers that support querySelectorAll");var e=document.createElement("div");try{e.querySelectorAll(":scope *")}catch(e){var n=/^\s*:scope/gi;t(HTMLElement.prototype,"querySelector"),t(HTMLElement.prototype,"querySelectorAll")}}()},function(t,e,n){var o,i;n(96),o=n(40);var r=n(208);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(115),o=n(41);var r=n(245);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),
	"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(94),o=n(42);var r=n(201);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(43);var r=n(207);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(110),o=n(44);var r=n(237);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(95),o=n(45);var r=n(203);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(105),o=n(46);var r=n(221);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(231);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(47);var r=n(215);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(200);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(48);var r=n(243);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(212);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(49);var r=n(216);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(50);var r=n(226);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(236);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(51);var r=n(206);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(111),o=n(52);var r=n(238);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(107),o=n(53);var r=n(232);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(229);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(204);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i,r=n(199);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(54);var r=n(247);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(55);var r=n(230);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(56);var r=n(202);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(99);var r=n(213);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(117),o=n(57);var r=n(249);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(58);var r=n(223);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(104),o=n(59);var r=n(220);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(60);var r=n(227);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(98),o=n(61),i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),t.exports=o},function(t,e,n){var o,i;n(102),o=n(62);var r=n(217);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(63);var r=n(205);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(64),i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),t.exports=o},function(t,e,n){var o,i;n(92),o=n(65);var r=n(198);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(66);var r=n(222);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(67);var r=n(225);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(116),o=n(68);var r=n(248);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(69);var r=n(240);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(97),o=n(70);var r=n(209);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(103),o=n(71);var r=n(218);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(109),o=n(72);var r=n(233);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(112),o=n(73);var r=n(239);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(108),o=n(74),i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),t.exports=o},function(t,e,n){var o,i;n(114),o=n(75);var r=n(244);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(76);var r=n(210);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(77);var r=n(246);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(78);var r=n(224);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(79);var r=n(211);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(80);var r=n(219);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(81);var r=n(234);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(82);var r=n(242);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;o=n(83);var r=n(235);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(113),o=n(84);var r=n(241);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(106),o=n(85);var r=n(228);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(100),o=n(86);var r=n(214);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(93),o=n(87),i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),t.exports=o},function(t,e,n){var o,i;n(101),i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),t.exports=o},function(t,e,n){var o,i;o=n(88),i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-menu"},[t._t("default"),t._v(" "),e("md-backdrop",{ref:"backdrop",staticClass:"md-menu-backdrop md-transparent md-active",on:{close:t.close}})],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-title md-title"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-content"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-bottom-bar",class:[t.themeClass,t.classes]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-dialog",{ref:"dialog",staticClass:"md-dialog-prompt",on:{close:function(e){t.fireCloseEvent("cancel")}}},[t.mdTitle?e("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?e("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):t._e(),t._v(" "),t.mdContent?e("md-dialog-content",[t._v(t._s(t.mdContent))]):t._e(),t._v(" "),e("md-dialog-content",[e("md-input-container",[e("md-input",{ref:"input",attrs:{id:t.mdInputId,name:t.mdInputName,maxlength:t.mdInputMaxlength,placeholder:t.mdInputPlaceholder,value:t.value},nativeOn:{keydown:function(e){t._k(e.keyCode,"enter",13)||t.confirmValue(e)}}})])]),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("cancel")}}},[t._v(t._s(t.mdCancelText))]),t._v(" "),e("md-button",{staticClass:"md-primary",on:{click:t.confirmValue}},[t._v(t._s(t.mdOkText))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-button-toggle",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-content"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-list-expand",style:{"margin-bottom":t.height}},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-media-cover",class:t.classes},[t._t("default"),t._v(" "),t.mdTextScrim?e("div",{ref:"backdrop",staticClass:"md-card-backdrop",style:t.styles}):t._e()],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return t.href?e("a",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple"}],staticClass:"md-bottom-bar-item",class:t.classes,attrs:{href:t.href},on:{click:t.setActive}},[e("md-icon",[t._v(t._s(t.mdIcon))]),t._v(" "),e("span",{staticClass:"md-text"},[t._t("default")],!0)]):e("button",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple"}],staticClass:"md-bottom-bar-item",class:t.classes,attrs:{type:"button"},on:{click:t.setActive}},[e("md-icon",[t._v(t._s(t.mdIcon))]),t._v(" "),e("span",{staticClass:"md-text"},[t._t("default")],!0)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-avatar",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-select",class:[t.themeClass,t.classes]},[e("md-menu",{attrs:{"md-close-on-select":!t.multiple}},[e("span",{ref:"value",staticClass:"md-select-value",attrs:{"md-menu-trigger":""}},[t._v(t._s(t.selectedText||t.multipleText||t.placeholder))]),t._v(" "),e("md-menu-content",{staticClass:"md-select-content",class:[t.themeClass,t.contentClasses]},[t._t("default")],!0)]),t._v(" "),e("select",{attrs:{name:t.name,id:t.id,required:t.required,disabled:t.disabled,tabindex:"-1"}},[e("option",{domProps:{value:t.value}},[t._v(t._s(t.value))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-table-alternate-header",class:[t.themeClass,t.classes]},[e("md-toolbar",[e("div",{staticClass:"md-counter"},[e("span",{ref:"counter"},[t._v(t._s(t.tableInstance.numberOfSelected))]),t._v(" "),e("span",[t._v(t._s(t.mdSelectedLabel))])]),t._v(" "),t._t("default")],!0)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-table-edit",on:{keydown:function(e){t._k(e.keyCode,"esc",27)||t.closeDialog(e)}}},[e("div",{staticClass:"md-table-edit-trigger",class:t.triggerClasses,on:{click:function(e){e.stopPropagation(),t.openDialog(e)}}},[t._v("\n    "+t._s(t.value||t.mdPlaceholder)+"\n  ")]),t._v(" "),e("div",{ref:"dialog",staticClass:"md-table-dialog",class:t.dialogClasses},[e("md-input-container",[e("md-input",{ref:"input",attrs:{id:t.mdId,name:t.mdName,maxlength:t.mdMaxlength,value:t.value,placeholder:t.mdPlaceholder},nativeOn:{keydown:function(e){t._k(e.keyCode,"enter",13)||t.confirmDialog(e)}}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-header"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("hr",{staticClass:"md-divider"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("span",{staticClass:"md-tooltip",class:t.classes,style:t.style},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-area",class:t.classes},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-header-text"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("ul",{staticClass:"md-list",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-sidenav",class:[t.themeClass,t.classes],attrs:{tabindex:"0"},on:{keyup:function(e){t._k(e.keyCode,"esc",27)||t.close(e)}}},[e("div",{staticClass:"md-sidenav-content"},[t._t("default")],!0),t._v(" "),e("md-backdrop",{staticClass:"md-sidenav-backdrop",on:{close:t.close}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("th",{staticClass:"md-table-head",class:t.classes,on:{click:t.changeSort}},[e("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:!t.mdSortBy,expression:"!mdSortBy"}],staticClass:"md-table-head-container"},[e("div",{staticClass:"md-table-head-text md-test"},[t.mdSortBy?e("md-icon",{staticClass:"md-sortable-icon"},[t._v("arrow_downward")]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.mdTooltip?e("md-tooltip",[t._v(t._s(t.mdTooltip))]):t._e()],!0)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-input-container",class:[t.themeClass,t.classes]},[t._t("default"),t._v(" "),t.enableCounter?e("span",{staticClass:"md-count"},[t._v(t._s(t.inputLength)+" / "+t._s(t.counterLength))]):t._e(),t._v(" "),t.mdHasPassword?e("md-button",{staticClass:"md-icon-button md-toggle-password",on:{click:t.togglePasswordType}},[e("md-icon",[t._v(t._s(t.showPassword?"visibility_off":"visibility"))])]):t._e()],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card",class:[t.themeClass,t.classes]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-menu-content",class:[t.themeClass],attrs:{tabindex:"-1"},on:{keydown:[function(e){t._k(e.keyCode,"esc",27)||(e.preventDefault(),t.close(e))},function(e){t._k(e.keyCode,"tab",9)||(e.preventDefault(),t.close(e))},function(e){t._k(e.keyCode,"up",38)||(e.preventDefault(),t.highlightItem("up"))},function(e){t._k(e.keyCode,"down",40)||(e.preventDefault(),t.highlightItem("down"))},function(e){t._k(e.keyCode,"enter",13)||(e.preventDefault(),t.fireClick(e))},function(e){t._k(e.keyCode,"space",32)||(e.preventDefault(),t.fireClick(e))}]}},[e("md-list",[t._t("default")],!0)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("input",{staticClass:"md-input",attrs:{type:t.type,disabled:t.disabled,required:t.required,placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{focus:t.onFocus,blur:t.onBlur,input:t.onInput,keydown:[function(e){t._k(e.keyCode,"up",38)||t.onInput(e)},function(e){t._k(e.keyCode,"down",40)||t.onInput(e)}]}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("td",{staticClass:"md-table-cell",class:t.classes},[e("div",{staticClass:"md-table-cell-container"},[t._t("default")],!0)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-list-item",{staticClass:"md-menu-item",class:t.classes,attrs:{disabled:t.disabled},on:{click:t.close}},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-media",class:t.classes},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("textarea",{staticClass:"md-input",attrs:{disabled:t.disabled,required:t.required,placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{focus:t.onFocus,blur:t.onBlur,input:t.onInput}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-toolbar",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-actions"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-dialog",{ref:"dialog",staticClass:"md-dialog-confirm",on:{close:function(e){t.fireCloseEvent("cancel")}}},[t.mdTitle?e("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?e("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):e("md-dialog-content",[t._v(t._s(t.mdContent))]),t._v(" "),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("cancel")}}},[t._v(t._s(t.mdCancelText))]),t._v(" "),e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("ok")}}},[t._v(t._s(t.mdOkText))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-actions"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-container",class:[t.themeClass,t.classes],attrs:{tabindex:"0"},on:{keyup:function(e){t._k(e.keyCode,"esc",27)||(e.stopPropagation(),t.closeOnEsc(e))}}},[e("div",{ref:"dialog",staticClass:"md-dialog",class:t.dialogClasses,style:t.styles},[t._t("default")],!0),t._v(" "),t.mdBackdrop?e("md-backdrop",{ref:"backdrop",staticClass:"md-dialog-backdrop",class:t.classes,on:{close:function(e){t.mdClickOutsideToClose&&t.close()}}}):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("transition",{attrs:{name:"md-spinner",appear:""}},[e("div",{staticClass:"md-spinner",class:[t.themeClass,t.classes],style:t.styles},[e("svg",{staticClass:"md-spinner-draw",attrs:{viewBox:"25 25 50 50"}},[e("circle",{staticClass:"md-spinner-path",attrs:{cx:"50",cy:"50",r:"20","stroke-width":t.mdStroke,"stroke-dasharray":t.dashProgress}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-table-pagination"},[e("span",{staticClass:"md-table-pagination-label"},[t._v(t._s(t.mdLabel)+":")]),t._v(" "),t.mdPageOptions?e("md-select",{directives:[{name:"model",rawName:"v-model",value:t.currentSize,expression:"currentSize"}],attrs:{"md-menu-class":"md-pagination-select"},domProps:{value:t.currentSize},on:{change:t.changeSize,input:function(e){t.currentSize=e}}},t._l(t.mdPageOptions,function(n){return e("md-option",{attrs:{value:n}},[t._v(t._s(n))])})):t._e(),t._v(" "),e("span",[t._v(t._s((t.currentPage-1)*t.currentSize+1)+"-"+t._s(t.subTotal)+" "+t._s(t.mdSeparator)+" "+t._s(t.mdTotal))]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-table-pagination-previous",attrs:{disabled:1===t.currentPage},on:{click:t.previousPage}},[e("md-icon",[t._v("keyboard_arrow_left")])]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-table-pagination-next",attrs:{disabled:t.currentSize*t.currentPage>=t.totalItems},on:{click:t.nextPage}},[e("md-icon",[t._v("keyboard_arrow_right")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-tab",style:t.styles,attrs:{id:t.tabId}},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-card-media-actions"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return t.href?e("a",{staticClass:"md-button",class:[t.themeClass],attrs:{href:t.href,disabled:t.disabled,target:t.target,rel:t.newRel},on:{click:function(e){t.$emit("click",e)}}},[e("md-ink-ripple",{attrs:{"md-disabled":t.disabled}}),t._v(" "),t._t("default")],!0):e("button",{staticClass:"md-button",class:[t.themeClass],attrs:{type:t.type,disabled:t.disabled},on:{click:function(e){t.$emit("click",e)}}},[e("md-ink-ripple",{attrs:{"md-disabled":t.disabled}}),t._v(" "),t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-checkbox",class:[t.themeClass,t.classes]},[e("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:t.disabled,expression:"disabled"}],staticClass:"md-checkbox-container",attrs:{tabindex:"0"},on:{click:function(e){e.stopPropagation(),t.toggleCheck(e)}}},[e("input",{attrs:{type:"checkbox",name:t.name,id:t.id,disabled:t.disabled,tabindex:"-1"},domProps:{value:t.value}})]),t._v(" "),t.$slots.default?e("label",{staticClass:"md-checkbox-label",attrs:{for:t.id||t.name}},[t._t("default")],!0):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return"md-list"===t.$parent.$options._componentTag?e("li",{staticClass:"md-subheader",class:[t.themeClass]},[t._t("default")],!0):e("div",{staticClass:"md-subheader",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-menu-item",{staticClass:"md-option",class:t.classes,attrs:{tabindex:"-1"},on:{click:t.selectOption}},[t.parentSelect.multiple?e("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],staticClass:"md-primary",domProps:{value:t.check},on:{input:function(e){t.check=e}}},[e("span",{ref:"item"},[t._t("default")],!0)]):e("span",{ref:"item"},[t._t("default")],!0),t._v(" ")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-tabs",class:[t.themeClass,t.tabClasses]},[e("md-whiteframe",{ref:"tabNavigation",staticClass:"md-tabs-navigation",class:t.navigationClasses,attrs:{"md-tag":"nav","md-elevation":t.mdElevation}},[t._l(t.tabList,function(n){return e("button",{key:n.id,ref:"tabHeader",refInFor:!0,staticClass:"md-tab-header",class:t.getHeaderClass(n),attrs:{type:"button",disabled:n.disabled},on:{click:function(e){t.setActiveTab(n)}}},[e("md-ink-ripple",{attrs:{"md-disabled":n.disabled}}),t._v(" "),e("div",{staticClass:"md-tab-header-container"},[n.icon?e("md-icon",[t._v(t._s(n.icon))]):t._e(),t._v(" "),n.label?e("span",[t._v(t._s(n.label))]):t._e(),t._v(" "),n.tooltip?e("md-tooltip",{attrs:{"md-direction":n.tooltipDirection,"md-delay":n.tooltipDelay}},[t._v(t._s(n.tooltip))]):t._e()])])}),t._v(" "),e("span",{ref:"indicator",staticClass:"md-tab-indicator",class:t.indicatorClasses})],!0),t._v(" "),e("div",{ref:"tabContent",staticClass:"md-tabs-content",style:{height:t.contentHeight}},[e("div",{staticClass:"md-tabs-wrapper",style:{transform:"translate3D(-"+t.contentWidth+", 0, 0)"}},[t._t("default")],!0)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("tr",{staticClass:"md-table-row",class:t.classes,on:{click:t.autoSelect}},[t.hasSelection?e("md-table-cell",{staticClass:"md-table-selection"},[e("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],attrs:{disabled:t.isDisabled},domProps:{value:t.checkbox},on:{change:t.select,input:function(e){t.checkbox=e}}})]):t._e(),t._v(" "),t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{ref:"expand",staticClass:"md-card-expand"},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-table",class:[t.themeClass]},[e("table",[t._t("default")],!0)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-backdrop",on:{click:t.close,keyup:function(e){t._k(e.keyCode,"esc",27)||t.close(e)}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-card",{staticClass:"md-table-card",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-dialog",{ref:"dialog",staticClass:"md-dialog-alert",on:{close:function(e){t.fireCloseEvent()}}},[t.mdTitle?e("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?e("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):e("md-dialog-content",[t._v(t._s(t.mdContent))]),t._v(" "),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close()}}},[t._v(t._s(t.mdOkText))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,
	t._c);return e("div",{staticClass:"md-radio",class:[t.themeClass,t.classes]},[e("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:t.disabled,expression:"disabled"}],staticClass:"md-radio-container",on:{click:t.toggleCheck}},[e("input",{attrs:{type:"radio",name:t.name,id:t.id,disabled:t.disabled},domProps:{value:t.value}})]),t._v(" "),t.$slots.default?e("label",{staticClass:"md-radio-label",attrs:{for:t.id||t.name}},[t._t("default")],!0):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("i",{staticClass:"md-icon material-icons",class:[t.themeClass]},[t._t("default")],!0)},staticRenderFns:[]}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=u[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(d(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],e));u[o.id]={id:o.id,refs:1,parts:a}}}}function i(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],r=i[0],a=i[1],s=i[2],d=i[3],c={css:a,media:s,sourceMap:d};n[r]?n[r].parts.push(c):e.push(n[r]={id:r,parts:[c]})}return e}function r(t,e){var n=p(),o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function d(t,e){var n,o,i;if(e.singleton){var r=v++;n=h||(h=s(e)),o=c.bind(null,n,r,!1),i=c.bind(null,n,r,!0)}else n=s(e),o=l.bind(null,n),i=function(){a(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function c(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function l(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return o(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],d=u[s.id];d.refs--,r.push(d)}if(t){var c=i(t);o(c,e)}for(var a=0;a<r.length;a++){var d=r[a];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete u[d.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var o=n(89);"string"==typeof o&&(o=[[t.id,o,""]]);n(250)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),r=o(i),a=n(8),s=o(a),d=n(9),c=o(d),l=n(10),u=o(l),f=n(11),m=o(f),p=n(12),h=o(p),v=n(13),b=o(v),g=n(14),_=o(g),y=n(15),E=o(y),C=n(16),A=o(C),x=n(17),T=o(x),M=n(18),O=o(M),R=n(19),N=o(R),w=n(20),k=o(w),S=n(21),$=o(S),P=n(22),L=o(P),H=n(23),j=o(H),F=n(24),D=o(F),I=n(25),B=o(I),z=n(26),U=o(z),W=n(27),V=o(W),Y=n(28),q=o(Y),G=n(29),K=o(G),X=n(30),J=o(X),Z=n(31),Q=o(Z),tt=n(32),et=o(tt),nt={MdCore:r.default,MdAvatar:s.default,MdBackdrop:c.default,MdBottomBar:u.default,MdButton:m.default,MdButtonToggle:h.default,MdCard:b.default,MdCheckbox:_.default,MdDialog:E.default,MdDivider:A.default,MdIcon:T.default,MdInputContainer:O.default,MdLayout:N.default,MdList:k.default,MdMenu:$.default,MdRadio:L.default,MdSelect:j.default,MdSidenav:D.default,MdSpinner:B.default,MdSubheader:U.default,MdSwitch:V.default,MdTable:q.default,MdTabs:K.default,MdToolbar:J.default,MdTooltip:Q.default,MdWhiteframe:et.default};nt.install=function(t){for(var e in nt){var n=nt[e];n&&"install"!==e&&t.use(n)}},window.VueMaterial=nt,e.default=nt,t.exports=e.default}])});

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(99);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(93)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js?sourceMap!./../../sass-loader/index.js?sourceMap!./vue-material.css", function() {
				var newContent = require("!!./../../css-loader/index.js?sourceMap!./../../sass-loader/index.js?sourceMap!./vue-material.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(92)();
	// imports
	
	
	// module
	exports.push([module.id, ".md-avatar {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  margin: auto;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative;\n  border-radius: 40px;\n  vertical-align: middle; }\n\n.md-avatar.md-large {\n  width: 64px;\n  min-width: 64px;\n  height: 64px;\n  min-height: 64px;\n  border-radius: 64px; }\n\n.md-avatar.md-large .md-icon {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  font-size: 40px;\n  line-height: 40px; }\n\n.md-avatar.md-avatar-icon {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.md-avatar.md-avatar-icon .md-icon {\n  color: #fff; }\n\n.md-avatar .md-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.md-avatar img {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.md-avatar .md-ink-ripple {\n  border-radius: 50%; }\n\n.md-avatar .md-ink-ripple .md-ripple.md-active {\n  animation-duration: .9s; }\n\n.md-avatar-tooltip.md-tooltip-top {\n  margin-top: -8px; }\n\n.md-avatar-tooltip.md-tooltip-right {\n  margin-left: 8px; }\n\n.md-avatar-tooltip.md-tooltip-bottom {\n  margin-top: 8px; }\n\n.md-avatar-tooltip.md-tooltip-left {\n  margin-left: -8px; }\n\n.md-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.54);\n  transform: translateZ(0);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n\n.md-backdrop.md-active {\n  opacity: 1;\n  pointer-events: auto; }\n\n.md-backdrop.md-transparent {\n  background: none; }\n\n.md-bottom-bar {\n  width: 100%;\n  min-width: 100%;\n  height: 56px;\n  -ms-flex-pack: center;\n  justify-content: center;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-bottom-bar, .md-bottom-bar-item {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex; }\n\n.md-bottom-bar-item {\n  max-width: 168px;\n  min-width: 80px;\n  height: 100%;\n  padding: 8px 12px 10px;\n  -ms-flex-flow: column nowrap;\n  flex-flow: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex: 1;\n  flex: 1;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  transform: translateZ(0);\n  color: currentColor;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1em;\n  text-decoration: none; }\n\n.md-bottom-bar-item.md-active {\n  padding-top: 6px; }\n\n.md-bottom-bar-item.md-active .md-text {\n  transform: scale(1) translateZ(0); }\n\n.md-bottom-bar-item.md-active .md-icon, .md-bottom-bar-item.md-active .md-text {\n  color: currentColor; }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item {\n  min-width: 56px;\n  max-width: 96px;\n  position: static;\n  -ms-flex: 1 1 32px;\n  flex: 1 1 32px;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: flex,min-width,max-width;\n  transition-property: flex,min-width,max-width,-ms-flex; }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon {\n  transform: translate3d(0, 8px, 0); }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item .md-text {\n  opacity: 0;\n  transform: scale(1) translate3d(0, 6px, 0); }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active {\n  min-width: 96px;\n  max-width: 168px;\n  -ms-flex: 1 1 72px;\n  flex: 1 1 72px; }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon, .md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text {\n  opacity: 1; }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon {\n  transform: scale(1) translateZ(0); }\n\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text {\n  transform: scale(1) translate3d(0, 2px, 0); }\n\n.md-bottom-bar-item .md-text {\n  transform: scale(0.8571) translateY(2px);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.15s linear, opacity 0.15s linear; }\n\n.md-bottom-bar-item .md-icon {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.15s linear; }\n\n.md-button {\n  min-width: 88px;\n  min-height: 36px;\n  margin: 6px 8px;\n  padding: 0 16px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  background: none;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: currentColor;\n  font-family: inherit;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: 500;\n  letter-spacing: inherit;\n  line-height: 36px;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  vertical-align: top;\n  white-space: nowrap; }\n\n.md-button, .md-button:focus {\n  outline: none; }\n\n.md-button::-moz-focus-inner {\n  border: 0; }\n\n.md-button:hover:not([disabled]):not(.md-raised) {\n  background-color: rgba(153, 153, 153, 0.2);\n  text-decoration: none; }\n\n.md-button:hover:not([disabled]).md-raised {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.md-button:active:not([disabled]) {\n  background-color: rgba(153, 153, 153, 0.4); }\n\n.md-button.md-raised:not([disabled]) {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); }\n\n.md-button.md-dense {\n  min-height: 32px;\n  line-height: 32px;\n  font-size: 13px; }\n\n.md-button.md-fab .md-icon, .md-button.md-icon-button .md-icon {\n  margin-top: 1px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.md-button.md-icon-button {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  margin: 0 6px;\n  padding: 8px;\n  border-radius: 50%;\n  line-height: 24px; }\n\n.md-button.md-icon-button:not([disabled]):hover {\n  background: none; }\n\n.md-button.md-icon-button.md-dense {\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  min-height: 32px;\n  padding: 4px;\n  line-height: 32px; }\n\n.md-button.md-icon-button .md-ink-ripple {\n  border-radius: 50%; }\n\n.md-button.md-icon-button .md-ink-ripple .md-ripple {\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important; }\n\n.md-button.md-icon-button .md-ripple.md-active {\n  animation-duration: .9s; }\n\n.md-button.md-fab {\n  width: 56px;\n  height: 56px;\n  min-width: 0;\n  overflow: hidden;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  border-radius: 56px;\n  line-height: 56px;\n  background-clip: padding-box;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-property: background-color,box-shadow,transform; }\n\n.md-button.md-fab:focus, .md-button.md-fab:hover {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12); }\n\n.md-button.md-fab.md-fab-top-left {\n  position: absolute;\n  top: 16px;\n  left: 16px; }\n\n.md-button.md-fab.md-fab-top-center {\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.md-button.md-fab.md-fab-top-right {\n  position: absolute;\n  top: 16px;\n  right: 16px; }\n\n.md-button.md-fab.md-fab-bottom-left {\n  position: absolute;\n  bottom: 16px;\n  left: 16px; }\n\n.md-button.md-fab.md-fab-bottom-center {\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.md-button.md-fab.md-fab-bottom-right {\n  position: absolute;\n  right: 16px;\n  bottom: 16px; }\n\n.md-button.md-fab.md-mini {\n  width: 40px;\n  height: 40px;\n  line-height: 40px; }\n\n.md-button.md-fab .md-ink-ripple {\n  border-radius: 56px; }\n\n.md-button[disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: default; }\n\n.md-button[disabled].md-fab, .md-button[disabled].md-raised {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.md-button[disabled].md-fab {\n  box-shadow: none; }\n\n.md-button:after {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-button .md-ink-ripple {\n  border-radius: 2px;\n  background-clip: padding-box;\n  overflow: hidden; }\n\n.md-button.md-fab .md-icon, .md-button.md-icon-button .md-icon {\n  display: block; }\n\n.md-button-tooltip.md-tooltip-top {\n  margin-top: -8px; }\n\n.md-button-tooltip.md-tooltip-right {\n  margin-left: 8px; }\n\n.md-button-tooltip.md-tooltip-bottom {\n  margin-top: 8px; }\n\n.md-button-tooltip.md-tooltip-left {\n  margin-left: -8px; }\n\n.md-button-toggle {\n  width: auto;\n  display: -ms-flexbox;\n  display: flex; }\n\n.md-button-toggle > .md-button {\n  margin: 0;\n  overflow: hidden;\n  border-width: 1px 0 1px 1px;\n  border-radius: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.md-button-toggle > .md-button:first-child {\n  border-radius: 2px 0 0 2px; }\n\n.md-button-toggle > .md-button:last-child {\n  border-right-width: 1px;\n  border-radius: 0 2px 2px 0; }\n\n.md-button-toggle > .md-button:not([disabled]) {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-button-toggle > .md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised) {\n  background-color: rgba(153, 153, 153, 0.2);\n  text-decoration: none; }\n\n.md-button-toggle > .md-button .md-ink-ripple {\n  border-radius: 2px; }\n\n.md-card {\n  overflow: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); }\n\n.md-card.md-with-hover {\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: box-shadow; }\n\n.md-card.md-with-hover:hover {\n  z-index: 2;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-card .md-card-media {\n  position: relative; }\n\n.md-card .md-card-media.md-16-9 {\n  overflow: hidden; }\n\n.md-card .md-card-media.md-16-9:before {\n  width: 100%;\n  padding-top: 56.25%;\n  display: block;\n  content: \" \"; }\n\n.md-card .md-card-media.md-16-9 img {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%); }\n\n.md-card .md-card-media.md-4-3 {\n  overflow: hidden; }\n\n.md-card .md-card-media.md-4-3:before {\n  width: 100%;\n  padding-top: 75%;\n  display: block;\n  content: \" \"; }\n\n.md-card .md-card-media.md-4-3 img {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%); }\n\n.md-card .md-card-media.md-1-1 {\n  overflow: hidden; }\n\n.md-card .md-card-media.md-1-1:before {\n  width: 100%;\n  padding-top: 100%;\n  display: block;\n  content: \" \"; }\n\n.md-card .md-card-media.md-1-1 img {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%); }\n\n.md-card .md-card-media + .md-card-header {\n  padding-top: 24px; }\n\n.md-card .md-card-media + .md-card-content:last-child {\n  padding-bottom: 16px; }\n\n.md-card .md-card-media img {\n  width: 100%; }\n\n.md-card .md-card-header {\n  padding: 16px; }\n\n.md-card .md-card-header:first-child > .md-card-header-text > .md-title:first-child, .md-card .md-card-header:first-child > .md-title:first-child {\n  margin-top: 8px; }\n\n.md-card .md-card-header:last-child {\n  margin-bottom: 8px; }\n\n.md-card .md-card-header.md-card-header-flex {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.md-card .md-card-header + .md-card-content {\n  padding-top: 0; }\n\n.md-card .md-card-header + .md-card-actions:not(:last-child) {\n  padding: 0 8px; }\n\n.md-card .md-card-header .md-avatar {\n  margin-right: 16px;\n  float: left; }\n\n.md-card .md-card-header .md-avatar ~ .md-title {\n  font-size: 14px; }\n\n.md-card .md-card-header .md-avatar ~ .md-subhead, .md-card .md-card-header .md-avatar ~ .md-title {\n  font-weight: 500;\n  line-height: 20px; }\n\n.md-card .md-card-header .md-button {\n  margin: 0; }\n\n.md-card .md-card-header .md-button:last-child {\n  margin-right: -4px; }\n\n.md-card .md-card-header .md-button + .md-button {\n  margin-left: 8px; }\n\n.md-card .md-card-header .md-card-header-text {\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-card .md-card-header .md-card-media {\n  width: 80px;\n  -ms-flex: 0 0 80px;\n  flex: 0 0 80px;\n  height: 80px;\n  margin-left: 16px; }\n\n.md-card .md-card-header .md-card-media.md-medium {\n  width: 120px;\n  -ms-flex: 0 0 120px;\n  flex: 0 0 120px;\n  height: 120px; }\n\n.md-card .md-card-header .md-card-media.md-big {\n  width: 160px;\n  -ms-flex: 0 0 160px;\n  flex: 0 0 160px;\n  height: 160px; }\n\n.md-card .md-subhead, .md-card .md-subheading, .md-card .md-title {\n  margin: 0;\n  font-weight: 400; }\n\n.md-card .md-subhead {\n  opacity: .54;\n  font-size: 14px;\n  letter-spacing: .01em;\n  line-height: 20px; }\n\n.md-card .md-subhead + .md-title {\n  margin-top: 4px; }\n\n.md-card .md-title {\n  font-size: 24px;\n  letter-spacing: 0;\n  line-height: 32px; }\n\n.md-card .md-card-media-actions {\n  padding: 16px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.md-card .md-card-media-actions .md-card-media {\n  max-width: 240px;\n  max-height: 240px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-card .md-card-media-actions .md-card-actions {\n  margin-left: 16px;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.md-card .md-card-media-actions .md-card-actions .md-button + .md-button {\n  margin: 8px 0 0; }\n\n.md-card .md-card-content {\n  padding: 16px;\n  font-size: 14px;\n  line-height: 22px; }\n\n.md-card .md-card-content:last-child {\n  padding-bottom: 24px; }\n\n.md-card .md-card-actions {\n  padding: 8px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.md-card .md-card-actions .md-button {\n  margin: 0; }\n\n.md-card .md-card-actions .md-button:first-child {\n  margin-left: 0; }\n\n.md-card .md-card-actions .md-button:last-child {\n  margin-right: 0; }\n\n.md-card .md-card-actions .md-button + .md-button {\n  margin-left: 4px; }\n\n.md-card .md-card-area, .md-card > .md-card-area:not(:last-child) {\n  position: relative; }\n\n.md-card > .md-card-area:not(:last-child):after {\n  height: 1px;\n  position: absolute;\n  bottom: 0;\n  content: \" \"; }\n\n.md-card > .md-card-area:not(:last-child):not(.md-inset):after {\n  right: 0;\n  left: 0; }\n\n.md-card > .md-card-area:not(:last-child).md-inset:after {\n  right: 16px;\n  left: 16px; }\n\n.md-card .md-card-media-cover {\n  position: relative;\n  color: #fff; }\n\n.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1; }\n\n.md-card .md-card-media-cover .md-card-area {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2; }\n\n.md-card .md-card-media-cover .md-card-header + .md-card-actions {\n  padding-top: 0; }\n\n.md-card .md-card-media-cover .md-subhead {\n  opacity: 1; }\n\n.md-card .md-card-expand {\n  overflow: hidden; }\n\n.md-card .md-card-expand.md-active [md-expand-trigger] {\n  transform: rotate(180deg) translate3D(0, 0, 0); }\n\n.md-card .md-card-expand.md-active .md-card-content {\n  margin-top: 0 !important;\n  opacity: 1; }\n\n.md-card .md-card-expand .md-card-actions {\n  padding-top: 0;\n  position: relative;\n  z-index: 2; }\n\n.md-card .md-card-expand [md-expand-trigger] {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: transform; }\n\n.md-card .md-card-expand .md-card-content {\n  padding-top: 4px;\n  position: relative;\n  z-index: 1;\n  opacity: 0;\n  transform: translate3D(0, 0, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: margin; }\n\n.md-checkbox {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative; }\n\n.md-checkbox .md-checkbox-container {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  border-radius: 2px;\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-checkbox .md-checkbox-container:focus {\n  outline: none; }\n\n.md-checkbox .md-checkbox-container:before {\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  content: \" \"; }\n\n.md-checkbox .md-checkbox-container:after {\n  width: 6px;\n  height: 13px;\n  position: absolute;\n  top: 0;\n  left: 5px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  opacity: 0;\n  transform: rotate(45deg) scale3D(0.15, 0.15, 1);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  content: \" \"; }\n\n.md-checkbox .md-checkbox-container input {\n  position: absolute;\n  left: -999em; }\n\n.md-checkbox .md-checkbox-container .md-ink-ripple {\n  top: -16px;\n  right: -16px;\n  bottom: -16px;\n  left: -16px;\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple {\n  width: 48px !important;\n  height: 48px !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important; }\n\n.md-checkbox .md-checkbox-label {\n  height: 20px;\n  padding-left: 8px;\n  line-height: 20px; }\n\n.md-checkbox.md-checked .md-checkbox-container:after {\n  opacity: 1;\n  transform: rotate(45deg) scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-ink-ripple {\n  pointer-events: none;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-mask-image: radial-gradient(circle, #fff 100%, #000 0);\n  mask-image: radial-gradient(circle, #fff 100%, #000 0);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n\n.md-ripple {\n  position: absolute;\n  transform: scale(0);\n  background-color: currentColor;\n  opacity: .26;\n  border-radius: 50%; }\n\n.md-ripple.md-active {\n  animation: ripple 1s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@keyframes ripple {\n  to {\n    transform: scale(1.5);\n    opacity: 0; } }\n\n.md-dialog-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 108; }\n\n.md-dialog-container.md-active {\n  pointer-events: auto; }\n\n.md-dialog-container.md-active .md-dialog {\n  opacity: 1 !important;\n  transform: scale(1) !important;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: opacity,transform; }\n\n.md-dialog-backdrop {\n  position: fixed;\n  z-index: 109; }\n\n.md-dialog {\n  min-width: 280px;\n  max-width: 80%;\n  max-height: 80%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  overflow: hidden;\n  position: relative;\n  z-index: 110;\n  outline: none;\n  border-radius: 2px;\n  opacity: 0;\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n  transform: scale(0.9, 0.85);\n  transform-origin: center center;\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) 0.05s;\n  will-change: opacity,transform; }\n\n.md-dialog.md-reference {\n  transform-origin: top center; }\n\n.md-dialog.md-transition-off {\n  transition: none !important; }\n\n.md-dialog p {\n  margin: 0; }\n\n.md-dialog-title {\n  margin-bottom: 20px;\n  padding: 24px 24px 0; }\n\n.md-dialog-content {\n  padding: 0 24px 24px;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: auto;\n  position: relative;\n  background: linear-gradient(180deg, #fff 0, #fff 1px, transparent 0), linear-gradient(0deg, #fff 0, #fff 3px, transparent 0), linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0, rgba(0, 0, 0, 0.12) 1px, transparent 0), linear-gradient(0deg, rgba(0, 0, 0, 0.2) 1px, rgba(0, 0, 0, 0.2) 2px, transparent 0);\n  background-attachment: local,local,scroll,scroll; }\n\n.md-dialog-content:first-child {\n  padding-top: 24px; }\n\n.md-dialog-content p:first-child:not(:only-child) {\n  margin-top: 0; }\n\n.md-dialog-content p:last-child:not(:only-child) {\n  margin-bottom: 0; }\n\n.md-dialog-body {\n  margin: 0 -24px;\n  padding: 0 24px;\n  overflow: auto; }\n\n.md-dialog-actions {\n  min-height: 52px;\n  padding: 8px 8px 8px 24px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  position: relative; }\n\n.md-dialog-actions:before {\n  height: 1px;\n  position: absolute;\n  top: -1px;\n  right: 0;\n  left: 0;\n  background-color: #fff;\n  content: \" \"; }\n\n.md-dialog-actions .md-button {\n  min-width: 64px;\n  margin: 0;\n  padding: 0 8px; }\n\n.md-dialog-actions .md-button + .md-button {\n  margin-left: 8px; }\n\n.md-divider {\n  height: 1px;\n  margin: 0;\n  padding: 0;\n  display: block;\n  border: 0;\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.md-divider.md-inset {\n  margin-left: 72px; }\n\n.md-icon {\n  width: 24px;\n  min-width: 24px;\n  height: 24px;\n  min-height: 24px;\n  margin: auto;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  fill: currentColor;\n  vertical-align: middle; }\n\n.md-input-container {\n  min-height: 48px;\n  margin: 4px 0 24px;\n  padding-top: 16px;\n  position: relative; }\n\n.md-input-container:after {\n  height: 1px;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.12);\n  content: \" \"; }\n\n.md-input-container:after, .md-input-container label {\n  position: absolute;\n  left: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-input-container label {\n  top: 23px;\n  pointer-events: none;\n  transition-duration: .3s;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px; }\n\n.md-input-container input, .md-input-container textarea {\n  width: 100%;\n  height: 32px;\n  padding: 0;\n  display: block;\n  border: none;\n  background: none;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: font-size;\n  color: rgba(0, 0, 0, 0.54);\n  font-family: inherit;\n  font-size: 1px;\n  line-height: 32px; }\n\n.md-input-container input:focus, .md-input-container textarea:focus {\n  outline: none; }\n\n.md-input-container input::-webkit-input-placeholder, .md-input-container textarea::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  text-shadow: none;\n  -webkit-text-fill-color: initial; }\n\n.md-input-container textarea {\n  min-height: 32px;\n  max-height: 230px;\n  padding: 5px 0;\n  resize: none;\n  line-height: 1.3em; }\n\n.md-input-container .md-error {\n  height: 20px;\n  display: block !important;\n  position: absolute;\n  opacity: 0;\n  transform: translate3d(0, -8px, 0);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  font-size: 12px; }\n\n.md-input-container .md-count {\n  height: 20px;\n  position: absolute;\n  right: 0;\n  font-size: 12px; }\n\n.md-input-container.md-input-placeholder label {\n  pointer-events: auto;\n  top: 10px;\n  opacity: 0;\n  font-size: 12px; }\n\n.md-input-container.md-input-placeholder input, .md-input-container.md-input-placeholder textarea {\n  font-size: 16px; }\n\n.md-input-container.md-has-value label, .md-input-container.md-input-focused label {\n  pointer-events: auto;\n  top: 0;\n  opacity: 1;\n  font-size: 12px; }\n\n.md-input-container.md-has-value input, .md-input-container.md-has-value textarea, .md-input-container.md-input-focused input, .md-input-container.md-input-focused textarea {\n  font-size: 16px; }\n\n.md-input-container.md-has-value input, .md-input-container.md-has-value textarea {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-input-container.md-input-inline label {\n  pointer-events: none; }\n\n.md-input-container.md-input-inline.md-input-focused label {\n  top: 23px;\n  font-size: 16px; }\n\n.md-input-container.md-input-inline.md-has-value label {\n  opacity: 0; }\n\n.md-input-container.md-input-disabled:after {\n  background: 0 100% repeat-x;\n  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.38) 33%, transparent 0);\n  background-size: 4px 1px; }\n\n.md-input-container.md-input-disabled input, .md-input-container.md-input-disabled label, .md-input-container.md-input-disabled textarea {\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-input-container.md-has-password.md-input-focused .md-toggle-password {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-input-container.md-has-password .md-toggle-password {\n  margin: 0;\n  position: absolute;\n  right: 0;\n  bottom: -2px;\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-input-container.md-has-password .md-toggle-password .md-ink-ripple {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-input-container.md-input-invalid .md-error {\n  opacity: 1;\n  transform: translateZ(0); }\n\n.md-input-container.md-input-required label:after {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  transform: translateX(calc(100% + 2px));\n  content: \"*\";\n  font-size: 12px;\n  line-height: 1em;\n  vertical-align: top; }\n\n.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-layout {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-row {\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n.md-column {\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.md-layout.md-container {\n  width: 100%;\n  max-width: 1200px; }\n\n.md-layout.md-container.md-centered {\n  margin: 0 auto; }\n\n.md-gutter:not(.md-column) {\n  margin-right: -12px;\n  margin-left: -12px; }\n\n.md-gutter:not(.md-column) > .md-layout {\n  padding-right: 12px;\n  padding-left: 12px; }\n\n.md-gutter .md-column {\n  margin-top: -12px;\n  margin-bottom: -12px; }\n\n.md-gutter .md-column > .md-layout {\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n@media (max-width: 944px) {\n  .md-gutter:not(.md-column) {\n    margin-right: -8px;\n    margin-left: -8px; }\n  .md-gutter:not(.md-column) > .md-layout {\n    padding-right: 8px;\n    padding-left: 8px; }\n  .md-gutter .md-column {\n    margin-top: -8px;\n    margin-bottom: -8px; }\n  .md-gutter .md-column > .md-layout {\n    padding-top: 8px;\n    padding-bottom: 8px; } }\n\n.md-gutter-8:not(.md-column) {\n  margin-right: -4px;\n  margin-left: -4px; }\n\n.md-gutter-8:not(.md-column) > .md-layout {\n  padding-right: 4px;\n  padding-left: 4px; }\n\n.md-gutter-8 .md-column {\n  margin-top: -4px;\n  margin-bottom: -4px; }\n\n.md-gutter-8 .md-column > .md-layout {\n  padding-top: 4px;\n  padding-bottom: 4px; }\n\n.md-gutter-16:not(.md-column) {\n  margin-right: -8px;\n  margin-left: -8px; }\n\n.md-gutter-16:not(.md-column) > .md-layout {\n  padding-right: 8px;\n  padding-left: 8px; }\n\n.md-gutter-16 .md-column {\n  margin-top: -8px;\n  margin-bottom: -8px; }\n\n.md-gutter-16 .md-column > .md-layout {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.md-gutter-24:not(.md-column) {\n  margin-right: -12px;\n  margin-left: -12px; }\n\n.md-gutter-24:not(.md-column) > .md-layout {\n  padding-right: 12px;\n  padding-left: 12px; }\n\n.md-gutter-24 .md-column {\n  margin-top: -12px;\n  margin-bottom: -12px; }\n\n.md-gutter-24 .md-column > .md-layout {\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n.md-gutter-40:not(.md-column) {\n  margin-right: -20px;\n  margin-left: -20px; }\n\n.md-gutter-40:not(.md-column) > .md-layout {\n  padding-right: 20px;\n  padding-left: 20px; }\n\n.md-gutter-40 .md-column {\n  margin-top: -20px;\n  margin-bottom: -20px; }\n\n.md-gutter-40 .md-column > .md-layout {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.md-flex {\n  -ms-flex: 1 1;\n  flex: 1 1; }\n\n.md-flex-33 {\n  min-width: 33.33333%;\n  -ms-flex: 0 1 33.33333%;\n  flex: 0 1 33.33333%; }\n\n.md-flex-66 {\n  min-width: 33.33333%;\n  -ms-flex: 0 1 66.66666%;\n  flex: 0 1 66.66666%; }\n\n.md-flex-offset-33 {\n  margin-left: 33.33333%; }\n\n.md-flex-offset-66 {\n  margin-left: 66.66666%; }\n\n.md-flex-5 {\n  min-width: 5%;\n  -ms-flex: 0 1 5%;\n  flex: 0 1 5%; }\n\n.md-flex-offset-5 {\n  margin-left: 5%; }\n\n.md-flex-10 {\n  min-width: 10%;\n  -ms-flex: 0 1 10%;\n  flex: 0 1 10%; }\n\n.md-flex-offset-10 {\n  margin-left: 10%; }\n\n.md-flex-15 {\n  min-width: 15%;\n  -ms-flex: 0 1 15%;\n  flex: 0 1 15%; }\n\n.md-flex-offset-15 {\n  margin-left: 15%; }\n\n.md-flex-20 {\n  min-width: 20%;\n  -ms-flex: 0 1 20%;\n  flex: 0 1 20%; }\n\n.md-flex-offset-20 {\n  margin-left: 20%; }\n\n.md-flex-25 {\n  min-width: 25%;\n  -ms-flex: 0 1 25%;\n  flex: 0 1 25%; }\n\n.md-flex-offset-25 {\n  margin-left: 25%; }\n\n.md-flex-30 {\n  min-width: 30%;\n  -ms-flex: 0 1 30%;\n  flex: 0 1 30%; }\n\n.md-flex-offset-30 {\n  margin-left: 30%; }\n\n.md-flex-35 {\n  min-width: 35%;\n  -ms-flex: 0 1 35%;\n  flex: 0 1 35%; }\n\n.md-flex-offset-35 {\n  margin-left: 35%; }\n\n.md-flex-40 {\n  min-width: 40%;\n  -ms-flex: 0 1 40%;\n  flex: 0 1 40%; }\n\n.md-flex-offset-40 {\n  margin-left: 40%; }\n\n.md-flex-45 {\n  min-width: 45%;\n  -ms-flex: 0 1 45%;\n  flex: 0 1 45%; }\n\n.md-flex-offset-45 {\n  margin-left: 45%; }\n\n.md-flex-50 {\n  min-width: 50%;\n  -ms-flex: 0 1 50%;\n  flex: 0 1 50%; }\n\n.md-flex-offset-50 {\n  margin-left: 50%; }\n\n.md-flex-55 {\n  min-width: 55%;\n  -ms-flex: 0 1 55%;\n  flex: 0 1 55%; }\n\n.md-flex-offset-55 {\n  margin-left: 55%; }\n\n.md-flex-60 {\n  min-width: 60%;\n  -ms-flex: 0 1 60%;\n  flex: 0 1 60%; }\n\n.md-flex-offset-60 {\n  margin-left: 60%; }\n\n.md-flex-65 {\n  min-width: 65%;\n  -ms-flex: 0 1 65%;\n  flex: 0 1 65%; }\n\n.md-flex-offset-65 {\n  margin-left: 65%; }\n\n.md-flex-70 {\n  min-width: 70%;\n  -ms-flex: 0 1 70%;\n  flex: 0 1 70%; }\n\n.md-flex-offset-70 {\n  margin-left: 70%; }\n\n.md-flex-75 {\n  min-width: 75%;\n  -ms-flex: 0 1 75%;\n  flex: 0 1 75%; }\n\n.md-flex-offset-75 {\n  margin-left: 75%; }\n\n.md-flex-80 {\n  min-width: 80%;\n  -ms-flex: 0 1 80%;\n  flex: 0 1 80%; }\n\n.md-flex-offset-80 {\n  margin-left: 80%; }\n\n.md-flex-85 {\n  min-width: 85%;\n  -ms-flex: 0 1 85%;\n  flex: 0 1 85%; }\n\n.md-flex-offset-85 {\n  margin-left: 85%; }\n\n.md-flex-90 {\n  min-width: 90%;\n  -ms-flex: 0 1 90%;\n  flex: 0 1 90%; }\n\n.md-flex-offset-90 {\n  margin-left: 90%; }\n\n.md-flex-95 {\n  min-width: 95%;\n  -ms-flex: 0 1 95%;\n  flex: 0 1 95%; }\n\n.md-flex-offset-95 {\n  margin-left: 95%; }\n\n.md-flex-100 {\n  min-width: 100%;\n  -ms-flex: 0 1 100%;\n  flex: 0 1 100%; }\n\n.md-flex-offset-100 {\n  margin-left: 100%; }\n\n@media (min-width: 1904px) {\n  .md-row-xlarge {\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  .md-column-xlarge {\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .md-flex-xlarge {\n    -ms-flex: 1 1;\n    flex: 1 1; }\n  .md-flex-xlarge-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n    flex: 0 1 33.33333%; }\n  .md-flex-xlarge-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n    flex: 0 1 66.66666%; }\n  .md-flex-offset-xlarge-33 {\n    margin-left: 33.33333%; }\n  .md-flex-offset-xlarge-66 {\n    margin-left: 66.66666%; }\n  .md-flex-xlarge-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n    flex: 0 1 5%; }\n  .md-flex-offset-xlarge-5 {\n    margin-left: 5%; }\n  .md-flex-xlarge-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n    flex: 0 1 10%; }\n  .md-flex-offset-xlarge-10 {\n    margin-left: 10%; }\n  .md-flex-xlarge-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n    flex: 0 1 15%; }\n  .md-flex-offset-xlarge-15 {\n    margin-left: 15%; }\n  .md-flex-xlarge-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n    flex: 0 1 20%; }\n  .md-flex-offset-xlarge-20 {\n    margin-left: 20%; }\n  .md-flex-xlarge-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n    flex: 0 1 25%; }\n  .md-flex-offset-xlarge-25 {\n    margin-left: 25%; }\n  .md-flex-xlarge-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n    flex: 0 1 30%; }\n  .md-flex-offset-xlarge-30 {\n    margin-left: 30%; }\n  .md-flex-xlarge-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n    flex: 0 1 35%; }\n  .md-flex-offset-xlarge-35 {\n    margin-left: 35%; }\n  .md-flex-xlarge-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n    flex: 0 1 40%; }\n  .md-flex-offset-xlarge-40 {\n    margin-left: 40%; }\n  .md-flex-xlarge-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n    flex: 0 1 45%; }\n  .md-flex-offset-xlarge-45 {\n    margin-left: 45%; }\n  .md-flex-xlarge-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%; }\n  .md-flex-offset-xlarge-50 {\n    margin-left: 50%; }\n  .md-flex-xlarge-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n    flex: 0 1 55%; }\n  .md-flex-offset-xlarge-55 {\n    margin-left: 55%; }\n  .md-flex-xlarge-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n    flex: 0 1 60%; }\n  .md-flex-offset-xlarge-60 {\n    margin-left: 60%; }\n  .md-flex-xlarge-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n    flex: 0 1 65%; }\n  .md-flex-offset-xlarge-65 {\n    margin-left: 65%; }\n  .md-flex-xlarge-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n    flex: 0 1 70%; }\n  .md-flex-offset-xlarge-70 {\n    margin-left: 70%; }\n  .md-flex-xlarge-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n    flex: 0 1 75%; }\n  .md-flex-offset-xlarge-75 {\n    margin-left: 75%; }\n  .md-flex-xlarge-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n    flex: 0 1 80%; }\n  .md-flex-offset-xlarge-80 {\n    margin-left: 80%; }\n  .md-flex-xlarge-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n    flex: 0 1 85%; }\n  .md-flex-offset-xlarge-85 {\n    margin-left: 85%; }\n  .md-flex-xlarge-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n    flex: 0 1 90%; }\n  .md-flex-offset-xlarge-90 {\n    margin-left: 90%; }\n  .md-flex-xlarge-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n    flex: 0 1 95%; }\n  .md-flex-offset-xlarge-95 {\n    margin-left: 95%; }\n  .md-flex-xlarge-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n    flex: 0 1 100%; }\n  .md-flex-offset-xlarge-100 {\n    margin-left: 100%; }\n  .md-hide-xlarge {\n    display: none; } }\n\n@media (max-width: 1903px) {\n  .md-row-large {\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  .md-column-large {\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .md-flex-large {\n    -ms-flex: 1 1;\n    flex: 1 1; }\n  .md-flex-large-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n    flex: 0 1 33.33333%; }\n  .md-flex-large-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n    flex: 0 1 66.66666%; }\n  .md-flex-offset-large-33 {\n    margin-left: 33.33333%; }\n  .md-flex-offset-large-66 {\n    margin-left: 66.66666%; }\n  .md-flex-large-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n    flex: 0 1 5%; }\n  .md-flex-offset-large-5 {\n    margin-left: 5%; }\n  .md-flex-large-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n    flex: 0 1 10%; }\n  .md-flex-offset-large-10 {\n    margin-left: 10%; }\n  .md-flex-large-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n    flex: 0 1 15%; }\n  .md-flex-offset-large-15 {\n    margin-left: 15%; }\n  .md-flex-large-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n    flex: 0 1 20%; }\n  .md-flex-offset-large-20 {\n    margin-left: 20%; }\n  .md-flex-large-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n    flex: 0 1 25%; }\n  .md-flex-offset-large-25 {\n    margin-left: 25%; }\n  .md-flex-large-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n    flex: 0 1 30%; }\n  .md-flex-offset-large-30 {\n    margin-left: 30%; }\n  .md-flex-large-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n    flex: 0 1 35%; }\n  .md-flex-offset-large-35 {\n    margin-left: 35%; }\n  .md-flex-large-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n    flex: 0 1 40%; }\n  .md-flex-offset-large-40 {\n    margin-left: 40%; }\n  .md-flex-large-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n    flex: 0 1 45%; }\n  .md-flex-offset-large-45 {\n    margin-left: 45%; }\n  .md-flex-large-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%; }\n  .md-flex-offset-large-50 {\n    margin-left: 50%; }\n  .md-flex-large-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n    flex: 0 1 55%; }\n  .md-flex-offset-large-55 {\n    margin-left: 55%; }\n  .md-flex-large-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n    flex: 0 1 60%; }\n  .md-flex-offset-large-60 {\n    margin-left: 60%; }\n  .md-flex-large-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n    flex: 0 1 65%; }\n  .md-flex-offset-large-65 {\n    margin-left: 65%; }\n  .md-flex-large-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n    flex: 0 1 70%; }\n  .md-flex-offset-large-70 {\n    margin-left: 70%; }\n  .md-flex-large-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n    flex: 0 1 75%; }\n  .md-flex-offset-large-75 {\n    margin-left: 75%; }\n  .md-flex-large-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n    flex: 0 1 80%; }\n  .md-flex-offset-large-80 {\n    margin-left: 80%; }\n  .md-flex-large-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n    flex: 0 1 85%; }\n  .md-flex-offset-large-85 {\n    margin-left: 85%; }\n  .md-flex-large-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n    flex: 0 1 90%; }\n  .md-flex-offset-large-90 {\n    margin-left: 90%; }\n  .md-flex-large-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n    flex: 0 1 95%; }\n  .md-flex-offset-large-95 {\n    margin-left: 95%; }\n  .md-flex-large-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n    flex: 0 1 100%; }\n  .md-flex-offset-large-100 {\n    margin-left: 100%; }\n  .md-hide-large {\n    display: none; } }\n\n@media (max-width: 1264px) {\n  .md-row-medium {\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  .md-column-medium {\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .md-flex-medium {\n    -ms-flex: 1 1;\n    flex: 1 1; }\n  .md-flex-medium-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n    flex: 0 1 33.33333%; }\n  .md-flex-medium-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n    flex: 0 1 66.66666%; }\n  .md-flex-offset-medium-33 {\n    margin-left: 33.33333%; }\n  .md-flex-offset-medium-66 {\n    margin-left: 66.66666%; }\n  .md-flex-medium-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n    flex: 0 1 5%; }\n  .md-flex-offset-medium-5 {\n    margin-left: 5%; }\n  .md-flex-medium-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n    flex: 0 1 10%; }\n  .md-flex-offset-medium-10 {\n    margin-left: 10%; }\n  .md-flex-medium-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n    flex: 0 1 15%; }\n  .md-flex-offset-medium-15 {\n    margin-left: 15%; }\n  .md-flex-medium-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n    flex: 0 1 20%; }\n  .md-flex-offset-medium-20 {\n    margin-left: 20%; }\n  .md-flex-medium-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n    flex: 0 1 25%; }\n  .md-flex-offset-medium-25 {\n    margin-left: 25%; }\n  .md-flex-medium-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n    flex: 0 1 30%; }\n  .md-flex-offset-medium-30 {\n    margin-left: 30%; }\n  .md-flex-medium-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n    flex: 0 1 35%; }\n  .md-flex-offset-medium-35 {\n    margin-left: 35%; }\n  .md-flex-medium-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n    flex: 0 1 40%; }\n  .md-flex-offset-medium-40 {\n    margin-left: 40%; }\n  .md-flex-medium-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n    flex: 0 1 45%; }\n  .md-flex-offset-medium-45 {\n    margin-left: 45%; }\n  .md-flex-medium-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%; }\n  .md-flex-offset-medium-50 {\n    margin-left: 50%; }\n  .md-flex-medium-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n    flex: 0 1 55%; }\n  .md-flex-offset-medium-55 {\n    margin-left: 55%; }\n  .md-flex-medium-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n    flex: 0 1 60%; }\n  .md-flex-offset-medium-60 {\n    margin-left: 60%; }\n  .md-flex-medium-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n    flex: 0 1 65%; }\n  .md-flex-offset-medium-65 {\n    margin-left: 65%; }\n  .md-flex-medium-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n    flex: 0 1 70%; }\n  .md-flex-offset-medium-70 {\n    margin-left: 70%; }\n  .md-flex-medium-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n    flex: 0 1 75%; }\n  .md-flex-offset-medium-75 {\n    margin-left: 75%; }\n  .md-flex-medium-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n    flex: 0 1 80%; }\n  .md-flex-offset-medium-80 {\n    margin-left: 80%; }\n  .md-flex-medium-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n    flex: 0 1 85%; }\n  .md-flex-offset-medium-85 {\n    margin-left: 85%; }\n  .md-flex-medium-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n    flex: 0 1 90%; }\n  .md-flex-offset-medium-90 {\n    margin-left: 90%; }\n  .md-flex-medium-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n    flex: 0 1 95%; }\n  .md-flex-offset-medium-95 {\n    margin-left: 95%; }\n  .md-flex-medium-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n    flex: 0 1 100%; }\n  .md-flex-offset-medium-100 {\n    margin-left: 100%; }\n  .md-hide-medium {\n    display: none; } }\n\n@media (max-width: 944px) {\n  .md-row-small {\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  .md-column-small {\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .md-flex-small {\n    -ms-flex: 1 1;\n    flex: 1 1; }\n  .md-flex-small-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n    flex: 0 1 33.33333%; }\n  .md-flex-small-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n    flex: 0 1 66.66666%; }\n  .md-flex-offset-small-33 {\n    margin-left: 33.33333%; }\n  .md-flex-offset-small-66 {\n    margin-left: 66.66666%; }\n  .md-flex-small-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n    flex: 0 1 5%; }\n  .md-flex-offset-small-5 {\n    margin-left: 5%; }\n  .md-flex-small-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n    flex: 0 1 10%; }\n  .md-flex-offset-small-10 {\n    margin-left: 10%; }\n  .md-flex-small-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n    flex: 0 1 15%; }\n  .md-flex-offset-small-15 {\n    margin-left: 15%; }\n  .md-flex-small-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n    flex: 0 1 20%; }\n  .md-flex-offset-small-20 {\n    margin-left: 20%; }\n  .md-flex-small-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n    flex: 0 1 25%; }\n  .md-flex-offset-small-25 {\n    margin-left: 25%; }\n  .md-flex-small-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n    flex: 0 1 30%; }\n  .md-flex-offset-small-30 {\n    margin-left: 30%; }\n  .md-flex-small-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n    flex: 0 1 35%; }\n  .md-flex-offset-small-35 {\n    margin-left: 35%; }\n  .md-flex-small-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n    flex: 0 1 40%; }\n  .md-flex-offset-small-40 {\n    margin-left: 40%; }\n  .md-flex-small-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n    flex: 0 1 45%; }\n  .md-flex-offset-small-45 {\n    margin-left: 45%; }\n  .md-flex-small-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%; }\n  .md-flex-offset-small-50 {\n    margin-left: 50%; }\n  .md-flex-small-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n    flex: 0 1 55%; }\n  .md-flex-offset-small-55 {\n    margin-left: 55%; }\n  .md-flex-small-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n    flex: 0 1 60%; }\n  .md-flex-offset-small-60 {\n    margin-left: 60%; }\n  .md-flex-small-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n    flex: 0 1 65%; }\n  .md-flex-offset-small-65 {\n    margin-left: 65%; }\n  .md-flex-small-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n    flex: 0 1 70%; }\n  .md-flex-offset-small-70 {\n    margin-left: 70%; }\n  .md-flex-small-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n    flex: 0 1 75%; }\n  .md-flex-offset-small-75 {\n    margin-left: 75%; }\n  .md-flex-small-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n    flex: 0 1 80%; }\n  .md-flex-offset-small-80 {\n    margin-left: 80%; }\n  .md-flex-small-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n    flex: 0 1 85%; }\n  .md-flex-offset-small-85 {\n    margin-left: 85%; }\n  .md-flex-small-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n    flex: 0 1 90%; }\n  .md-flex-offset-small-90 {\n    margin-left: 90%; }\n  .md-flex-small-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n    flex: 0 1 95%; }\n  .md-flex-offset-small-95 {\n    margin-left: 95%; }\n  .md-flex-small-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n    flex: 0 1 100%; }\n  .md-flex-offset-small-100 {\n    margin-left: 100%; }\n  .md-hide-small {\n    display: none; } }\n\n@media (max-width: 600px) {\n  .md-row-xsmall {\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  .md-column-xsmall {\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .md-flex-xsmall {\n    -ms-flex: 1 1;\n    flex: 1 1; }\n  .md-flex-xsmall-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n    flex: 0 1 33.33333%; }\n  .md-flex-xsmall-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n    flex: 0 1 66.66666%; }\n  .md-flex-offset-xsmall-33 {\n    margin-left: 33.33333%; }\n  .md-flex-offset-xsmall-66 {\n    margin-left: 66.66666%; }\n  .md-flex-xsmall-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n    flex: 0 1 5%; }\n  .md-flex-offset-xsmall-5 {\n    margin-left: 5%; }\n  .md-flex-xsmall-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n    flex: 0 1 10%; }\n  .md-flex-offset-xsmall-10 {\n    margin-left: 10%; }\n  .md-flex-xsmall-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n    flex: 0 1 15%; }\n  .md-flex-offset-xsmall-15 {\n    margin-left: 15%; }\n  .md-flex-xsmall-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n    flex: 0 1 20%; }\n  .md-flex-offset-xsmall-20 {\n    margin-left: 20%; }\n  .md-flex-xsmall-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n    flex: 0 1 25%; }\n  .md-flex-offset-xsmall-25 {\n    margin-left: 25%; }\n  .md-flex-xsmall-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n    flex: 0 1 30%; }\n  .md-flex-offset-xsmall-30 {\n    margin-left: 30%; }\n  .md-flex-xsmall-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n    flex: 0 1 35%; }\n  .md-flex-offset-xsmall-35 {\n    margin-left: 35%; }\n  .md-flex-xsmall-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n    flex: 0 1 40%; }\n  .md-flex-offset-xsmall-40 {\n    margin-left: 40%; }\n  .md-flex-xsmall-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n    flex: 0 1 45%; }\n  .md-flex-offset-xsmall-45 {\n    margin-left: 45%; }\n  .md-flex-xsmall-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%; }\n  .md-flex-offset-xsmall-50 {\n    margin-left: 50%; }\n  .md-flex-xsmall-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n    flex: 0 1 55%; }\n  .md-flex-offset-xsmall-55 {\n    margin-left: 55%; }\n  .md-flex-xsmall-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n    flex: 0 1 60%; }\n  .md-flex-offset-xsmall-60 {\n    margin-left: 60%; }\n  .md-flex-xsmall-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n    flex: 0 1 65%; }\n  .md-flex-offset-xsmall-65 {\n    margin-left: 65%; }\n  .md-flex-xsmall-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n    flex: 0 1 70%; }\n  .md-flex-offset-xsmall-70 {\n    margin-left: 70%; }\n  .md-flex-xsmall-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n    flex: 0 1 75%; }\n  .md-flex-offset-xsmall-75 {\n    margin-left: 75%; }\n  .md-flex-xsmall-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n    flex: 0 1 80%; }\n  .md-flex-offset-xsmall-80 {\n    margin-left: 80%; }\n  .md-flex-xsmall-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n    flex: 0 1 85%; }\n  .md-flex-offset-xsmall-85 {\n    margin-left: 85%; }\n  .md-flex-xsmall-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n    flex: 0 1 90%; }\n  .md-flex-offset-xsmall-90 {\n    margin-left: 90%; }\n  .md-flex-xsmall-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n    flex: 0 1 95%; }\n  .md-flex-offset-xsmall-95 {\n    margin-left: 95%; }\n  .md-flex-xsmall-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n    flex: 0 1 100%; }\n  .md-flex-offset-xsmall-100 {\n    margin-left: 100%; }\n  .md-hide-xsmall {\n    display: none; } }\n\n.md-list {\n  margin: 0;\n  padding: 8px 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n  flex-flow: column;\n  position: relative;\n  list-style: none; }\n\n.md-list.md-dense {\n  padding: 4px 0; }\n\n.md-list.md-dense .md-list-item.md-inset .md-list-item-container {\n  padding-left: 72px; }\n\n.md-list.md-dense .md-list-item .md-list-item-container {\n  min-height: 40px;\n  font-size: 13px; }\n\n.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child {\n  margin-right: 24px; }\n\n.md-list.md-dense .md-avatar {\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  min-height: 32px; }\n\n.md-list.md-dense .md-list-item-expand {\n  min-height: 40px; }\n\n.md-list.md-double-line.md-dense .md-list-item .md-list-item-container {\n  min-height: 60px; }\n\n.md-list.md-double-line.md-dense .md-list-item .md-avatar {\n  width: 36px;\n  min-width: 36px;\n  height: 36px;\n  min-height: 36px; }\n\n.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child {\n  margin-right: 20px; }\n\n.md-list.md-double-line.md-dense .md-list-text-container > :nth-child(1), .md-list.md-double-line.md-dense .md-list-text-container > :nth-child(2) {\n  font-size: 13px; }\n\n.md-list.md-double-line .md-list-item .md-list-item-container {\n  min-height: 72px; }\n\n.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container {\n  min-height: 76px; }\n\n.md-list.md-triple-line.md-dense .md-list-item .md-avatar {\n  width: 36px;\n  min-width: 36px;\n  height: 36px;\n  min-height: 36px; }\n\n.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child {\n  margin-right: 20px; }\n\n.md-list.md-triple-line.md-dense .md-list-text-container > :nth-child(1), .md-list.md-triple-line.md-dense .md-list-text-container > :nth-child(2) {\n  font-size: 13px; }\n\n.md-list.md-triple-line .md-list-item .md-list-item-container {\n  min-height: 88px; }\n\n.md-list.md-triple-line .md-avatar {\n  margin: 0; }\n\n.md-list.md-triple-line .md-list-item-container {\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.md-list .md-subheader.md-inset {\n  padding-left: 72px; }\n\n.md-list > .md-subheader:first-of-type {\n  margin-top: -8px; }\n\n.md-list-item {\n  height: auto;\n  position: relative; }\n\n.md-list-item.md-inset .md-list-item-container {\n  padding-left: 72px; }\n\n.md-list-item .md-list-item-holder {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-list-item .md-list-item-holder > .md-ink-ripple {\n  border-radius: 0; }\n\n.md-list-item .md-list-item-holder > .md-icon:first-child {\n  margin-right: 32px; }\n\n.md-list-item .md-list-item-holder .md-avatar:first-child {\n  margin-right: 16px; }\n\n.md-list-item .md-list-item-holder .md-list-action {\n  margin: 0 -2px 0 0; }\n\n.md-list-item .md-list-item-holder .md-list-action:nth-child(3) {\n  margin: 0 -2px 0 16px; }\n\n.md-list-item .md-list-item-container {\n  width: 100%;\n  min-height: 48px;\n  margin: 0;\n  padding: 0 16px;\n  position: relative;\n  border-radius: 0;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: left;\n  text-transform: none; }\n\n.md-list-item .md-divider {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n\n.md-list-item .md-avatar, .md-list-item .md-icon {\n  margin: 0; }\n\n.md-list-item .md-avatar:first-of-type + *, .md-list-item .md-icon:first-of-type + * {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto; }\n\n.md-list-item .md-avatar {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n\n.md-list-item .md-icon {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-list-item-expand {\n  min-height: 48px;\n  -ms-flex-flow: column wrap;\n  flex-flow: column wrap;\n  overflow: hidden; }\n\n.md-list-item-expand:after, .md-list-item-expand:before {\n  height: 1px;\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 3;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  content: \" \"; }\n\n.md-list-item-expand:before {\n  top: 0; }\n\n.md-list-item-expand:after {\n  bottom: 0; }\n\n.md-list-item-expand.md-active {\n  position: relative; }\n\n.md-list-item-expand.md-active:after, .md-list-item-expand.md-active:before {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.md-list-item-expand.md-active:first-of-type:before, .md-list-item-expand.md-active:last-of-type:after {\n  background: none; }\n\n.md-list-item-expand.md-active > .md-list-item-container .md-list-expand-indicator {\n  transform: rotate(180deg) translate3D(0, 0, 0); }\n\n.md-list-item-expand.md-active > .md-list-expand {\n  margin-bottom: 0 !important; }\n\n.md-list-item-expand > .md-list-item-container > .md-list-item-holder {\n  position: relative;\n  z-index: 2; }\n\n.md-list-item-expand .md-expansion-indicator, .md-list-item-expand .md-icon, .md-list-item-expand .md-list-item-container {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-list-item-expand .md-list-expand {\n  position: relative;\n  z-index: 1;\n  transform: translate3D(0, 0, 0);\n  will-change: margin-bottom;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n\n.md-list-item-expand .md-list-expand.md-transition-off {\n  transition: none; }\n\n.md-list-item-expand .md-list-expand .md-list {\n  padding: 0; }\n\n.md-list-text-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n  flex-flow: column;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: hidden;\n  line-height: 1.25em;\n  text-overflow: ellipsis;\n  white-space: normal; }\n\n.md-list-text-container > :nth-child(1) {\n  font-size: 16px; }\n\n.md-list-text-container > :nth-child(2), .md-list-text-container > :nth-child(3) {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px; }\n\n.md-list-text-container > :nth-child(2):not(:last-child) {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-menu {\n  display: inline-block; }\n\n.md-menu-content {\n  width: 168px;\n  min-width: 84px;\n  max-width: 392px;\n  min-height: 64px;\n  max-height: calc(100vh - 32px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  z-index: 120;\n  transform: scale(0.9, 0.85) translateZ(0);\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  opacity: 0;\n  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.25s cubic-bezier(0.55, 0, 0.55, 0.2), margin 0.2s cubic-bezier(0.55, 0, 0.55, 0.2), transform 0s cubic-bezier(0.55, 0, 0.55, 0.2) 0.25s;\n  will-change: transform,opacity,width; }\n\n.md-menu-content.md-direction-bottom-right {\n  margin-top: -20px;\n  margin-left: -8px;\n  transform-origin: top left; }\n\n.md-menu-content.md-direction-bottom-right.md-active {\n  margin-top: -11px; }\n\n.md-menu-content.md-direction-bottom-left {\n  margin-top: -20px;\n  margin-left: 8px;\n  transform-origin: top right; }\n\n.md-menu-content.md-direction-bottom-left.md-active {\n  margin-top: -11px; }\n\n.md-menu-content.md-direction-top-right {\n  margin-top: 20px;\n  margin-left: -8px;\n  transform-origin: bottom left; }\n\n.md-menu-content.md-direction-top-right.md-active {\n  margin-top: 11px; }\n\n.md-menu-content.md-direction-top-left {\n  margin-top: 20px;\n  margin-left: 8px;\n  transform-origin: bottom right; }\n\n.md-menu-content.md-direction-top-left.md-active {\n  margin-top: 11px; }\n\n.md-menu-content.md-align-trigger {\n  margin: 0; }\n\n.md-menu-content.md-size-1 {\n  width: 84px; }\n\n.md-menu-content.md-size-2 {\n  width: 112px; }\n\n.md-menu-content.md-size-3 {\n  width: 168px; }\n\n.md-menu-content.md-size-4 {\n  width: 224px; }\n\n.md-menu-content.md-size-5 {\n  width: 280px; }\n\n.md-menu-content.md-size-6 {\n  width: 336px; }\n\n.md-menu-content.md-size-7 {\n  width: 392px; }\n\n.md-menu-content.md-active {\n  pointer-events: auto;\n  opacity: 1;\n  transform: scale(1) translateZ(0);\n  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) 0.05s; }\n\n.md-menu-content.md-active .md-list {\n  opacity: 1;\n  transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) 0.15s; }\n\n.md-menu-content .md-list {\n  opacity: 0;\n  transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-menu-item {\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1.2em; }\n\n.md-menu-item[disabled] {\n  cursor: default; }\n\n.md-menu-item .md-list-item-holder {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.md-radio {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative; }\n\n.md-radio .md-radio-container {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-radio .md-radio-container:after {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  bottom: 3px;\n  left: 3px;\n  border-radius: 50%;\n  opacity: 0;\n  transform: scale3D(0.38, 0.38, 1);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  content: \" \"; }\n\n.md-radio .md-radio-container input {\n  position: absolute;\n  left: -999em; }\n\n.md-radio .md-radio-container .md-ink-ripple {\n  top: -16px;\n  right: -16px;\n  bottom: -16px;\n  left: -16px;\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-radio .md-radio-container .md-ink-ripple .md-ripple {\n  width: 48px !important;\n  height: 48px !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important; }\n\n.md-radio .md-radio-label {\n  height: 20px;\n  padding-left: 8px;\n  line-height: 20px; }\n\n.md-radio.md-checked .md-radio-container:after {\n  opacity: 1;\n  transform: scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-select {\n  width: 100%;\n  min-width: 128px;\n  height: 32px;\n  position: relative; }\n\n.md-select:focus {\n  outline: none; }\n\n.md-select:after {\n  margin-top: 2px;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%) scaleY(0.45) scaleX(0.85);\n  transition: all .15s linear;\n  content: \"\\25BC\"; }\n\n.md-select.md-active .md-select-menu {\n  top: -8px;\n  pointer-events: auto;\n  opacity: 1;\n  transform: translateY(-8px) scale3D(1, 1, 1);\n  transform-origin: center top;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .25s;\n  transition-property: opacity,transform,top; }\n\n.md-select.md-active .md-select-menu > * {\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .15s;\n  transition-delay: .1s; }\n\n.md-select.md-disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  user-drag: none; }\n\n.md-select select {\n  position: absolute;\n  left: -999em; }\n\n.md-select .md-menu, .md-select .md-select-value {\n  width: 100%;\n  height: 32px;\n  display: block;\n  position: relative; }\n\n.md-select .md-select-value {\n  padding-right: 24px;\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 2;\n  font-size: 16px;\n  line-height: 33px;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.md-select .md-subheader {\n  color: rgba(117, 117, 117, 0.87);\n  text-transform: uppercase; }\n\n.md-select .md-subheader:first-child {\n  margin-top: -8px; }\n\n.md-select-content {\n  width: auto;\n  max-height: 256px; }\n\n.md-select-content.md-direction-bottom-right {\n  margin-top: -15px;\n  margin-left: -16px; }\n\n.md-select-content .md-menu-item .md-list-item-holder {\n  overflow: visible;\n  -ms-flex-pack: start;\n  justify-content: flex-start; }\n\n.md-select-content.md-multiple .md-checkbox {\n  margin: 0; }\n\n.md-select-content.md-multiple .md-checkbox-label {\n  padding-left: 16px;\n  cursor: pointer; }\n\n.md-sidenav.md-left .md-sidenav-content {\n  left: 0;\n  transform: translate3D(-100%, 0, 0); }\n\n.md-sidenav.md-right .md-sidenav-content {\n  right: 0;\n  transform: translate3D(100%, 0, 0); }\n\n.md-sidenav.md-fixed .md-sidenav-backdrop, .md-sidenav.md-fixed .md-sidenav-content {\n  position: fixed; }\n\n.md-sidenav .md-sidenav-content {\n  width: 304px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  pointer-events: none;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n  will-change: transform; }\n\n.md-sidenav .md-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.54);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition-property: opacity;\n  will-change: opacity; }\n\n.md-sidenav.md-active .md-sidenav-content {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n  pointer-events: auto;\n  transform: translate3D(0, 0, 0); }\n\n.md-sidenav.md-active .md-sidenav-backdrop {\n  opacity: 1;\n  pointer-events: auto; }\n\n.md-spinner {\n  display: inline-block;\n  position: relative;\n  pointer-events: none;\n  will-change: transform,opacity; }\n\n.md-spinner.md-indeterminate .md-spinner-draw {\n  animation: spinner-rotate 1.9s linear infinite;\n  transform: rotate(0deg) translateZ(0); }\n\n.md-spinner.md-indeterminate .md-spinner-path {\n  stroke-dasharray: 2,200;\n  animation: spinner-dash 1.425s ease-in-out infinite; }\n\n.md-spinner.md-spinner-leave-active {\n  opacity: 0;\n  transform: scale(0.8) translateZ(0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-spinner:not(.md-indeterminate).md-spinner-enter-active {\n  transition-duration: 2s; }\n\n.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw {\n  animation: spinner-initial-rotate 1.98s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }\n\n.md-spinner-draw {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: rotate(270deg) translateZ(0);\n  transform-origin: center center;\n  will-change: transform,opacity; }\n\n.md-spinner-path {\n  fill: none;\n  stroke-dashoffset: 0;\n  stroke-miterlimit: 10;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@keyframes spinner-rotate {\n  to {\n    transform: rotate(1turn) translateZ(0); } }\n\n@keyframes spinner-initial-rotate {\n  0% {\n    opacity: 0;\n    transform: rotate(-90deg) translateZ(0); }\n  20% {\n    opacity: 1; }\n  to {\n    transform: rotate(270deg) translateZ(0); } }\n\n@keyframes spinner-dash {\n  0% {\n    stroke-dasharray: 2,200;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -35px; }\n  to {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -124px; } }\n\n.md-subheader {\n  min-height: 48px;\n  padding: 0 16px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500; }\n\n.md-switch {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative; }\n\n.md-switch .md-switch-container {\n  width: 34px;\n  height: 14px;\n  position: relative;\n  border-radius: 14px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.md-switch .md-switch-container .md-switch-thumb {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  background-color: #fafafa;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: all .15s linear; }\n\n.md-switch .md-switch-container input {\n  position: absolute;\n  left: -999em; }\n\n.md-switch .md-switch-container .md-ink-ripple {\n  top: -16px;\n  right: -16px;\n  bottom: -16px;\n  left: -16px;\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-switch .md-switch-container .md-ink-ripple .md-ripple {\n  width: 48px !important;\n  height: 48px !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important; }\n\n.md-switch .md-switch-container .md-switch-holder {\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  background: none;\n  border: none;\n  transform: translate(-50%, -50%); }\n\n.md-switch .md-switch-container .md-switch-holder:focus {\n  outline: none; }\n\n.md-switch .md-switch-label {\n  height: 14px;\n  padding-left: 8px;\n  line-height: 14px; }\n\n.md-switch.md-dragging .md-switch-thumb {\n  cursor: -webkit-grabbing;\n  cursor: grabbing; }\n\n.md-switch.md-disabled .md-switch-thumb {\n  cursor: default; }\n\n.md-table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n  flex-flow: column wrap;\n  overflow-x: auto; }\n\n.md-table.md-transition-off .md-checkbox .md-checkbox-container, .md-table.md-transition-off .md-checkbox .md-checkbox-container:after, .md-table.md-transition-off .md-table-cell {\n  transition: none !important; }\n\n.md-table table {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  overflow: hidden; }\n\n.md-table tbody .md-table-row {\n  border-top: 1px solid #e0e0e0; }\n\n.md-table tbody .md-table-row.md-selected .md-table-cell {\n  background-color: #f5f5f5; }\n\n.md-table tbody .md-table-row:hover .md-table-cell {\n  background-color: #eee; }\n\n.md-table .md-table-head {\n  padding: 0;\n  position: relative;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  line-height: 16px;\n  text-align: left; }\n\n.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text {\n  padding-right: 24px; }\n\n.md-table .md-table-head.md-numeric {\n  text-align: right; }\n\n.md-table .md-table-head .md-icon {\n  width: 16px;\n  min-width: 16px;\n  height: 16px;\n  min-height: 16px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-table .md-table-head .md-icon:not(.md-sortable-icon) {\n  margin: 0 4px; }\n\n.md-table .md-table-head .md-icon:first-child {\n  margin-left: 0; }\n\n.md-table .md-table-head .md-icon:last-child {\n  margin-right: 0; }\n\n.md-table .md-table-head-container {\n  height: 56px;\n  padding: 14px 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-table .md-table-head-text {\n  height: 28px;\n  padding-right: 32px;\n  padding-left: 24px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  line-height: 28px;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.md-table .md-sortable {\n  cursor: pointer; }\n\n.md-table .md-sortable:first-of-type .md-sortable-icon {\n  left: auto;\n  right: 10px; }\n\n.md-table .md-sortable.md-sorted, .md-table .md-sortable:hover {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-table .md-sortable.md-sorted .md-sortable-icon, .md-table .md-sortable:hover .md-sortable-icon {\n  opacity: 1; }\n\n.md-table .md-sortable.md-sorted .md-sortable-icon {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-table .md-sortable.md-sorted-descending .md-sortable-icon {\n  transform: translateY(-50%) rotate(180deg); }\n\n.md-table .md-sortable .md-sortable-icon {\n  position: absolute;\n  top: 50%;\n  left: 2px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translateY(-50%);\n  opacity: 0;\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-table .md-sortable .md-ink-ripple {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-table .md-table-cell {\n  height: 48px;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 13px;\n  line-height: 18px; }\n\n.md-table .md-table-cell:last-child .md-table-cell-container {\n  padding-right: 24px; }\n\n.md-table .md-table-cell.md-numeric {\n  text-align: right; }\n\n.md-table .md-table-cell.md-numeric .md-table-cell-container {\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n.md-table .md-table-cell.md-has-action .md-table-cell-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.md-table .md-table-cell .md-table-cell-container {\n  padding: 6px 32px 6px 24px; }\n\n.md-table .md-table-cell .md-button {\n  width: 36px;\n  min-width: 36px;\n  height: 36px;\n  min-height: 36px; }\n\n.md-table .md-table-cell .md-button:last-child {\n  margin: 0 -10px 0 0; }\n\n.md-table .md-table-cell .md-button .md-icon {\n  width: 18px;\n  min-width: 18px;\n  height: 18px;\n  min-height: 18px;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 18px; }\n\n.md-table .md-table-selection {\n  width: 60px;\n  position: relative;\n  vertical-align: middle; }\n\n.md-table .md-table-selection + .md-table-cell .md-table-cell-container, .md-table .md-table-selection + .md-table-head .md-table-head-container .md-table-head-text {\n  padding-left: 8px; }\n\n.md-table .md-table-selection .md-table-cell-container {\n  padding-right: 16px;\n  padding-left: 24px; }\n\n.md-table .md-table-selection .md-checkbox {\n  margin: 0; }\n\n.md-table .md-table-selection .md-checkbox-container {\n  width: 18px;\n  height: 18px;\n  margin-top: 1px; }\n\n.md-table .md-table-selection .md-checkbox-container:after {\n  top: -1px;\n  left: 4px; }\n\n.md-table .md-select {\n  min-width: 84px; }\n\n.md-table .md-option, .md-table .md-select-value {\n  font-size: 13px; }\n\n.md-table-edit-trigger {\n  display: inline-block;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-table-edit-trigger.md-edited {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-table-dialog {\n  max-height: 0;\n  margin: 0;\n  padding: 0 24px 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 24px;\n  z-index: 60;\n  overflow: hidden;\n  pointer-events: none;\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), max-height 0s 0.5s;\n  transition-duration: .3s;\n  transform: translate3D(0, -8px, 0); }\n\n.md-table-dialog.md-active {\n  max-height: 400px;\n  pointer-events: auto;\n  transform: translate3D(#000);\n  opacity: 1;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s; }\n\n.md-table-dialog.md-large {\n  padding: 12px 24px 2px; }\n\n.md-table-dialog .md-input-container {\n  margin-top: 0;\n  margin-bottom: 16px; }\n\n.md-table-dialog .md-input-container.md-input-placeholder input {\n  font-size: 13px; }\n\n.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder {\n  font-size: 13px; }\n\n.md-table-dialog .md-char-counter {\n  font-size: 13.5px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-table-dialog .md-button {\n  min-width: 64px; }\n\n.md-table-card {\n  overflow: visible; }\n\n.md-table-card .md-toolbar {\n  padding-left: 16px;\n  background-color: #fff; }\n\n.md-table-card .md-title {\n  -ms-flex: 1;\n  flex: 1;\n  font-size: 20px; }\n\n.md-table-card .md-table-pagination {\n  height: 56px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  border-top: 1px solid #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px; }\n\n.md-table-card .md-table-pagination .md-table-pagination-previous {\n  margin-right: 2px;\n  margin-left: 18px; }\n\n.md-table-card .md-table-pagination .md-select {\n  width: auto;\n  min-width: 36px;\n  margin: 0 32px; }\n\n.md-table-card .md-table-pagination .md-select:after {\n  margin-top: 0; }\n\n.md-table-card .md-table-pagination .md-select .md-select-value {\n  padding: 0;\n  border: none;\n  font-size: 13px; }\n\n.md-table-card .md-table-pagination .md-button:not([disabled]) {\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-table-card .md-table-pagination .md-button[disabled] .md-icon {\n  color: rgba(0, 0, 0, 0.26); }\n\n.md-pagination-select.md-direction-bottom-right {\n  margin-top: -16px; }\n\n.md-pagination-select .md-list-item-holder {\n  font-size: 13px; }\n\n.md-table-alternate-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s; }\n\n.md-table-alternate-header.md-active {\n  pointer-events: auto;\n  opacity: 1;\n  transform: translate3D(#000); }\n\n.md-table-alternate-header .md-counter {\n  margin-left: 8px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-tabs {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  position: relative; }\n\n.md-tabs.md-transition-off * {\n  transition: none !important; }\n\n.md-tabs.md-dynamic-height .md-tabs-content {\n  transition: height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-tabs .md-tabs-navigation {\n  height: 48px;\n  min-height: 48px;\n  position: relative;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-tabs .md-tabs-navigation.md-has-icon.md-has-label {\n  min-height: 72px; }\n\n.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon {\n  margin-bottom: 10px; }\n\n.md-tabs .md-tabs-navigation.md-centered {\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.md-tabs .md-tabs-navigation.md-fixed .md-tab-header {\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-tabs .md-tabs-navigation.md-right {\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n.md-tabs .md-tab-header {\n  min-width: 72px;\n  max-width: 264px;\n  margin: 0;\n  padding: 0 12px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  border: 0;\n  background: none;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase; }\n\n.md-tabs .md-tab-header.md-disabled {\n  cursor: default;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none; }\n\n.md-tabs .md-tab-header-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.md-tabs .md-tab-header-container .md-icon {\n  margin: 0; }\n\n.md-tabs .md-tab-indicator {\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translate3D(0, 0, 0); }\n\n.md-tabs .md-tab-indicator.md-transition-off {\n  transition: none !important; }\n\n.md-tabs .md-tab-indicator.md-to-right {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), right 0.15s cubic-bezier(0.35, 0, 0.25, 1); }\n\n.md-tabs .md-tab-indicator.md-to-left {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.15s cubic-bezier(0.35, 0, 0.25, 1); }\n\n.md-tabs .md-tabs-content {\n  width: 100%;\n  height: 0;\n  position: relative;\n  overflow: hidden; }\n\n.md-tabs .md-tabs-wrapper {\n  width: 9999em;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateZ(0);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-tabs .md-tab {\n  padding: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.md-toolbar {\n  min-height: 64px;\n  padding: 0 8px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate3D(0, 0, 0); }\n\n.md-toolbar.md-dense {\n  min-height: 48px; }\n\n.md-toolbar.md-dense.md-medium {\n  min-height: 72px; }\n\n.md-toolbar.md-dense.md-large {\n  min-height: 96px; }\n\n.md-toolbar.md-dense .md-toolbar-container {\n  height: 48px; }\n\n.md-toolbar.md-medium {\n  min-height: 88px; }\n\n.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child {\n  margin-left: 56px; }\n\n.md-toolbar.md-large {\n  min-height: 128px;\n  -ms-flex-line-pack: inherit;\n  align-content: inherit; }\n\n.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child {\n  margin-left: 56px; }\n\n.md-toolbar.md-account-header {\n  min-height: 164px; }\n\n.md-toolbar.md-account-header .md-ink-ripple {\n  color: #fff; }\n\n.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]) {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.md-toolbar.md-account-header .md-avatar-list {\n  margin: 16px 0 8px; }\n\n.md-toolbar.md-account-header .md-avatar-list .md-list-item-container {\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.md-toolbar.md-account-header .md-avatar-list .md-avatar + .md-avatar {\n  margin-left: 16px; }\n\n.md-toolbar .md-toolbar-container {\n  width: 100%;\n  height: 64px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-item-align: start;\n  align-self: flex-start; }\n\n.md-toolbar .md-toolbar-container > .md-button:first-child {\n  margin-left: 0;\n  margin-right: 16px; }\n\n.md-toolbar .md-toolbar-container > .md-button + .md-button {\n  margin-left: 0; }\n\n.md-toolbar > .md-button:first-child {\n  margin-left: 0;\n  margin-right: 16px; }\n\n.md-toolbar > .md-button + .md-button {\n  margin-left: 0; }\n\n.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab) {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.md-toolbar .md-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 400; }\n\n.md-toolbar .md-title:first-child {\n  margin-left: 8px; }\n\n.md-toolbar .md-list {\n  padding: 0;\n  margin: 0 -8px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.md-tooltip {\n  height: 20px;\n  padding: 0 8px;\n  position: fixed;\n  z-index: 200;\n  pointer-events: none;\n  background-color: rgba(97, 97, 97, 0.87);\n  border-radius: 2px;\n  opacity: 0;\n  transform-origin: center top;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s;\n  transition-delay: 0s;\n  color: #fff;\n  font-family: Roboto,Noto Sans,Noto,sans-serif;\n  font-size: 10px;\n  line-height: 20px;\n  text-transform: none;\n  white-space: nowrap; }\n\n.md-tooltip.md-active {\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .3s; }\n\n.md-tooltip:not(.md-active) {\n  transition-delay: 0s !important; }\n\n.md-tooltip.md-transition-off {\n  transition: none !important; }\n\n.md-tooltip.md-tooltip-top {\n  margin-top: -14px;\n  transform: translate(-50%, 8px); }\n\n.md-tooltip.md-tooltip-top.md-active {\n  transform: translate(-50%); }\n\n.md-tooltip.md-tooltip-right {\n  margin-left: 14px;\n  transform: translate(-8px, 50%); }\n\n.md-tooltip.md-tooltip-right.md-active {\n  transform: translateY(50%); }\n\n.md-tooltip.md-tooltip-bottom {\n  margin-top: 14px;\n  transform: translate(-50%, -8px); }\n\n.md-tooltip.md-tooltip-bottom.md-active {\n  transform: translate(-50%); }\n\n.md-tooltip.md-tooltip-left {\n  margin-left: -14px;\n  transform: translate(8px, 50%); }\n\n.md-tooltip.md-tooltip-left.md-active {\n  transform: translateY(50%); }\n\n.md-whiteframe {\n  position: relative;\n  z-index: 1; }\n\n.md-whiteframe-1dp {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-2dp {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-3dp {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-4dp {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-5dp {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-6dp {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-7dp {\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-8dp {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-9dp {\n  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-10dp {\n  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-11dp {\n  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-12dp {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-13dp {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-14dp {\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-15dp {\n  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-16dp {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-17dp {\n  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-18dp {\n  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-19dp {\n  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-20dp {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-21dp {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-22dp {\n  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-23dp {\n  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-24dp {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n", "", {"version":3,"sources":["/./node_modules/vue-material/dist/node_modules/vue-material/dist/vue-material.css"],"names":[],"mappings":"AAAA;EAAW,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,aAAY;EAAC,sBAAqB;EAAC,iBAAgB;EAAC,0BAAyB;EAAC,uBAAsB;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,mBAAkB;EAAC,oBAAmB;EAAC,uBAAsB,EAAE;;AAAD;EAAoB,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,oBAAmB,EAAE;;AAAD;EAA6B,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,gBAAe;EAAC,kBAAiB,EAAE;;AAAD;EAA0B,sCAAqB,EAAa;;AAAD;EAAmC,YAAW,EAAE;;AAAD;EAAoB,mBAAkB;EAAC,SAAQ;EAAC,UAAS;EAAC,iCAAmB,EAAa;;AAAD;EAAe,YAAW;EAAC,aAAY;EAAC,eAAc,EAAE;;AAAD;EAA0B,mBAAkB,EAAE;;AAAD;EAA+C,wBAAuB,EAAE;;AAAD;EAAkC,iBAAgB,EAAE;;AAAD;EAAoC,iBAAgB,EAAE;;AAAD;EAAqC,gBAAe,EAAE;;AAAD;EAAmC,kBAAiB,EAAE;;AAAD;EAAa,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,YAAW;EAAC,qBAAoB;EAAC,sCAAqB;EAAY,yBAAoB;EAAI,WAAU;EAAC,oDAA+B,EAAe;;AAAD;EAAuB,WAAU;EAAC,qBAAoB,EAAE;;AAAD;EAA4B,iBAAgB,EAAE;;AAAD;EAAe,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,sBAAqB;EAAC,wBAAuB;EAAC,sHAA2F;EAAY,sDAA+B,EAAgB;;AAAD;EAAmC,mBAAkB;EAAC,qBAAoB;EAAC,cAAa,EAAE;;AAAD;EAAoB,iBAAgB;EAAC,gBAAe;EAAC,aAAY;EAAC,uBAAsB;EAAC,6BAA4B;EAAC,kBAAiB;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,uBAAsB;EAAC,+BAA8B;EAAC,YAAW;EAAC,QAAO;EAAC,gBAAe;EAAC,aAAY;EAAC,wBAAuB;EAAC,yBAAoB;EAAI,oBAAmB;EAAC,qBAAoB;EAAC,gBAAe;EAAC,iBAAgB;EAAC,sBAAqB,EAAE;;AAAD;EAA8B,iBAAgB,EAAE;;AAAD;EAAuC,kCAA6B,EAAK;;AAAD;EAA8E,oBAAmB,EAAE;;AAAD;EAA4C,gBAAe;EAAC,gBAAe;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,eAAc;EAAC,kDAA2B;EAAe,8CAA6C;EAAC,uDAAsD,EAAE;;AAAD;EAAqD,kCAAqB,EAAW;;AAAD;EAAqD,WAAU;EAAC,2CAA8B,EAAW;;AAAD;EAAsD,gBAAe;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,eAAc,EAAE;;AAAD;EAA8H,WAAU,EAAE;;AAAD;EAA+D,kCAA6B,EAAK;;AAAD;EAA+D,2CAA8B,EAAW;;AAAD;EAA6B,yCAAiC;EAAM,gGAAmF,EAAE;;AAAD;EAA6B,0EAA+D,EAAE;;AAAD;EAAW,gBAAe;EAAC,iBAAgB;EAAC,gBAAe;EAAC,gBAAe;EAAC,sBAAqB;EAAC,mBAAkB;EAAC,iBAAgB;EAAC,0BAAyB;EAAC,uBAAsB;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,gBAAe;EAAC,iBAAgB;EAAC,UAAS;EAAC,mBAAkB;EAAC,sDAA+B;EAAe,oBAAmB;EAAC,qBAAoB;EAAC,gBAAe;EAAC,oBAAmB;EAAC,sBAAqB;EAAC,iBAAgB;EAAC,wBAAuB;EAAC,kBAAiB;EAAC,mBAAkB;EAAC,0BAAyB;EAAC,sBAAqB;EAAC,oBAAmB;EAAC,oBAAmB,EAAE;;AAAD;EAA4B,cAAa,EAAE;;AAAD;EAA6B,UAAS,EAAE;;AAAD;EAAiD,2CAAqB;EAAc,sBAAqB,EAAE;;AAAD;EAA2C,sCAAqB,EAAa;;AAAD;EAAkC,2CAAqB,EAAe;;AAAD;EAAqC,4GAAiF,EAAa;;AAAD;EAAoB,iBAAgB;EAAC,kBAAiB;EAAC,gBAAe,EAAE;;AAAD;EAA8D,gBAAe;EAAC,mBAAkB;EAAC,SAAQ;EAAC,UAAS;EAAC,iCAAmB,EAAa;;AAAD;EAA0B,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,cAAa;EAAC,aAAY;EAAC,mBAAkB;EAAC,kBAAiB,EAAE;;AAAD;EAAgD,iBAAgB,EAAE;;AAAD;EAAmC,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,aAAY;EAAC,kBAAiB,EAAE;;AAAD;EAAyC,mBAAkB,EAAE;;AAAD;EAAoD,kBAAe;EAAC,oBAAiB;EAAC,qBAAkB;EAAC,mBAAgB,EAAE;;AAAD;EAA+C,wBAAuB,EAAE;;AAAD;EAAkB,YAAW;EAAC,aAAY;EAAC,aAAY;EAAC,iBAAgB;EAAC,4GAAiF;EAAY,oBAAmB;EAAC,kBAAiB;EAAC,6BAA4B;EAAC,sDAA+B;EAAe,2DAA0D,EAAE;;AAAD;EAAgD,6GAAkF,EAAa;;AAAD;EAAkC,mBAAkB;EAAC,UAAS;EAAC,WAAU,EAAE;;AAAD;EAAoC,mBAAkB;EAAC,UAAS;EAAC,UAAS;EAAC,4BAAoB,EAAQ;;AAAD;EAAmC,mBAAkB;EAAC,UAAS;EAAC,YAAW,EAAE;;AAAD;EAAqC,mBAAkB;EAAC,aAAY;EAAC,WAAU,EAAE;;AAAD;EAAuC,mBAAkB;EAAC,aAAY;EAAC,UAAS;EAAC,4BAAoB,EAAQ;;AAAD;EAAsC,mBAAkB;EAAC,YAAW;EAAC,aAAY,EAAE;;AAAD;EAA0B,YAAW;EAAC,aAAY;EAAC,kBAAiB,EAAE;;AAAD;EAAiC,oBAAmB,EAAE;;AAAD;EAAqB,2BAAU;EAAY,gBAAe,EAAE;;AAAD;EAA2D,sCAAqB,EAAa;;AAAD;EAA4B,iBAAgB,EAAE;;AAAD;EAAiB,sDAA+B,EAAgB;;AAAD;EAA0B,mBAAkB;EAAC,6BAA4B;EAAC,iBAAgB,EAAE;;AAAD;EAA8D,eAAc,EAAE;;AAAD;EAAkC,iBAAgB,EAAE;;AAAD;EAAoC,iBAAgB,EAAE;;AAAD;EAAqC,gBAAe,EAAE;;AAAD;EAAmC,kBAAiB,EAAE;;AAAD;EAAkB,YAAW;EAAC,qBAAoB;EAAC,cAAa,EAAE;;AAAD;EAA6B,UAAS;EAAC,iBAAgB;EAAC,4BAA2B;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAyC,2BAA0B,EAAE;;AAAD;EAAwC,wBAAuB;EAAC,2BAA0B,EAAE;;AAAD;EAA6C,2BAAU,EAAa;;AAAD;EAAmF,2CAAqB;EAAc,sBAAqB,EAAE;;AAAD;EAA4C,mBAAkB,EAAE;;AAAD;EAAS,eAAc;EAAC,qBAAoB;EAAC,cAAa;EAAC,2BAA0B;EAAC,uBAAsB;EAAC,mBAAkB;EAAC,WAAU;EAAC,mBAAkB;EAAC,4GAAiF,EAAa;;AAAD;EAAuB,gBAAe;EAAC,sDAA+B;EAAe,gCAA+B,EAAE;;AAAD;EAA6B,WAAU;EAAC,sHAA2F,EAAa;;AAAD;EAAwB,mBAAkB,EAAE;;AAAD;EAAgC,iBAAgB,EAAE;;AAAD;EAAuC,YAAW;EAAC,oBAAmB;EAAC,eAAc;EAAC,aAAY,EAAE;;AAAD;EAAoC,mBAAkB;EAAC,SAAQ;EAAC,SAAQ;EAAC,QAAO;EAAC,4BAAoB,EAAQ;;AAAD;EAA+B,iBAAgB,EAAE;;AAAD;EAAsC,YAAW;EAAC,iBAAgB;EAAC,eAAc;EAAC,aAAY,EAAE;;AAAD;EAAmC,mBAAkB;EAAC,SAAQ;EAAC,SAAQ;EAAC,QAAO;EAAC,4BAAoB,EAAQ;;AAAD;EAA+B,iBAAgB,EAAE;;AAAD;EAAsC,YAAW;EAAC,kBAAiB;EAAC,eAAc;EAAC,aAAY,EAAE;;AAAD;EAAmC,mBAAkB;EAAC,SAAQ;EAAC,SAAQ;EAAC,QAAO;EAAC,4BAAoB,EAAQ;;AAAD;EAAwC,kBAAiB,EAAE;;AAAD;EAAoD,qBAAoB,EAAE;;AAAD;EAA4B,YAAW,EAAE;;AAAD;EAAyB,cAAa,EAAE;;AAAD;EAA2I,gBAAe,EAAE;;AAAD;EAAoC,mBAAkB,EAAE;;AAAD;EAA6C,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,+BAA8B,EAAE;;AAAD;EAA0C,eAAc,EAAE;;AAAD;EAA2D,eAAc,EAAE;;AAAD;EAAoC,mBAAkB;EAAC,YAAW,EAAE;;AAAD;EAA8C,gBAAe,EAAE;;AAAD;EAA8F,iBAAgB;EAAC,kBAAiB,EAAE;;AAAD;EAAoC,UAAS,EAAE;;AAAD;EAA+C,mBAAkB,EAAE;;AAAD;EAA+C,iBAAgB,EAAE;;AAAD;EAA8C,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAwC,YAAW;EAAC,mBAAkB;EAAC,eAAc;EAAC,aAAY;EAAC,kBAAiB,EAAE;;AAAD;EAAkD,aAAY;EAAC,oBAAmB;EAAC,gBAAe;EAAC,cAAa,EAAE;;AAAD;EAA+C,aAAY;EAAC,oBAAmB;EAAC,gBAAe;EAAC,cAAa,EAAE;;AAAD;EAAgE,UAAS;EAAC,iBAAgB,EAAE;;AAAD;EAAqB,aAAY;EAAC,gBAAe;EAAC,sBAAqB;EAAC,kBAAiB,EAAE;;AAAD;EAA+B,gBAAe,EAAE;;AAAD;EAAmB,gBAAe;EAAC,kBAAiB;EAAC,kBAAiB,EAAE;;AAAD;EAAgC,cAAa;EAAC,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,+BAA8B,EAAE;;AAAD;EAA+C,iBAAgB;EAAC,kBAAiB;EAAC,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAiD,kBAAiB;EAAC,2BAA0B;EAAC,uBAAsB;EAAC,qBAAoB;EAAC,4BAA2B;EAAC,uBAAsB;EAAC,oBAAmB,EAAE;;AAAD;EAAuE,gBAAe,EAAE;;AAAD;EAA0B,cAAa;EAAC,gBAAe;EAAC,kBAAiB,EAAE;;AAAD;EAAqC,qBAAoB,EAAE;;AAAD;EAA0B,aAAY;EAAC,qBAAoB;EAAC,cAAa;EAAC,mBAAkB;EAAC,0BAAyB;EAAC,uBAAsB;EAAC,oBAAmB,EAAE;;AAAD;EAAqC,UAAS,EAAE;;AAAD;EAAiD,eAAc,EAAE;;AAAD;EAAgD,gBAAe,EAAE;;AAAD;EAAgD,iBAAgB,EAAE;;AAAD;EAA+D,mBAAkB,EAAE;;AAAD;EAA8C,YAAW;EAAC,mBAAkB;EAAC,UAAS;EAAC,aAAY,EAAE;;AAAD;EAA6D,SAAQ;EAAC,QAAO,EAAE;;AAAD;EAAuD,YAAW;EAAC,WAAU,EAAE;;AAAD;EAA8B,mBAAkB;EAAC,YAAW,EAAE;;AAAD;EAA8D,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,WAAU,EAAE;;AAAD;EAA4C,mBAAkB;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,WAAU,EAAE;;AAAD;EAA+D,eAAc,EAAE;;AAAD;EAA0C,WAAU,EAAE;;AAAD;EAAyB,iBAAgB,EAAE;;AAAD;EAAuD,+CAAoC,EAAS;;AAAD;EAAoD,yBAAsB;EAAC,WAAU,EAAE;;AAAD;EAA0C,eAAc;EAAC,mBAAkB;EAAC,WAAU,EAAE;;AAAD;EAA6C,sDAA+B;EAAe,uBAAsB,EAAE;;AAAD;EAA0C,iBAAgB;EAAC,mBAAkB;EAAC,WAAU;EAAC,WAAU;EAAC,gCAAqB;EAAQ,sDAA+B;EAAe,oBAAmB,EAAE;;AAAD;EAAa,YAAW;EAAC,wBAAuB;EAAC,4BAA2B;EAAC,qBAAoB;EAAC,mBAAkB,EAAE;;AAAD;EAAoC,YAAW;EAAC,aAAY;EAAC,mBAAkB;EAAC,mBAAkB;EAAC,sCAAqB;EAAY,sDAA+B,EAAgB;;AAAD;EAA0C,cAAa,EAAE;;AAAD;EAA2C,YAAW;EAAC,aAAY;EAAC,mBAAkB;EAAC,SAAQ;EAAC,UAAS;EAAC,mBAAkB;EAAC,iCAAmB;EAAY,sDAA+B;EAAe,aAAY,EAAE;;AAAD;EAA0C,WAAU;EAAC,aAAY;EAAC,mBAAkB;EAAC,OAAM;EAAC,UAAS;EAAC,uBAAsB;EAAC,cAAa;EAAC,eAAc;EAAC,WAAU;EAAC,gDAA+B;EAAY,sDAA+B;EAAe,aAAY,EAAE;;AAAD;EAA0C,mBAAkB;EAAC,aAAY,EAAE;;AAAD;EAAmD,WAAU;EAAC,aAAY;EAAC,cAAa;EAAC,YAAW;EAAC,mBAAkB;EAAC,2BAAU,EAAa;;AAAD;EAA8D,uBAAoB;EAAC,wBAAqB;EAAC,kBAAe;EAAC,oBAAiB;EAAC,qBAAkB;EAAC,mBAAgB,EAAE;;AAAD;EAAgC,aAAY;EAAC,kBAAiB;EAAC,kBAAiB,EAAE;;AAAD;EAAqD,WAAU;EAAC,0CAA+B;EAAQ,sDAA+B,EAAgB;;AAAD;EAAe,qBAAoB;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,+DAAkC;EAA0B,uDAA0B;EAA0B,sDAA+B,EAAgB;;AAAD;EAAW,mBAAkB;EAAC,oBAAe;EAAI,+BAA8B;EAAC,aAAY;EAAC,mBAAkB,EAAE;;AAAD;EAAqB,sDAAgC,EAAgB;;AAAD;EAAkB;IAAG,sBAAe;IAAM,WAAU,EAAA,EAAA;;AAAE;EAAqB,qBAAoB;EAAC,cAAa;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,sBAAqB;EAAC,wBAAuB;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,qBAAoB;EAAC,gBAAe;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,aAAY,EAAE;;AAAD;EAA+B,qBAAoB,EAAE;;AAAD;EAA0C,sBAAmB;EAAC,+BAA4B;EAAC,sDAA+B;EAAe,uCAAsC,EAAE;;AAAD;EAAoB,gBAAe;EAAC,aAAY,EAAE;;AAAD;EAAW,iBAAgB;EAAC,eAAc;EAAC,gBAAe;EAAC,qBAAoB;EAAC,cAAa;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,aAAY;EAAC,cAAa;EAAC,mBAAkB;EAAC,WAAU;EAAC,uHAA4F;EAAY,4BAAe;EAAS,gCAA+B;EAAC,iHAA+F;EAAC,+BAA8B,EAAE;;AAAD;EAAwB,6BAA4B,EAAE;;AAAD;EAA6B,4BAAyB,EAAE;;AAAD;EAAa,UAAS,EAAE;;AAAD;EAAiB,oBAAmB;EAAC,qBAAoB,EAAE;;AAAD;EAAmB,qBAAoB;EAAC,YAAW;EAAC,QAAO;EAAC,eAAc;EAAC,mBAAkB;EAAC,2SAAgN;EAA2D,iDAAgD,EAAE;;AAAD;EAA+B,kBAAiB,EAAE;;AAAD;EAAkD,cAAa,EAAE;;AAAD;EAAiD,iBAAgB,EAAE;;AAAD;EAAgB,gBAAe;EAAC,gBAAe;EAAC,eAAc,EAAE;;AAAD;EAAmB,iBAAgB;EAAC,0BAAyB;EAAC,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,mBAAkB;EAAC,0BAAyB;EAAC,mBAAkB,EAAE;;AAAD;EAA0B,YAAW;EAAC,mBAAkB;EAAC,UAAS;EAAC,SAAQ;EAAC,QAAO;EAAC,uBAAsB;EAAC,aAAY,EAAE;;AAAD;EAA8B,gBAAe;EAAC,UAAS;EAAC,eAAc,EAAE;;AAAD;EAAyC,iBAAgB,EAAE;;AAAD;EAAY,YAAW;EAAC,UAAS;EAAC,WAAU;EAAC,eAAc;EAAC,UAAS;EAAC,sCAAqB,EAAa;;AAAD;EAAqB,kBAAiB,EAAE;;AAAD;EAAS,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,aAAY;EAAC,4BAA2B;EAAC,qBAAoB;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,mBAAkB;EAAC,uBAAsB,EAAE;;AAAD;EAAoB,iBAAgB;EAAC,mBAAkB;EAAC,kBAAiB;EAAC,mBAAkB,EAAE;;AAAD;EAA0B,YAAW;EAAC,SAAQ;EAAC,UAAS;EAAC,sCAAqB;EAAY,aAAY,EAAE;;AAAD;EAAoD,mBAAkB;EAAC,QAAO;EAAC,sDAA+B,EAAgB;;AAAD;EAA0B,UAAS;EAAC,qBAAoB;EAAC,yBAAwB;EAAC,2BAAU;EAAY,gBAAe;EAAC,kBAAiB,EAAE;;AAAD;EAAuD,YAAW;EAAC,aAAY;EAAC,WAAU;EAAC,eAAc;EAAC,aAAY;EAAC,iBAAgB;EAAC,sDAA+B;EAAe,+BAA8B;EAAC,2BAAU;EAAY,qBAAoB;EAAC,eAAc;EAAC,kBAAiB,EAAE;;AAAD;EAAmE,cAAa,EAAE;;AAAD;EAA6G,2BAAU;EAAY,gBAAe;EAAC,kBAAiB;EAAC,iCAAgC,EAAE;;AAAD;EAA6B,iBAAgB;EAAC,kBAAiB;EAAC,eAAc;EAAC,aAAY;EAAC,mBAAkB,EAAE;;AAAD;EAA8B,aAAY;EAAC,0BAAuB;EAAC,mBAAkB;EAAC,WAAU;EAAC,mCAAqB;EAAW,sDAA+B;EAAe,gBAAe,EAAE;;AAAD;EAA8B,aAAY;EAAC,mBAAkB;EAAC,SAAQ;EAAC,gBAAe,EAAE;;AAAD;EAA+C,qBAAoB;EAAC,UAAS;EAAC,WAAU;EAAC,gBAAe,EAAE;;AAAD;EAAiG,gBAAe,EAAE;;AAAD;EAAkF,qBAAoB;EAAC,OAAM;EAAC,WAAU;EAAC,gBAAe,EAAE;;AAAD;EAA0K,gBAAe,EAAE;;AAAD;EAAiF,2BAAU,EAAa;;AAAD;EAA0C,qBAAoB,EAAE;;AAAD;EAA2D,UAAS;EAAC,gBAAe,EAAE;;AAAD;EAAuD,WAAU,EAAE;;AAAD;EAA4C,4BAA2B;EAAC,wGAAgC;EAA4D,yBAAwB,EAAE;;AAAD;EAAuI,2BAAU,EAAa;;AAAD;EAAyE,2BAAU,EAAa;;AAAD;EAAwD,UAAS;EAAC,mBAAkB;EAAC,SAAQ;EAAC,aAAY;EAAC,2BAAU,EAAa;;AAAD;EAAuE,2BAAU,EAAa;;AAAD;EAA+C,WAAU;EAAC,yBAAoB,EAAK;;AAAD;EAAkD,mBAAkB;EAAC,SAAQ;EAAC,SAAQ;EAAC,wCAAoB;EAAmB,aAAY;EAAC,gBAAe;EAAC,iBAAgB;EAAC,oBAAmB,EAAE;;AAAD;EAA2E,2BAAU,EAAa;;AAAD;EAAW,qBAAoB;EAAC,cAAa;EAAC,wBAAuB;EAAC,oBAAmB;EAAC,oBAAmB;EAAC,gBAAe;EAAC,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAQ,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAW,2BAA0B;EAAC,uBAAsB,EAAE;;AAAD;EAAwB,YAAW;EAAC,kBAAiB,EAAE;;AAAD;EAAoC,eAAc,EAAE;;AAAD;EAA2B,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAAsC,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAAsB,kBAAiB;EAAC,qBAAoB,EAAE;;AAAD;EAAiC,kBAAiB;EAAC,qBAAoB,EAAE;;AAAD;EAAyB;IAA2B,mBAAkB;IAAC,kBAAiB,EAAE;EAAD;IAAsC,mBAAkB;IAAC,kBAAiB,EAAE;EAAD;IAAsB,iBAAgB;IAAC,oBAAmB,EAAE;EAAD;IAAiC,iBAAgB;IAAC,oBAAmB,EAAE,EAAA;;AAAA;EAA6B,mBAAkB;EAAC,kBAAiB,EAAE;;AAAD;EAAwC,mBAAkB;EAAC,kBAAiB,EAAE;;AAAD;EAAwB,iBAAgB;EAAC,oBAAmB,EAAE;;AAAD;EAAmC,iBAAgB;EAAC,oBAAmB,EAAE;;AAAD;EAA8B,mBAAkB;EAAC,kBAAiB,EAAE;;AAAD;EAAyC,mBAAkB;EAAC,kBAAiB,EAAE;;AAAD;EAAyB,iBAAgB;EAAC,oBAAmB,EAAE;;AAAD;EAAoC,iBAAgB;EAAC,oBAAmB,EAAE;;AAAD;EAA8B,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAAyC,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAAyB,kBAAiB;EAAC,qBAAoB,EAAE;;AAAD;EAAoC,kBAAiB;EAAC,qBAAoB,EAAE;;AAAD;EAA8B,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAAyC,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAAyB,kBAAiB;EAAC,qBAAoB,EAAE;;AAAD;EAAoC,kBAAiB;EAAC,qBAAoB,EAAE;;AAAD;EAAS,cAAa;EAAC,UAAS,EAAE;;AAAD;EAAY,qBAAoB;EAAC,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAY,qBAAoB;EAAC,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAmB,uBAAsB,EAAE;;AAAD;EAAmB,uBAAsB,EAAE;;AAAD;EAAW,cAAa;EAAC,iBAAgB;EAAC,aAAY,EAAE;;AAAD;EAAkB,gBAAe,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAY,eAAc;EAAC,kBAAiB;EAAC,cAAa,EAAE;;AAAD;EAAmB,iBAAgB,EAAE;;AAAD;EAAa,gBAAe;EAAC,mBAAkB;EAAC,eAAc,EAAE;;AAAD;EAAoB,kBAAiB,EAAE;;AAAD;EAA0B;IAAe,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAkB,2BAA0B;IAAC,uBAAsB,EAAE;EAAD;IAAgB,cAAa;IAAC,UAAS,EAAE;EAAD;IAAmB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAmB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAA0B,uBAAsB,EAAE;EAAD;IAA0B,uBAAsB,EAAE;EAAD;IAAkB,cAAa;IAAC,iBAAgB;IAAC,aAAY,EAAE;EAAD;IAAyB,gBAAe,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAoB,gBAAe;IAAC,mBAAkB;IAAC,eAAc,EAAE;EAAD;IAA2B,kBAAiB,EAAE;EAAD;IAAgB,cAAa,EAAE,EAAA;;AAAA;EAA0B;IAAc,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAiB,2BAA0B;IAAC,uBAAsB,EAAE;EAAD;IAAe,cAAa;IAAC,UAAS,EAAE;EAAD;IAAkB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAkB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAyB,uBAAsB,EAAE;EAAD;IAAyB,uBAAsB,EAAE;EAAD;IAAiB,cAAa;IAAC,iBAAgB;IAAC,aAAY,EAAE;EAAD;IAAwB,gBAAe,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAmB,gBAAe;IAAC,mBAAkB;IAAC,eAAc,EAAE;EAAD;IAA0B,kBAAiB,EAAE;EAAD;IAAe,cAAa,EAAE,EAAA;;AAAA;EAA0B;IAAe,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAkB,2BAA0B;IAAC,uBAAsB,EAAE;EAAD;IAAgB,cAAa;IAAC,UAAS,EAAE;EAAD;IAAmB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAmB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAA0B,uBAAsB,EAAE;EAAD;IAA0B,uBAAsB,EAAE;EAAD;IAAkB,cAAa;IAAC,iBAAgB;IAAC,aAAY,EAAE;EAAD;IAAyB,gBAAe,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAoB,gBAAe;IAAC,mBAAkB;IAAC,eAAc,EAAE;EAAD;IAA2B,kBAAiB,EAAE;EAAD;IAAgB,cAAa,EAAE,EAAA;;AAAA;EAAyB;IAAc,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAiB,2BAA0B;IAAC,uBAAsB,EAAE;EAAD;IAAe,cAAa;IAAC,UAAS,EAAE;EAAD;IAAkB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAkB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAyB,uBAAsB,EAAE;EAAD;IAAyB,uBAAsB,EAAE;EAAD;IAAiB,cAAa;IAAC,iBAAgB;IAAC,aAAY,EAAE;EAAD;IAAwB,gBAAe,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAkB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAAyB,iBAAgB,EAAE;EAAD;IAAmB,gBAAe;IAAC,mBAAkB;IAAC,eAAc,EAAE;EAAD;IAA0B,kBAAiB,EAAE;EAAD;IAAe,cAAa,EAAE,EAAA;;AAAA;EAAyB;IAAe,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAkB,2BAA0B;IAAC,uBAAsB,EAAE;EAAD;IAAgB,cAAa;IAAC,UAAS,EAAE;EAAD;IAAmB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAAmB,qBAAoB;IAAC,wBAAuB;IAAC,oBAAmB,EAAE;EAAD;IAA0B,uBAAsB,EAAE;EAAD;IAA0B,uBAAsB,EAAE;EAAD;IAAkB,cAAa;IAAC,iBAAgB;IAAC,aAAY,EAAE;EAAD;IAAyB,gBAAe,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAmB,eAAc;IAAC,kBAAiB;IAAC,cAAa,EAAE;EAAD;IAA0B,iBAAgB,EAAE;EAAD;IAAoB,gBAAe;IAAC,mBAAkB;IAAC,eAAc,EAAE;EAAD;IAA2B,kBAAiB,EAAE;EAAD;IAAgB,cAAa,EAAE,EAAA;;AAAA;EAAS,UAAS;EAAC,eAAc;EAAC,qBAAoB;EAAC,cAAa;EAAC,6BAA4B;EAAC,kBAAiB;EAAC,mBAAkB;EAAC,iBAAgB,EAAE;;AAAD;EAAkB,eAAc,EAAE;;AAAD;EAAiE,mBAAkB,EAAE;;AAAD;EAAwD,iBAAgB;EAAC,gBAAe,EAAE;;AAAD;EAA+E,mBAAkB,EAAE;;AAAD;EAA6B,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB,EAAE;;AAAD;EAAuC,iBAAgB,EAAE;;AAAD;EAAuE,iBAAgB,EAAE;;AAAD;EAA0D,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB,EAAE;;AAAD;EAAsE,mBAAkB,EAAE;;AAAD;EAA8I,gBAAe,EAAE;;AAAD;EAA8D,iBAAgB,EAAE;;AAAD;EAAuE,iBAAgB,EAAE;;AAAD;EAA0D,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB,EAAE;;AAAD;EAAsE,mBAAkB,EAAE;;AAAD;EAA8I,gBAAe,EAAE;;AAAD;EAA8D,iBAAgB,EAAE;;AAAD;EAAmC,UAAS,EAAE;;AAAD;EAAgD,sBAAqB;EAAC,wBAAuB,EAAE;;AAAD;EAAgC,mBAAkB,EAAE;;AAAD;EAAqC,iBAAgB,EAAE;;AAAD;EAAc,aAAY;EAAC,mBAAkB,EAAE;;AAAD;EAA+C,mBAAkB,EAAE;;AAAD;EAAmC,qBAAoB;EAAC,cAAa;EAAC,0BAAyB;EAAC,eAAc;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,uBAAsB;EAAC,+BAA8B;EAAC,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAkD,iBAAgB,EAAE;;AAAD;EAAwD,mBAAkB,EAAE;;AAAD;EAA0D,mBAAkB,EAAE;;AAAD;EAAmD,mBAAkB,EAAE;;AAAD;EAAgE,sBAAqB,EAAE;;AAAD;EAAsC,YAAW;EAAC,iBAAgB;EAAC,UAAS;EAAC,gBAAe;EAAC,mBAAkB;EAAC,iBAAgB;EAAC,gBAAe;EAAC,iBAAgB;EAAC,iBAAgB;EAAC,qBAAoB,EAAE;;AAAD;EAA0B,mBAAkB;EAAC,UAAS;EAAC,SAAQ;EAAC,QAAO,EAAE;;AAAD;EAAgD,UAAS,EAAE;;AAAD;EAAgF,mBAAkB;EAAC,eAAc,EAAE;;AAAD;EAAyB,gBAAe;EAAC,mBAAkB,EAAE;;AAAD;EAAuB,2BAAU,EAAa;;AAAD;EAAqB,iBAAgB;EAAC,2BAA0B;EAAC,uBAAsB;EAAC,iBAAgB,EAAE;;AAAD;EAAuD,YAAW;EAAC,mBAAkB;EAAC,SAAQ;EAAC,QAAO;EAAC,WAAU;EAAC,sDAA+B;EAAe,aAAY,EAAE;;AAAD;EAA4B,OAAM,EAAE;;AAAD;EAA2B,UAAS,EAAE;;AAAD;EAA+B,mBAAkB,EAAE;;AAAD;EAA2E,sCAAqB,EAAa;;AAAD;EAAsG,iBAAgB,EAAE;;AAAD;EAAiF,+CAAoC,EAAS;;AAAD;EAA+C,4BAAyB,EAAE;;AAAD;EAAkE,mBAAkB;EAAC,WAAU,EAAE;;AAAD;EAAwH,sDAA+B,EAAgB;;AAAD;EAAqC,mBAAkB;EAAC,WAAU;EAAC,gCAAqB;EAAQ,2BAA0B;EAAC,oDAA+B,EAAe;;AAAD;EAAuD,iBAAgB,EAAE;;AAAD;EAA8C,WAAU,EAAE;;AAAD;EAAwB,qBAAoB;EAAC,cAAa;EAAC,6BAA4B;EAAC,kBAAiB;EAAC,YAAW;EAAC,QAAO;EAAC,iBAAgB;EAAC,oBAAmB;EAAC,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAsC,gBAAe,EAAE;;AAAD;EAA4E,UAAS;EAAC,2BAAU;EAAY,gBAAe,EAAE;;AAAD;EAAuD,2BAAU,EAAa;;AAAD;EAAS,sBAAqB,EAAE;;AAAD;EAAiB,aAAY;EAAC,gBAAe;EAAC,iBAAgB;EAAC,iBAAgB;EAAC,+BAAe;EAAe,mBAAkB;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,aAAY;EAAC,0CAAkC;EAAI,mBAAkB;EAAC,4GAAiF;EAAY,WAAU;EAAC,2MAA0K;EAAC,qCAAoC,EAAE;;AAAD;EAA2C,kBAAiB;EAAC,kBAAiB;EAAC,2BAA0B,EAAE;;AAAD;EAAqD,kBAAiB,EAAE;;AAAD;EAA0C,kBAAiB;EAAC,iBAAgB;EAAC,4BAA2B,EAAE;;AAAD;EAAoD,kBAAiB,EAAE;;AAAD;EAAwC,iBAAgB;EAAC,kBAAiB;EAAC,8BAA6B,EAAE;;AAAD;EAAkD,iBAAgB,EAAE;;AAAD;EAAuC,iBAAgB;EAAC,iBAAgB;EAAC,+BAA8B,EAAE;;AAAD;EAAiD,iBAAgB,EAAE;;AAAD;EAAkC,UAAS,EAAE;;AAAD;EAA2B,YAAW,EAAE;;AAAD;EAA2B,aAAY,EAAE;;AAAD;EAA2B,aAAY,EAAE;;AAAD;EAA2B,aAAY,EAAE;;AAAD;EAA2B,aAAY,EAAE;;AAAD;EAA2B,aAAY,EAAE;;AAAD;EAA2B,aAAY,EAAE;;AAAD;EAA2B,qBAAoB;EAAC,WAAU;EAAC,kCAA6B;EAAI,gKAAsI,EAAE;;AAAD;EAAoC,WAAU;EAAC,gEAAsD,EAAE;;AAAD;EAA0B,WAAU;EAAC,0DAAmC,EAAgB;;AAAD;EAAc,gBAAe;EAAC,gBAAe;EAAC,mBAAkB,EAAE;;AAAD;EAAwB,gBAAe,EAAE;;AAAD;EAAmC,iBAAgB;EAAC,wBAAuB,EAAE;;AAAD;EAAU,YAAW;EAAC,wBAAuB;EAAC,4BAA2B;EAAC,qBAAoB;EAAC,mBAAkB,EAAE;;AAAD;EAA8B,YAAW;EAAC,aAAY;EAAC,mBAAkB;EAAC,mBAAkB;EAAC,sCAAqB;EAAY,sDAA+B,EAAgB;;AAAD;EAAoC,mBAAkB;EAAC,SAAQ;EAAC,WAAU;EAAC,YAAW;EAAC,UAAS;EAAC,mBAAkB;EAAC,WAAU;EAAC,kCAAiB;EAAY,sDAA+B;EAAe,aAAY,EAAE;;AAAD;EAAoC,mBAAkB;EAAC,aAAY,EAAE;;AAAD;EAA6C,WAAU;EAAC,aAAY;EAAC,cAAa;EAAC,YAAW;EAAC,mBAAkB;EAAC,2BAAU,EAAa;;AAAD;EAAwD,uBAAoB;EAAC,wBAAqB;EAAC,kBAAe;EAAC,oBAAiB;EAAC,qBAAkB;EAAC,mBAAgB,EAAE;;AAAD;EAA0B,aAAY;EAAC,kBAAiB;EAAC,kBAAiB,EAAE;;AAAD;EAA+C,WAAU;EAAC,4BAAiB;EAAQ,sDAA+B,EAAgB;;AAAD;EAAW,YAAW;EAAC,iBAAgB;EAAC,aAAY;EAAC,mBAAkB,EAAE;;AAAD;EAAiB,cAAa,EAAE;;AAAD;EAAiB,gBAAe;EAAC,mBAAkB;EAAC,SAAQ;EAAC,SAAQ;EAAC,sDAA6C;EAAM,4BAA2B;EAAC,iBAAgB,EAAE;;AAAD;EAAqC,UAAS;EAAC,qBAAoB;EAAC,WAAU;EAAC,6CAAkC;EAAQ,6BAA4B;EAAC,sDAA+B;EAAe,0BAAyB;EAAC,2CAA0C,EAAE;;AAAD;EAAuC,WAAU;EAAC,sDAA+B;EAAe,0BAAyB;EAAC,sBAAqB,EAAE;;AAAD;EAAuB,qBAAoB;EAAC,0BAAyB;EAAC,uBAAsB;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,gBAAe,EAAE;;AAAD;EAAkB,mBAAkB;EAAC,aAAY,EAAE;;AAAD;EAAgD,YAAW;EAAC,aAAY;EAAC,eAAc;EAAC,mBAAkB,EAAE;;AAAD;EAA4B,oBAAmB;EAAC,gBAAe;EAAC,iBAAgB;EAAC,WAAU;EAAC,gBAAe;EAAC,kBAAiB;EAAC,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAyB,iCAAU;EAAe,0BAAyB,EAAE;;AAAD;EAAqC,iBAAgB,EAAE;;AAAD;EAAmB,YAAW;EAAC,kBAAiB,EAAE;;AAAD;EAA6C,kBAAiB;EAAC,mBAAkB,EAAE;;AAAD;EAAsD,kBAAiB;EAAC,qBAAoB;EAAC,4BAA2B,EAAE;;AAAD;EAA4C,UAAS,EAAE;;AAAD;EAAkD,mBAAkB;EAAC,gBAAe,EAAE;;AAAD;EAAwC,QAAO;EAAC,oCAAqB,EAAa;;AAAD;EAAyC,SAAQ;EAAC,mCAAqB,EAAY;;AAAD;EAAmF,gBAAe,EAAE;;AAAD;EAAgC,aAAY;EAAC,mBAAkB;EAAC,OAAM;EAAC,UAAS;EAAC,aAAY;EAAC,qBAAoB;EAAC,eAAc;EAAC,kCAAiC;EAAC,sDAA+B;EAAe,+BAA8B;EAAC,uBAAsB,EAAE;;AAAD;EAAyB,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,YAAW;EAAC,qBAAoB;EAAC,sCAAqB;EAAY,WAAU;EAAC,oDAA+B;EAAc,6BAA4B;EAAC,qBAAoB,EAAE;;AAAD;EAA0C,wHAA6F;EAAY,qBAAoB;EAAC,gCAAqB,EAAS;;AAAD;EAA2C,WAAU;EAAC,qBAAoB,EAAE;;AAAD;EAAY,sBAAqB;EAAC,mBAAkB;EAAC,qBAAoB;EAAC,+BAA8B,EAAE;;AAAD;EAA8C,+CAA8C;EAAC,sCAAiC,EAAK;;AAAD;EAA8C,wBAAuB;EAAC,oDAAmD,EAAE;;AAAD;EAAoC,WAAU;EAAC,oCAA8B;EAAI,sDAA+B,EAAgB;;AAAD;EAA2D,wBAAuB,EAAE;;AAAD;EAA4E,kFAA0E,EAAE;;AAAD;EAAiB,YAAW;EAAC,aAAY;EAAC,aAAY;EAAC,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,wCAAmC;EAAI,gCAA+B;EAAC,+BAA8B,EAAE;;AAAD;EAAiB,WAAU;EAAC,qBAAoB;EAAC,sBAAqB;EAAC,sDAA+B,EAAgB;;AAAD;EAA0B;IAAG,uCAAkC,EAAA,EAAA;;AAAK;EAAkC;IAAG,WAAU;IAAC,wCAAmC,EAAA;EAAI;IAAI,WAAU,EAAA;EAAC;IAAG,wCAAmC,EAAA,EAAA;;AAAK;EAAwB;IAAG,wBAAuB;IAAC,qBAAoB,EAAA;EAAC;IAAI,yBAAwB;IAAC,yBAAwB,EAAA;EAAC;IAAG,yBAAwB;IAAC,0BAAyB,EAAA,EAAA;;AAAE;EAAc,iBAAgB;EAAC,gBAAe;EAAC,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,wBAAuB;EAAC,oBAAmB;EAAC,2BAAU;EAAY,gBAAe;EAAC,iBAAgB,EAAE;;AAAD;EAAW,YAAW;EAAC,wBAAuB;EAAC,4BAA2B;EAAC,qBAAoB;EAAC,mBAAkB,EAAE;;AAAD;EAAgC,YAAW;EAAC,aAAY;EAAC,mBAAkB;EAAC,oBAAmB;EAAC,sDAA+B;EAAe,sCAAqB,EAAa;;AAAD;EAAiD,YAAW;EAAC,aAAY;EAAC,mBAAkB;EAAC,SAAQ;EAAC,QAAO;EAAC,0BAAyB;EAAC,mBAAkB;EAAC,4GAAiF;EAAY,4BAA2B,EAAE;;AAAD;EAAsC,mBAAkB;EAAC,aAAY,EAAE;;AAAD;EAA+C,WAAU;EAAC,aAAY;EAAC,cAAa;EAAC,YAAW;EAAC,mBAAkB;EAAC,2BAAU,EAAa;;AAAD;EAA0D,uBAAoB;EAAC,wBAAqB;EAAC,kBAAe;EAAC,oBAAiB;EAAC,qBAAkB;EAAC,mBAAgB,EAAE;;AAAD;EAAkD,YAAW;EAAC,aAAY;EAAC,UAAS;EAAC,WAAU;EAAC,mBAAkB;EAAC,SAAQ;EAAC,UAAS;EAAC,WAAU;EAAC,iBAAgB;EAAC,aAAY;EAAC,iCAAmB,EAAa;;AAAD;EAAwD,cAAa,EAAE;;AAAD;EAA4B,aAAY;EAAC,kBAAiB;EAAC,kBAAiB,EAAE;;AAAD;EAAwC,yBAAwB;EAAC,iBAAgB,EAAE;;AAAD;EAAwC,gBAAe,EAAE;;AAAD;EAAU,qBAAoB;EAAC,cAAa;EAAC,2BAA0B;EAAC,uBAAsB;EAAC,iBAAgB,EAAE;;AAAD;EAAiL,4BAAyB,EAAE;;AAAD;EAAgB,YAAW;EAAC,kBAAiB;EAAC,0BAAyB;EAAC,iBAAgB,EAAE;;AAAD;EAA8B,8BAA6B,EAAE;;AAAD;EAAyD,0BAAyB,EAAE;;AAAD;EAAmD,uBAAsB,EAAE;;AAAD;EAAyB,WAAU;EAAC,mBAAkB;EAAC,2BAAU;EAAY,gBAAe;EAAC,kBAAiB;EAAC,iBAAgB,EAAE;;AAAD;EAAiF,oBAAmB,EAAE;;AAAD;EAAoC,kBAAiB,EAAE;;AAAD;EAAkC,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,gBAAe;EAAC,2BAAU,EAAa;;AAAD;EAAyD,cAAa,EAAE;;AAAD;EAA8C,eAAc,EAAE;;AAAD;EAA6C,gBAAe,EAAE;;AAAD;EAAmC,aAAY;EAAC,gBAAe;EAAC,sDAA+B,EAAgB;;AAAD;EAA8B,aAAY;EAAC,oBAAmB;EAAC,mBAAkB;EAAC,sBAAqB;EAAC,mBAAkB;EAAC,iBAAgB;EAAC,kBAAiB;EAAC,wBAAuB;EAAC,oBAAmB,EAAE;;AAAD;EAAuB,gBAAe,EAAE;;AAAD;EAAuD,WAAU;EAAC,YAAW,EAAE;;AAAD;EAA8D,2BAAU,EAAa;;AAAD;EAAkG,WAAU,EAAE;;AAAD;EAAmD,2BAAU,EAAa;;AAAD;EAA8D,2CAAiC,EAAU;;AAAD;EAAyC,mBAAkB;EAAC,SAAQ;EAAC,UAAS;EAAC,sDAA+B;EAAe,4BAAoB;EAAO,WAAU;EAAC,2BAAU,EAAa;;AAAD;EAAsC,2BAAU,EAAa;;AAAD;EAAyB,aAAY;EAAC,mBAAkB;EAAC,sDAA+B;EAAe,2BAAU;EAAY,gBAAe;EAAC,kBAAiB,EAAE;;AAAD;EAA6D,oBAAmB,EAAE;;AAAD;EAAoC,kBAAiB,EAAE;;AAAD;EAA6D,mBAAkB;EAAC,0BAAyB,EAAE;;AAAD;EAAgE,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,uBAAsB;EAAC,+BAA8B,EAAE;;AAAD;EAAkD,2BAA0B,EAAE;;AAAD;EAAoC,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB,EAAE;;AAAD;EAA+C,oBAAmB,EAAE;;AAAD;EAA6C,YAAW;EAAC,gBAAe;EAAC,aAAY;EAAC,iBAAgB;EAAC,UAAS;EAAC,2BAAU;EAAY,gBAAe,EAAE;;AAAD;EAA8B,YAAW;EAAC,mBAAkB;EAAC,uBAAsB,EAAE;;AAAD;EAAgK,kBAAiB,EAAE;;AAAD;EAAuD,oBAAmB;EAAC,mBAAkB,EAAE;;AAAD;EAA2C,UAAS,EAAE;;AAAD;EAAqD,YAAW;EAAC,aAAY;EAAC,gBAAe,EAAE;;AAAD;EAA2D,UAAS;EAAC,UAAS,EAAE;;AAAD;EAAqB,gBAAe,EAAE;;AAAD;EAAgD,gBAAe,EAAE;;AAAD;EAAuB,sBAAqB;EAAC,gBAAe;EAAC,2BAAU,EAAa;;AAAD;EAAiC,2BAAU,EAAa;;AAAD;EAAiB,cAAa;EAAC,UAAS;EAAC,oBAAmB;EAAC,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,WAAU;EAAC,YAAW;EAAC,iBAAgB;EAAC,qBAAoB;EAAC,mBAAkB;EAAC,4GAAiF;EAAY,uBAAsB;EAAC,WAAU;EAAC,0EAA+D;EAAC,yBAAwB;EAAC,mCAAqB,EAAY;;AAAD;EAA2B,kBAAiB;EAAC,qBAAoB;EAAC,6BAAqB;EAAO,WAAU;EAAC,sDAA+B;EAAe,yBAAwB,EAAE;;AAAD;EAA0B,uBAAsB,EAAE;;AAAD;EAAqC,cAAa;EAAC,oBAAmB,EAAE;;AAAD;EAAgE,gBAAe,EAAE;;AAAD;EAA2F,gBAAe,EAAE;;AAAD;EAAkC,kBAAiB;EAAC,2BAAU,EAAa;;AAAD;EAA4B,gBAAe,EAAE;;AAAD;EAAe,kBAAiB,EAAE;;AAAD;EAA2B,mBAAkB;EAAC,uBAAsB,EAAE;;AAAD;EAAyB,YAAW;EAAC,QAAO;EAAC,gBAAe,EAAE;;AAAD;EAAoC,aAAY;EAAC,qBAAoB;EAAC,cAAa;EAAC,YAAW;EAAC,QAAO;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,mBAAkB;EAAC,0BAAyB;EAAC,8BAA6B;EAAC,2BAAU;EAAY,gBAAe,EAAE;;AAAD;EAAkE,kBAAiB;EAAC,kBAAiB,EAAE;;AAAD;EAA+C,YAAW;EAAC,gBAAe;EAAC,eAAc,EAAE;;AAAD;EAAqD,cAAa,EAAE;;AAAD;EAAgE,WAAU;EAAC,aAAY;EAAC,gBAAe,EAAE;;AAAD;EAA+D,2BAAU,EAAa;;AAAD;EAAkE,2BAAU,EAAa;;AAAD;EAAgD,kBAAiB,EAAE;;AAAD;EAA2C,gBAAe,EAAE;;AAAD;EAA2B,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,QAAO;EAAC,YAAW;EAAC,qBAAoB;EAAC,WAAU;EAAC,sDAA+B;EAAe,yBAAwB,EAAE;;AAAD;EAAqC,qBAAoB;EAAC,WAAU;EAAC,6BAAqB,EAAQ;;AAAD;EAAuC,iBAAgB;EAAC,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAS,YAAW;EAAC,qBAAoB;EAAC,cAAa;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,mBAAkB,EAAE;;AAAD;EAA6B,4BAAyB,EAAE;;AAAD;EAA4C,yDAAkC,EAAgB;;AAAD;EAA6B,aAAY;EAAC,iBAAgB;EAAC,mBAAkB;EAAC,WAAU;EAAC,qBAAoB;EAAC,cAAa;EAAC,sDAA+B,EAAgB;;AAAD;EAAsD,iBAAgB,EAAE;;AAAD;EAA+D,oBAAmB,EAAE;;AAAD;EAAyC,sBAAqB;EAAC,wBAAuB,EAAE;;AAAD;EAAqD,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAsC,mBAAkB;EAAC,0BAAyB,EAAE;;AAAD;EAAwB,gBAAe;EAAC,iBAAgB;EAAC,UAAS;EAAC,gBAAe;EAAC,sBAAqB;EAAC,mBAAkB;EAAC,gBAAe;EAAC,UAAS;EAAC,iBAAgB;EAAC,sDAA+B;EAAe,qBAAoB;EAAC,gBAAe;EAAC,iBAAgB;EAAC,0BAAyB,EAAE;;AAAD;EAAoC,gBAAe;EAAC,qBAAoB;EAAC,0BAAyB;EAAC,uBAAsB;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,wBAAuB,EAAE;;AAAD;EAAkC,qBAAoB;EAAC,cAAa;EAAC,sBAAqB;EAAC,kBAAiB;EAAC,sBAAqB;EAAC,wBAAuB;EAAC,uBAAsB;EAAC,oBAAmB,EAAE;;AAAD;EAA2C,UAAS,EAAE;;AAAD;EAA2B,YAAW;EAAC,mBAAkB;EAAC,UAAS;EAAC,QAAO;EAAC,gCAAqB,EAAS;;AAAD;EAA6C,4BAAyB,EAAE;;AAAD;EAAuC,4IAAwG,EAAe;;AAAD;EAAsC,4IAAwG,EAAe;;AAAD;EAA0B,YAAW;EAAC,UAAS;EAAC,mBAAkB;EAAC,iBAAgB,EAAE;;AAAD;EAA0B,cAAa;EAAC,mBAAkB;EAAC,OAAM;EAAC,SAAQ;EAAC,UAAS;EAAC,QAAO;EAAC,yBAAoB;EAAI,4DAAqC,EAAgB;;AAAD;EAAiB,cAAa;EAAC,mBAAkB;EAAC,OAAM;EAAC,QAAO;EAAC,SAAQ,EAAE;;AAAD;EAAY,iBAAgB;EAAC,eAAc;EAAC,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,2BAA0B;EAAC,sBAAqB;EAAC,wBAAuB;EAAC,oBAAmB;EAAC,mBAAkB;EAAC,sDAA+B;EAAe,gCAAqB,EAAS;;AAAD;EAAqB,iBAAgB,EAAE;;AAAD;EAA+B,iBAAgB,EAAE;;AAAD;EAA8B,iBAAgB,EAAE;;AAAD;EAA2C,aAAY,EAAE;;AAAD;EAAsB,iBAAgB,EAAE;;AAAD;EAA+E,kBAAiB,EAAE;;AAAD;EAAqB,kBAAiB;EAAC,4BAA2B;EAAC,uBAAsB,EAAE;;AAAD;EAA8E,kBAAiB,EAAE;;AAAD;EAA8B,kBAAiB,EAAE;;AAAD;EAA6C,YAAW,EAAE;;AAAD;EAA4E,4CAAqB,EAAiB;;AAAD;EAA8C,mBAAkB,EAAE;;AAAD;EAAsE,sBAAqB;EAAC,wBAAuB,EAAE;;AAAD;EAAoE,kBAAiB,EAAE;;AAAD;EAAkC,YAAW;EAAC,aAAY;EAAC,qBAAoB;EAAC,cAAa;EAAC,uBAAsB;EAAC,oBAAmB;EAAC,2BAA0B;EAAC,uBAAsB,EAAE;;AAAD;EAAyD,eAAc;EAAC,mBAAkB,EAAE;;AAAD;EAAwD,eAAc,EAAE;;AAAD;EAAmC,eAAc;EAAC,mBAAkB,EAAE;;AAAD;EAAkC,eAAc,EAAE;;AAAD;EAA+F,2CAAqB,EAAgB;;AAAD;EAAsB,UAAS;EAAC,gBAAe;EAAC,iBAAgB,EAAE;;AAAD;EAAkC,iBAAgB,EAAE;;AAAD;EAAqB,WAAU;EAAC,eAAc;EAAC,YAAW;EAAC,QAAO,EAAE;;AAAD;EAAY,aAAY;EAAC,eAAc;EAAC,gBAAe;EAAC,aAAY;EAAC,qBAAoB;EAAC,yCAAqB;EAAe,mBAAkB;EAAC,WAAU;EAAC,6BAA4B;EAAC,sDAA+B;EAAe,yBAAwB;EAAC,qBAAoB;EAAC,YAAW;EAAC,8CAA6C;EAAC,gBAAe;EAAC,kBAAiB;EAAC,qBAAoB;EAAC,oBAAmB,EAAE;;AAAD;EAAsB,WAAU;EAAC,sDAA+B;EAAe,yBAAwB,EAAE;;AAAD;EAA4B,gCAA6B,EAAE;;AAAD;EAA8B,4BAAyB,EAAE;;AAAD;EAA2B,kBAAiB;EAAC,gCAAmB,EAAY;;AAAD;EAAqC,2BAAmB,EAAQ;;AAAD;EAA6B,kBAAiB;EAAC,gCAAmB,EAAY;;AAAD;EAAuC,2BAAoB,EAAO;;AAAD;EAA8B,iBAAgB;EAAC,iCAAmB,EAAa;;AAAD;EAAwC,2BAAmB,EAAQ;;AAAD;EAA4B,mBAAkB;EAAC,+BAAmB,EAAW;;AAAD;EAAsC,2BAAoB,EAAO;;AAAD;EAAe,mBAAkB;EAAC,WAAU,EAAE;;AAAD;EAAmB,4GAAiF,EAAa;;AAAD;EAAmB,4GAAiF,EAAa;;AAAD;EAAmB,4GAAiF,EAAa;;AAAD;EAAmB,6GAAkF,EAAa;;AAAD;EAAmB,6GAAkF,EAAa;;AAAD;EAAmB,8GAAmF,EAAa;;AAAD;EAAmB,sHAA2F,EAAa;;AAAD;EAAmB,sHAA2F,EAAa;;AAAD;EAAmB,sHAA2F,EAAa;;AAAD;EAAoB,uHAA4F,EAAa;;AAAD;EAAoB,uHAA4F,EAAa;;AAAD;EAAoB,uHAA4F,EAAa;;AAAD;EAAoB,uHAA4F,EAAa;;AAAD;EAAoB,uHAA4F,EAAa;;AAAD;EAAoB,uHAA4F,EAAa;;AAAD;EAAoB,wHAA6F,EAAa;;AAAD;EAAoB,wHAA6F,EAAa;;AAAD;EAAoB,wHAA6F,EAAa;;AAAD;EAAoB,wHAA6F,EAAa;;AAAD;EAAoB,yHAA8F,EAAa;;AAAD;EAAoB,yHAA8F,EAAa;;AAAD;EAAoB,yHAA8F,EAAa;;AAAD;EAAoB,yHAA8F,EAAa;;AAAD;EAAoB,yHAA8F,EAAa","file":"vue-material.css","sourcesContent":[".md-avatar{width:40px;min-width:40px;height:40px;min-height:40px;margin:auto;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;border-radius:40px;vertical-align:middle}.md-avatar.md-large{width:64px;min-width:64px;height:64px;min-height:64px;border-radius:64px}.md-avatar.md-large .md-icon{width:40px;min-width:40px;height:40px;min-height:40px;font-size:40px;line-height:40px}.md-avatar.md-avatar-icon{background-color:rgba(0,0,0,.38)}.md-avatar.md-avatar-icon .md-icon{color:#fff}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ink-ripple{border-radius:50%}.md-avatar .md-ink-ripple .md-ripple.md-active{animation-duration:.9s}.md-avatar-tooltip.md-tooltip-top{margin-top:-8px}.md-avatar-tooltip.md-tooltip-right{margin-left:8px}.md-avatar-tooltip.md-tooltip-bottom{margin-top:8px}.md-avatar-tooltip.md-tooltip-left{margin-left:-8px}.md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);transform:translateZ(0);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-backdrop.md-active{opacity:1;pointer-events:auto}.md-backdrop.md-transparent{background:none}.md-bottom-bar{width:100%;min-width:100%;height:56px;-ms-flex-pack:center;justify-content:center;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-bottom-bar,.md-bottom-bar-item{position:relative;display:-ms-flexbox;display:flex}.md-bottom-bar-item{max-width:168px;min-width:80px;height:100%;padding:8px 12px 10px;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1;cursor:pointer;border:none;background:transparent;transform:translateZ(0);color:currentColor;font-family:inherit;font-size:14px;line-height:1em;text-decoration:none}.md-bottom-bar-item.md-active{padding-top:6px}.md-bottom-bar-item.md-active .md-text{transform:scale(1) translateZ(0)}.md-bottom-bar-item.md-active .md-icon,.md-bottom-bar-item.md-active .md-text{color:currentColor}.md-bottom-bar.md-shift .md-bottom-bar-item{min-width:56px;max-width:96px;position:static;-ms-flex:1 1 32px;flex:1 1 32px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:flex,min-width,max-width;transition-property:flex,min-width,max-width,-ms-flex}.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item .md-text{opacity:0;transform:scale(1) translate3d(0,6px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;-ms-flex:1 1 72px;flex:1 1 72px}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{opacity:1}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon{transform:scale(1) translateZ(0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,2px,0)}.md-bottom-bar-item .md-text{transform:scale(.8571) translateY(2px);transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear,opacity .15s linear}.md-bottom-bar-item .md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1),color .15s linear}.md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:none;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:500;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button,.md-button:focus{outline:none}.md-button::-moz-focus-inner{border:0}.md-button:hover:not([disabled]):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button:hover:not([disabled]).md-raised{background-color:rgba(0,0,0,.12)}.md-button:active:not([disabled]){background-color:hsla(0,0%,60%,.4)}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{margin-top:1px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button:not([disabled]):hover{background:none}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px;line-height:32px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-fab-top-left{position:absolute;top:16px;left:16px}.md-button.md-fab.md-fab-top-center{position:absolute;top:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-top-right{position:absolute;top:16px;right:16px}.md-button.md-fab.md-fab-bottom-left{position:absolute;bottom:16px;left:16px}.md-button.md-fab.md-fab-bottom-center{position:absolute;bottom:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-bottom-right{position:absolute;right:16px;bottom:16px}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:40px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{color:rgba(0,0,0,.26);cursor:default}.md-button[disabled].md-fab,.md-button[disabled].md-raised{background-color:rgba(0,0,0,.12)}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}.md-button-toggle{width:auto;display:-ms-flexbox;display:flex}.md-button-toggle>.md-button{margin:0;overflow:hidden;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-toggle>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-toggle>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}.md-button-toggle>.md-button:not([disabled]){color:rgba(0,0,0,.54)}.md-button-toggle>.md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button-toggle>.md-button .md-ink-ripple{border-radius:2px}.md-card{overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:1;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-card.md-with-hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card .md-card-media{position:relative}.md-card .md-card-media.md-16-9{overflow:hidden}.md-card .md-card-media.md-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card .md-card-media.md-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-4-3{overflow:hidden}.md-card .md-card-media.md-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card .md-card-media.md-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-1-1{overflow:hidden}.md-card .md-card-media.md-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card .md-card-media.md-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media+.md-card-header{padding-top:24px}.md-card .md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card .md-card-media img{width:100%}.md-card .md-card-header{padding:16px}.md-card .md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card .md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card .md-card-header:last-child{margin-bottom:8px}.md-card .md-card-header.md-card-header-flex{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-header+.md-card-content{padding-top:0}.md-card .md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card .md-card-header .md-avatar{margin-right:16px;float:left}.md-card .md-card-header .md-avatar~.md-title{font-size:14px}.md-card .md-card-header .md-avatar~.md-subhead,.md-card .md-card-header .md-avatar~.md-title{font-weight:500;line-height:20px}.md-card .md-card-header .md-button{margin:0}.md-card .md-card-header .md-button:last-child{margin-right:-4px}.md-card .md-card-header .md-button+.md-button{margin-left:8px}.md-card .md-card-header .md-card-header-text{-ms-flex:1;flex:1}.md-card .md-card-header .md-card-media{width:80px;-ms-flex:0 0 80px;flex:0 0 80px;height:80px;margin-left:16px}.md-card .md-card-header .md-card-media.md-medium{width:120px;-ms-flex:0 0 120px;flex:0 0 120px;height:120px}.md-card .md-card-header .md-card-media.md-big{width:160px;-ms-flex:0 0 160px;flex:0 0 160px;height:160px}.md-card .md-subhead,.md-card .md-subheading,.md-card .md-title{margin:0;font-weight:400}.md-card .md-subhead{opacity:.54;font-size:14px;letter-spacing:.01em;line-height:20px}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-title{font-size:24px;letter-spacing:0;line-height:32px}.md-card .md-card-media-actions{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-media-actions .md-card-media{max-width:240px;max-height:240px;-ms-flex:1;flex:1}.md-card .md-card-media-actions .md-card-actions{margin-left:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.md-card .md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card .md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card .md-card-content:last-child{padding-bottom:24px}.md-card .md-card-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.md-card .md-card-actions .md-button{margin:0}.md-card .md-card-actions .md-button:first-child{margin-left:0}.md-card .md-card-actions .md-button:last-child{margin-right:0}.md-card .md-card-actions .md-button+.md-button{margin-left:4px}.md-card .md-card-area,.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card .md-card-media-cover{position:relative;color:#fff}.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card .md-card-media-cover .md-card-area{position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card .md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card .md-card-media-cover .md-subhead{opacity:1}.md-card .md-card-expand{overflow:hidden}.md-card .md-card-expand.md-active [md-expand-trigger]{transform:rotate(180deg) translate3D(0,0,0)}.md-card .md-card-expand.md-active .md-card-content{margin-top:0!important;opacity:1}.md-card .md-card-expand .md-card-actions{padding-top:0;position:relative;z-index:2}.md-card .md-card-expand [md-expand-trigger]{transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card .md-card-expand .md-card-content{padding-top:4px;position:relative;z-index:1;opacity:0;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:margin}.md-checkbox{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-checkbox .md-checkbox-container{width:20px;height:20px;position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:none}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;position:absolute;top:0;left:5px;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-checkbox .md-checkbox-label{height:20px;padding-left:8px;line-height:20px}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 0);mask-image:radial-gradient(circle,#fff 100%,#000 0);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;transform:scale(0);background-color:currentColor;opacity:.26;border-radius:50%}.md-ripple.md-active{animation:ripple 1s cubic-bezier(.25,.8,.25,1)}@keyframes ripple{to{transform:scale(1.5);opacity:0}}.md-dialog-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:108}.md-dialog-container.md-active{pointer-events:auto}.md-dialog-container.md-active .md-dialog{opacity:1!important;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform}.md-dialog-backdrop{position:fixed;z-index:109}.md-dialog{min-width:280px;max-width:80%;max-height:80%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;overflow:hidden;position:relative;z-index:110;outline:none;border-radius:2px;opacity:0;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);transform:scale(.9,.85);transform-origin:center center;transition:opacity .4s cubic-bezier(.25,.8,.25,1),transform .4s cubic-bezier(.25,.8,.25,1) .05s;will-change:opacity,transform}.md-dialog.md-reference{transform-origin:top center}.md-dialog.md-transition-off{transition:none!important}.md-dialog p{margin:0}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0}.md-dialog-content{padding:0 24px 24px;-ms-flex:1;flex:1;overflow:auto;position:relative;background:linear-gradient(180deg,#fff 0,#fff 1px,transparent 0),linear-gradient(0deg,#fff 0,#fff 3px,transparent 0),linear-gradient(180deg,rgba(0,0,0,.12) 0,rgba(0,0,0,.12) 1px,transparent 0),linear-gradient(0deg,rgba(0,0,0,.2) 1px,rgba(0,0,0,.2) 2px,transparent 0);background-attachment:local,local,scroll,scroll}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-body{margin:0 -24px;padding:0 24px;overflow:auto}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;background-color:#fff;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0;padding:0 8px}.md-dialog-actions .md-button+.md-button{margin-left:8px}.md-divider{height:1px;margin:0;padding:0;display:block;border:0;background-color:rgba(0,0,0,.12)}.md-divider.md-inset{margin-left:72px}.md-icon{width:24px;min-width:24px;height:24px;min-height:24px;margin:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;fill:currentColor;vertical-align:middle}.md-input-container{min-height:48px;margin:4px 0 24px;padding-top:16px;position:relative}.md-input-container:after{height:1px;right:0;bottom:0;background-color:rgba(0,0,0,.12);content:\" \"}.md-input-container:after,.md-input-container label{position:absolute;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container label{top:23px;pointer-events:none;transition-duration:.3s;color:rgba(0,0,0,.54);font-size:16px;line-height:20px}.md-input-container input,.md-input-container textarea{width:100%;height:32px;padding:0;display:block;border:none;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:font-size;color:rgba(0,0,0,.54);font-family:inherit;font-size:1px;line-height:32px}.md-input-container input:focus,.md-input-container textarea:focus{outline:none}.md-input-container input::-webkit-input-placeholder,.md-input-container textarea::-webkit-input-placeholder{color:rgba(0,0,0,.54);font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container textarea{min-height:32px;max-height:230px;padding:5px 0;resize:none;line-height:1.3em}.md-input-container .md-error{height:20px;display:block!important;position:absolute;opacity:0;transform:translate3d(0,-8px,0);transition:all .3s cubic-bezier(.55,0,.55,.2);font-size:12px}.md-input-container .md-count{height:20px;position:absolute;right:0;font-size:12px}.md-input-container.md-input-placeholder label{pointer-events:auto;top:10px;opacity:0;font-size:12px}.md-input-container.md-input-placeholder input,.md-input-container.md-input-placeholder textarea{font-size:16px}.md-input-container.md-has-value label,.md-input-container.md-input-focused label{pointer-events:auto;top:0;opacity:1;font-size:12px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea,.md-input-container.md-input-focused input,.md-input-container.md-input-focused textarea{font-size:16px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea{color:rgba(0,0,0,.87)}.md-input-container.md-input-inline label{pointer-events:none}.md-input-container.md-input-inline.md-input-focused label{top:23px;font-size:16px}.md-input-container.md-input-inline.md-has-value label{opacity:0}.md-input-container.md-input-disabled:after{background:0 100% repeat-x;background-image:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0);background-size:4px 1px}.md-input-container.md-input-disabled input,.md-input-container.md-input-disabled label,.md-input-container.md-input-disabled textarea{color:rgba(0,0,0,.38)}.md-input-container.md-has-password.md-input-focused .md-toggle-password{color:rgba(0,0,0,.54)}.md-input-container.md-has-password .md-toggle-password{margin:0;position:absolute;right:0;bottom:-2px;color:rgba(0,0,0,.38)}.md-input-container.md-has-password .md-toggle-password .md-ink-ripple{color:rgba(0,0,0,.87)}.md-input-container.md-input-invalid .md-error{opacity:1;transform:translateZ(0)}.md-input-container.md-input-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";font-size:12px;line-height:1em;vertical-align:top}.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after{color:rgba(0,0,0,.87)}.md-layout{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex:1;flex:1}.md-row{-ms-flex-direction:row;flex-direction:row}.md-column{-ms-flex-direction:column;flex-direction:column}.md-layout.md-container{width:100%;max-width:1200px}.md-layout.md-container.md-centered{margin:0 auto}.md-gutter:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter .md-column>.md-layout{padding-top:12px;padding-bottom:12px}@media (max-width:944px){.md-gutter:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter .md-column>.md-layout{padding-top:8px;padding-bottom:8px}}.md-gutter-8:not(.md-column){margin-right:-4px;margin-left:-4px}.md-gutter-8:not(.md-column)>.md-layout{padding-right:4px;padding-left:4px}.md-gutter-8 .md-column{margin-top:-4px;margin-bottom:-4px}.md-gutter-8 .md-column>.md-layout{padding-top:4px;padding-bottom:4px}.md-gutter-16:not(.md-column){margin-right:-8px;margin-left:-8px}.md-gutter-16:not(.md-column)>.md-layout{padding-right:8px;padding-left:8px}.md-gutter-16 .md-column{margin-top:-8px;margin-bottom:-8px}.md-gutter-16 .md-column>.md-layout{padding-top:8px;padding-bottom:8px}.md-gutter-24:not(.md-column){margin-right:-12px;margin-left:-12px}.md-gutter-24:not(.md-column)>.md-layout{padding-right:12px;padding-left:12px}.md-gutter-24 .md-column{margin-top:-12px;margin-bottom:-12px}.md-gutter-24 .md-column>.md-layout{padding-top:12px;padding-bottom:12px}.md-gutter-40:not(.md-column){margin-right:-20px;margin-left:-20px}.md-gutter-40:not(.md-column)>.md-layout{padding-right:20px;padding-left:20px}.md-gutter-40 .md-column{margin-top:-20px;margin-bottom:-20px}.md-gutter-40 .md-column>.md-layout{padding-top:20px;padding-bottom:20px}.md-flex{-ms-flex:1 1;flex:1 1}.md-flex-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-33{margin-left:33.33333%}.md-flex-offset-66{margin-left:66.66666%}.md-flex-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-5{margin-left:5%}.md-flex-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-10{margin-left:10%}.md-flex-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-15{margin-left:15%}.md-flex-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-20{margin-left:20%}.md-flex-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-25{margin-left:25%}.md-flex-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-30{margin-left:30%}.md-flex-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-35{margin-left:35%}.md-flex-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-40{margin-left:40%}.md-flex-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-45{margin-left:45%}.md-flex-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-50{margin-left:50%}.md-flex-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-55{margin-left:55%}.md-flex-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-60{margin-left:60%}.md-flex-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-65{margin-left:65%}.md-flex-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-70{margin-left:70%}.md-flex-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-75{margin-left:75%}.md-flex-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-80{margin-left:80%}.md-flex-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-85{margin-left:85%}.md-flex-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-90{margin-left:90%}.md-flex-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-95{margin-left:95%}.md-flex-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-100{margin-left:100%}@media (min-width:1904px){.md-row-xlarge{-ms-flex-direction:row;flex-direction:row}.md-column-xlarge{-ms-flex-direction:column;flex-direction:column}.md-flex-xlarge{-ms-flex:1 1;flex:1 1}.md-flex-xlarge-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xlarge-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xlarge-33{margin-left:33.33333%}.md-flex-offset-xlarge-66{margin-left:66.66666%}.md-flex-xlarge-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xlarge-5{margin-left:5%}.md-flex-xlarge-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xlarge-10{margin-left:10%}.md-flex-xlarge-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xlarge-15{margin-left:15%}.md-flex-xlarge-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xlarge-20{margin-left:20%}.md-flex-xlarge-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xlarge-25{margin-left:25%}.md-flex-xlarge-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xlarge-30{margin-left:30%}.md-flex-xlarge-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xlarge-35{margin-left:35%}.md-flex-xlarge-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xlarge-40{margin-left:40%}.md-flex-xlarge-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xlarge-45{margin-left:45%}.md-flex-xlarge-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xlarge-50{margin-left:50%}.md-flex-xlarge-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xlarge-55{margin-left:55%}.md-flex-xlarge-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xlarge-60{margin-left:60%}.md-flex-xlarge-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xlarge-65{margin-left:65%}.md-flex-xlarge-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xlarge-70{margin-left:70%}.md-flex-xlarge-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xlarge-75{margin-left:75%}.md-flex-xlarge-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xlarge-80{margin-left:80%}.md-flex-xlarge-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xlarge-85{margin-left:85%}.md-flex-xlarge-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xlarge-90{margin-left:90%}.md-flex-xlarge-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xlarge-95{margin-left:95%}.md-flex-xlarge-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xlarge-100{margin-left:100%}.md-hide-xlarge{display:none}}@media (max-width:1903px){.md-row-large{-ms-flex-direction:row;flex-direction:row}.md-column-large{-ms-flex-direction:column;flex-direction:column}.md-flex-large{-ms-flex:1 1;flex:1 1}.md-flex-large-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-large-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-large-33{margin-left:33.33333%}.md-flex-offset-large-66{margin-left:66.66666%}.md-flex-large-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-large-5{margin-left:5%}.md-flex-large-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-large-10{margin-left:10%}.md-flex-large-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-large-15{margin-left:15%}.md-flex-large-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-large-20{margin-left:20%}.md-flex-large-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-large-25{margin-left:25%}.md-flex-large-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-large-30{margin-left:30%}.md-flex-large-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-large-35{margin-left:35%}.md-flex-large-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-large-40{margin-left:40%}.md-flex-large-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-large-45{margin-left:45%}.md-flex-large-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-large-50{margin-left:50%}.md-flex-large-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-large-55{margin-left:55%}.md-flex-large-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-large-60{margin-left:60%}.md-flex-large-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-large-65{margin-left:65%}.md-flex-large-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-large-70{margin-left:70%}.md-flex-large-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-large-75{margin-left:75%}.md-flex-large-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-large-80{margin-left:80%}.md-flex-large-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-large-85{margin-left:85%}.md-flex-large-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-large-90{margin-left:90%}.md-flex-large-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-large-95{margin-left:95%}.md-flex-large-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-large-100{margin-left:100%}.md-hide-large{display:none}}@media (max-width:1264px){.md-row-medium{-ms-flex-direction:row;flex-direction:row}.md-column-medium{-ms-flex-direction:column;flex-direction:column}.md-flex-medium{-ms-flex:1 1;flex:1 1}.md-flex-medium-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-medium-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-medium-33{margin-left:33.33333%}.md-flex-offset-medium-66{margin-left:66.66666%}.md-flex-medium-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-medium-5{margin-left:5%}.md-flex-medium-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-medium-10{margin-left:10%}.md-flex-medium-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-medium-15{margin-left:15%}.md-flex-medium-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-medium-20{margin-left:20%}.md-flex-medium-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-medium-25{margin-left:25%}.md-flex-medium-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-medium-30{margin-left:30%}.md-flex-medium-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-medium-35{margin-left:35%}.md-flex-medium-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-medium-40{margin-left:40%}.md-flex-medium-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-medium-45{margin-left:45%}.md-flex-medium-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-medium-50{margin-left:50%}.md-flex-medium-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-medium-55{margin-left:55%}.md-flex-medium-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-medium-60{margin-left:60%}.md-flex-medium-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-medium-65{margin-left:65%}.md-flex-medium-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-medium-70{margin-left:70%}.md-flex-medium-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-medium-75{margin-left:75%}.md-flex-medium-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-medium-80{margin-left:80%}.md-flex-medium-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-medium-85{margin-left:85%}.md-flex-medium-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-medium-90{margin-left:90%}.md-flex-medium-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-medium-95{margin-left:95%}.md-flex-medium-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-medium-100{margin-left:100%}.md-hide-medium{display:none}}@media (max-width:944px){.md-row-small{-ms-flex-direction:row;flex-direction:row}.md-column-small{-ms-flex-direction:column;flex-direction:column}.md-flex-small{-ms-flex:1 1;flex:1 1}.md-flex-small-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-small-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-small-33{margin-left:33.33333%}.md-flex-offset-small-66{margin-left:66.66666%}.md-flex-small-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-small-5{margin-left:5%}.md-flex-small-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-small-10{margin-left:10%}.md-flex-small-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-small-15{margin-left:15%}.md-flex-small-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-small-20{margin-left:20%}.md-flex-small-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-small-25{margin-left:25%}.md-flex-small-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-small-30{margin-left:30%}.md-flex-small-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-small-35{margin-left:35%}.md-flex-small-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-small-40{margin-left:40%}.md-flex-small-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-small-45{margin-left:45%}.md-flex-small-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-small-50{margin-left:50%}.md-flex-small-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-small-55{margin-left:55%}.md-flex-small-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-small-60{margin-left:60%}.md-flex-small-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-small-65{margin-left:65%}.md-flex-small-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-small-70{margin-left:70%}.md-flex-small-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-small-75{margin-left:75%}.md-flex-small-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-small-80{margin-left:80%}.md-flex-small-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-small-85{margin-left:85%}.md-flex-small-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-small-90{margin-left:90%}.md-flex-small-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-small-95{margin-left:95%}.md-flex-small-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-small-100{margin-left:100%}.md-hide-small{display:none}}@media (max-width:600px){.md-row-xsmall{-ms-flex-direction:row;flex-direction:row}.md-column-xsmall{-ms-flex-direction:column;flex-direction:column}.md-flex-xsmall{-ms-flex:1 1;flex:1 1}.md-flex-xsmall-33{min-width:33.33333%;-ms-flex:0 1 33.33333%;flex:0 1 33.33333%}.md-flex-xsmall-66{min-width:33.33333%;-ms-flex:0 1 66.66666%;flex:0 1 66.66666%}.md-flex-offset-xsmall-33{margin-left:33.33333%}.md-flex-offset-xsmall-66{margin-left:66.66666%}.md-flex-xsmall-5{min-width:5%;-ms-flex:0 1 5%;flex:0 1 5%}.md-flex-offset-xsmall-5{margin-left:5%}.md-flex-xsmall-10{min-width:10%;-ms-flex:0 1 10%;flex:0 1 10%}.md-flex-offset-xsmall-10{margin-left:10%}.md-flex-xsmall-15{min-width:15%;-ms-flex:0 1 15%;flex:0 1 15%}.md-flex-offset-xsmall-15{margin-left:15%}.md-flex-xsmall-20{min-width:20%;-ms-flex:0 1 20%;flex:0 1 20%}.md-flex-offset-xsmall-20{margin-left:20%}.md-flex-xsmall-25{min-width:25%;-ms-flex:0 1 25%;flex:0 1 25%}.md-flex-offset-xsmall-25{margin-left:25%}.md-flex-xsmall-30{min-width:30%;-ms-flex:0 1 30%;flex:0 1 30%}.md-flex-offset-xsmall-30{margin-left:30%}.md-flex-xsmall-35{min-width:35%;-ms-flex:0 1 35%;flex:0 1 35%}.md-flex-offset-xsmall-35{margin-left:35%}.md-flex-xsmall-40{min-width:40%;-ms-flex:0 1 40%;flex:0 1 40%}.md-flex-offset-xsmall-40{margin-left:40%}.md-flex-xsmall-45{min-width:45%;-ms-flex:0 1 45%;flex:0 1 45%}.md-flex-offset-xsmall-45{margin-left:45%}.md-flex-xsmall-50{min-width:50%;-ms-flex:0 1 50%;flex:0 1 50%}.md-flex-offset-xsmall-50{margin-left:50%}.md-flex-xsmall-55{min-width:55%;-ms-flex:0 1 55%;flex:0 1 55%}.md-flex-offset-xsmall-55{margin-left:55%}.md-flex-xsmall-60{min-width:60%;-ms-flex:0 1 60%;flex:0 1 60%}.md-flex-offset-xsmall-60{margin-left:60%}.md-flex-xsmall-65{min-width:65%;-ms-flex:0 1 65%;flex:0 1 65%}.md-flex-offset-xsmall-65{margin-left:65%}.md-flex-xsmall-70{min-width:70%;-ms-flex:0 1 70%;flex:0 1 70%}.md-flex-offset-xsmall-70{margin-left:70%}.md-flex-xsmall-75{min-width:75%;-ms-flex:0 1 75%;flex:0 1 75%}.md-flex-offset-xsmall-75{margin-left:75%}.md-flex-xsmall-80{min-width:80%;-ms-flex:0 1 80%;flex:0 1 80%}.md-flex-offset-xsmall-80{margin-left:80%}.md-flex-xsmall-85{min-width:85%;-ms-flex:0 1 85%;flex:0 1 85%}.md-flex-offset-xsmall-85{margin-left:85%}.md-flex-xsmall-90{min-width:90%;-ms-flex:0 1 90%;flex:0 1 90%}.md-flex-offset-xsmall-90{margin-left:90%}.md-flex-xsmall-95{min-width:95%;-ms-flex:0 1 95%;flex:0 1 95%}.md-flex-offset-xsmall-95{margin-left:95%}.md-flex-xsmall-100{min-width:100%;-ms-flex:0 1 100%;flex:0 1 100%}.md-flex-offset-xsmall-100{margin-left:100%}.md-hide-xsmall{display:none}}.md-list{margin:0;padding:8px 0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;position:relative;list-style:none}.md-list.md-dense{padding:4px 0}.md-list.md-dense .md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list.md-dense .md-list-item .md-list-item-container{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child{margin-right:24px}.md-list.md-dense .md-avatar{width:32px;min-width:32px;height:32px;min-height:32px}.md-list.md-dense .md-list-item-expand{min-height:40px}.md-list.md-double-line.md-dense .md-list-item .md-list-item-container{min-height:60px}.md-list.md-double-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-double-line .md-list-item .md-list-item-container{min-height:72px}.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container{min-height:76px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-triple-line .md-list-item .md-list-item-container{min-height:88px}.md-list.md-triple-line .md-avatar{margin:0}.md-list.md-triple-line .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-list-item{height:auto;position:relative}.md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list-item .md-list-item-holder{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1}.md-list-item .md-list-item-holder>.md-ink-ripple{border-radius:0}.md-list-item .md-list-item-holder>.md-icon:first-child{margin-right:32px}.md-list-item .md-list-item-holder .md-avatar:first-child{margin-right:16px}.md-list-item .md-list-item-holder .md-list-action{margin:0 -2px 0 0}.md-list-item .md-list-item-holder .md-list-action:nth-child(3){margin:0 -2px 0 16px}.md-list-item .md-list-item-container{width:100%;min-height:48px;margin:0;padding:0 16px;position:relative;border-radius:0;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item .md-divider{position:absolute;bottom:0;right:0;left:0}.md-list-item .md-avatar,.md-list-item .md-icon{margin:0}.md-list-item .md-avatar:first-of-type+*,.md-list-item .md-icon:first-of-type+*{-ms-flex:1 1 auto;flex:1 1 auto}.md-list-item .md-avatar{margin-top:8px;margin-bottom:8px}.md-list-item .md-icon{color:rgba(0,0,0,.54)}.md-list-item-expand{min-height:48px;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow:hidden}.md-list-item-expand:after,.md-list-item-expand:before{height:1px;position:absolute;right:0;left:0;z-index:3;transition:all .4s cubic-bezier(.25,.8,.25,1);content:\" \"}.md-list-item-expand:before{top:0}.md-list-item-expand:after{bottom:0}.md-list-item-expand.md-active{position:relative}.md-list-item-expand.md-active:after,.md-list-item-expand.md-active:before{background-color:rgba(0,0,0,.12)}.md-list-item-expand.md-active:first-of-type:before,.md-list-item-expand.md-active:last-of-type:after{background:none}.md-list-item-expand.md-active>.md-list-item-container .md-list-expand-indicator{transform:rotate(180deg) translate3D(0,0,0)}.md-list-item-expand.md-active>.md-list-expand{margin-bottom:0!important}.md-list-item-expand>.md-list-item-container>.md-list-item-holder{position:relative;z-index:2}.md-list-item-expand .md-expansion-indicator,.md-list-item-expand .md-icon,.md-list-item-expand .md-list-item-container{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-list-item-expand .md-list-expand{position:relative;z-index:1;transform:translate3D(0,0,0);will-change:margin-bottom;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-list-item-expand .md-list-expand.md-transition-off{transition:none}.md-list-item-expand .md-list-expand .md-list{padding:0}.md-list-text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex:1;flex:1;overflow:hidden;line-height:1.25em;text-overflow:ellipsis;white-space:normal}.md-list-text-container>:nth-child(1){font-size:16px}.md-list-text-container>:nth-child(2),.md-list-text-container>:nth-child(3){margin:0;color:rgba(0,0,0,.54);font-size:14px}.md-list-text-container>:nth-child(2):not(:last-child){color:rgba(0,0,0,.87)}.md-menu{display:inline-block}.md-menu-content{width:168px;min-width:84px;max-width:392px;min-height:64px;max-height:calc(100vh - 32px);overflow-x:hidden;overflow-y:auto;position:absolute;z-index:120;transform:scale(.9,.85) translateZ(0);border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .25s cubic-bezier(.55,0,.55,.2),margin .2s cubic-bezier(.55,0,.55,.2),transform 0s cubic-bezier(.55,0,.55,.2) .25s;will-change:transform,opacity,width}.md-menu-content.md-direction-bottom-right{margin-top:-20px;margin-left:-8px;transform-origin:top left}.md-menu-content.md-direction-bottom-right.md-active{margin-top:-11px}.md-menu-content.md-direction-bottom-left{margin-top:-20px;margin-left:8px;transform-origin:top right}.md-menu-content.md-direction-bottom-left.md-active{margin-top:-11px}.md-menu-content.md-direction-top-right{margin-top:20px;margin-left:-8px;transform-origin:bottom left}.md-menu-content.md-direction-top-right.md-active{margin-top:11px}.md-menu-content.md-direction-top-left{margin-top:20px;margin-left:8px;transform-origin:bottom right}.md-menu-content.md-direction-top-left.md-active{margin-top:11px}.md-menu-content.md-align-trigger{margin:0}.md-menu-content.md-size-1{width:84px}.md-menu-content.md-size-2{width:112px}.md-menu-content.md-size-3{width:168px}.md-menu-content.md-size-4{width:224px}.md-menu-content.md-size-5{width:280px}.md-menu-content.md-size-6{width:336px}.md-menu-content.md-size-7{width:392px}.md-menu-content.md-active{pointer-events:auto;opacity:1;transform:scale(1) translateZ(0);transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .35s cubic-bezier(.25,.8,.25,1),transform .25s cubic-bezier(.25,.8,.25,1) .05s}.md-menu-content.md-active .md-list{opacity:1;transition:opacity .2s cubic-bezier(.25,.8,.25,1) .15s}.md-menu-content .md-list{opacity:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1)}.md-menu-item{cursor:pointer;font-size:16px;line-height:1.2em}.md-menu-item[disabled]{cursor:default}.md-menu-item .md-list-item-holder{overflow:hidden;text-overflow:ellipsis}.md-radio{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-radio .md-radio-container{width:20px;height:20px;position:relative;border-radius:50%;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-radio .md-radio-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-radio .md-radio-label{height:20px;padding-left:8px;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-select{width:100%;min-width:128px;height:32px;position:relative}.md-select:focus{outline:none}.md-select:after{margin-top:2px;position:absolute;top:50%;right:0;transform:translateY(-50%) scaleY(.45) scaleX(.85);transition:all .15s linear;content:\"\\25BC\"}.md-select.md-active .md-select-menu{top:-8px;pointer-events:auto;opacity:1;transform:translateY(-8px) scale3D(1,1,1);transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s;transition-property:opacity,transform,top}.md-select.md-active .md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s;transition-delay:.1s}.md-select.md-disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none}.md-select select{position:absolute;left:-999em}.md-select .md-menu,.md-select .md-select-value{width:100%;height:32px;display:block;position:relative}.md-select .md-select-value{padding-right:24px;cursor:pointer;overflow:hidden;z-index:2;font-size:16px;line-height:33px;text-overflow:ellipsis;white-space:nowrap}.md-select .md-subheader{color:hsla(0,0%,46%,.87);text-transform:uppercase}.md-select .md-subheader:first-child{margin-top:-8px}.md-select-content{width:auto;max-height:256px}.md-select-content.md-direction-bottom-right{margin-top:-15px;margin-left:-16px}.md-select-content .md-menu-item .md-list-item-holder{overflow:visible;-ms-flex-pack:start;justify-content:flex-start}.md-select-content.md-multiple .md-checkbox{margin:0}.md-select-content.md-multiple .md-checkbox-label{padding-left:16px;cursor:pointer}.md-sidenav.md-left .md-sidenav-content{left:0;transform:translate3D(-100%,0,0)}.md-sidenav.md-right .md-sidenav-content{right:0;transform:translate3D(100%,0,0)}.md-sidenav.md-fixed .md-sidenav-backdrop,.md-sidenav.md-fixed .md-sidenav-content{position:fixed}.md-sidenav .md-sidenav-content{width:304px;position:absolute;top:0;bottom:0;z-index:100;pointer-events:none;overflow:auto;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform}.md-sidenav .md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.md-sidenav.md-active .md-sidenav-content{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}.md-sidenav.md-active .md-sidenav-backdrop{opacity:1;pointer-events:auto}.md-spinner{display:inline-block;position:relative;pointer-events:none;will-change:transform,opacity}.md-spinner.md-indeterminate .md-spinner-draw{animation:spinner-rotate 1.9s linear infinite;transform:rotate(0deg) translateZ(0)}.md-spinner.md-indeterminate .md-spinner-path{stroke-dasharray:2,200;animation:spinner-dash 1.425s ease-in-out infinite}.md-spinner.md-spinner-leave-active{opacity:0;transform:scale(.8) translateZ(0);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-spinner:not(.md-indeterminate).md-spinner-enter-active{transition-duration:2s}.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw{animation:spinner-initial-rotate 1.98s cubic-bezier(.25,.8,.25,1) forwards}.md-spinner-draw{width:100%;height:100%;margin:auto;position:absolute;top:0;right:0;bottom:0;left:0;transform:rotate(270deg) translateZ(0);transform-origin:center center;will-change:transform,opacity}.md-spinner-path{fill:none;stroke-dashoffset:0;stroke-miterlimit:10;transition:all .4s cubic-bezier(.25,.8,.25,1)}@keyframes spinner-rotate{to{transform:rotate(1turn) translateZ(0)}}@keyframes spinner-initial-rotate{0%{opacity:0;transform:rotate(-90deg) translateZ(0)}20%{opacity:1}to{transform:rotate(270deg) translateZ(0)}}@keyframes spinner-dash{0%{stroke-dasharray:2,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.md-subheader{min-height:48px;padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row wrap;flex-flow:row wrap;color:rgba(0,0,0,.54);font-size:14px;font-weight:500}.md-switch{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-switch .md-switch-container{width:34px;height:14px;position:relative;border-radius:14px;transition:all .4s cubic-bezier(.25,.8,.25,1);background-color:rgba(0,0,0,.38)}.md-switch .md-switch-container .md-switch-thumb{width:20px;height:20px;position:absolute;top:50%;left:0;background-color:#fafafa;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:all .15s linear}.md-switch .md-switch-container input{position:absolute;left:-999em}.md-switch .md-switch-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-switch .md-switch-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-switch .md-switch-container .md-switch-holder{width:40px;height:40px;margin:0;padding:0;position:absolute;top:50%;left:50%;z-index:2;background:none;border:none;transform:translate(-50%,-50%)}.md-switch .md-switch-container .md-switch-holder:focus{outline:none}.md-switch .md-switch-label{height:14px;padding-left:8px;line-height:14px}.md-switch.md-dragging .md-switch-thumb{cursor:-webkit-grabbing;cursor:grabbing}.md-switch.md-disabled .md-switch-thumb{cursor:default}.md-table{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow-x:auto}.md-table.md-transition-off .md-checkbox .md-checkbox-container,.md-table.md-transition-off .md-checkbox .md-checkbox-container:after,.md-table.md-transition-off .md-table-cell{transition:none!important}.md-table table{width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}.md-table tbody .md-table-row{border-top:1px solid #e0e0e0}.md-table tbody .md-table-row.md-selected .md-table-cell{background-color:#f5f5f5}.md-table tbody .md-table-row:hover .md-table-cell{background-color:#eee}.md-table .md-table-head{padding:0;position:relative;color:rgba(0,0,0,.54);font-size:12px;line-height:16px;text-align:left}.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text{padding-right:24px}.md-table .md-table-head.md-numeric{text-align:right}.md-table .md-table-head .md-icon{width:16px;min-width:16px;height:16px;min-height:16px;font-size:16px;color:rgba(0,0,0,.54)}.md-table .md-table-head .md-icon:not(.md-sortable-icon){margin:0 4px}.md-table .md-table-head .md-icon:first-child{margin-left:0}.md-table .md-table-head .md-icon:last-child{margin-right:0}.md-table .md-table-head-container{height:56px;padding:14px 0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-table .md-table-head-text{height:28px;padding-right:32px;padding-left:24px;display:inline-block;position:relative;overflow:hidden;line-height:28px;text-overflow:ellipsis;white-space:nowrap}.md-table .md-sortable{cursor:pointer}.md-table .md-sortable:first-of-type .md-sortable-icon{left:auto;right:10px}.md-table .md-sortable.md-sorted,.md-table .md-sortable:hover{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted .md-sortable-icon,.md-table .md-sortable:hover .md-sortable-icon{opacity:1}.md-table .md-sortable.md-sorted .md-sortable-icon{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted-descending .md-sortable-icon{transform:translateY(-50%) rotate(180deg)}.md-table .md-sortable .md-sortable-icon{position:absolute;top:50%;left:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translateY(-50%);opacity:0;color:rgba(0,0,0,.38)}.md-table .md-sortable .md-ink-ripple{color:rgba(0,0,0,.87)}.md-table .md-table-cell{height:48px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);color:rgba(0,0,0,.87);font-size:13px;line-height:18px}.md-table .md-table-cell:last-child .md-table-cell-container{padding-right:24px}.md-table .md-table-cell.md-numeric{text-align:right}.md-table .md-table-cell.md-numeric .md-table-cell-container{-ms-flex-pack:end;justify-content:flex-end}.md-table .md-table-cell.md-has-action .md-table-cell-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.md-table .md-table-cell .md-table-cell-container{padding:6px 32px 6px 24px}.md-table .md-table-cell .md-button{width:36px;min-width:36px;height:36px;min-height:36px}.md-table .md-table-cell .md-button:last-child{margin:0 -10px 0 0}.md-table .md-table-cell .md-button .md-icon{width:18px;min-width:18px;height:18px;min-height:18px;margin:0;color:rgba(0,0,0,.54);font-size:18px}.md-table .md-table-selection{width:60px;position:relative;vertical-align:middle}.md-table .md-table-selection+.md-table-cell .md-table-cell-container,.md-table .md-table-selection+.md-table-head .md-table-head-container .md-table-head-text{padding-left:8px}.md-table .md-table-selection .md-table-cell-container{padding-right:16px;padding-left:24px}.md-table .md-table-selection .md-checkbox{margin:0}.md-table .md-table-selection .md-checkbox-container{width:18px;height:18px;margin-top:1px}.md-table .md-table-selection .md-checkbox-container:after{top:-1px;left:4px}.md-table .md-select{min-width:84px}.md-table .md-option,.md-table .md-select-value{font-size:13px}.md-table-edit-trigger{display:inline-block;cursor:pointer;color:rgba(0,0,0,.38)}.md-table-edit-trigger.md-edited{color:rgba(0,0,0,.87)}.md-table-dialog{max-height:0;margin:0;padding:0 24px 2px;position:absolute;top:0;right:0;left:24px;z-index:60;overflow:hidden;pointer-events:none;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);background-color:#fff;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1),max-height 0s .5s;transition-duration:.3s;transform:translate3D(0,-8px,0)}.md-table-dialog.md-active{max-height:400px;pointer-events:auto;transform:translate3D(#000);opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-dialog.md-large{padding:12px 24px 2px}.md-table-dialog .md-input-container{margin-top:0;margin-bottom:16px}.md-table-dialog .md-input-container.md-input-placeholder input{font-size:13px}.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder{font-size:13px}.md-table-dialog .md-char-counter{font-size:13.5px;color:rgba(0,0,0,.54)}.md-table-dialog .md-button{min-width:64px}.md-table-card{overflow:visible}.md-table-card .md-toolbar{padding-left:16px;background-color:#fff}.md-table-card .md-title{-ms-flex:1;flex:1;font-size:20px}.md-table-card .md-table-pagination{height:56px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;border-top:1px solid #e0e0e0;color:rgba(0,0,0,.54);font-size:12px}.md-table-card .md-table-pagination .md-table-pagination-previous{margin-right:2px;margin-left:18px}.md-table-card .md-table-pagination .md-select{width:auto;min-width:36px;margin:0 32px}.md-table-card .md-table-pagination .md-select:after{margin-top:0}.md-table-card .md-table-pagination .md-select .md-select-value{padding:0;border:none;font-size:13px}.md-table-card .md-table-pagination .md-button:not([disabled]){color:rgba(0,0,0,.87)}.md-table-card .md-table-pagination .md-button[disabled] .md-icon{color:rgba(0,0,0,.26)}.md-pagination-select.md-direction-bottom-right{margin-top:-16px}.md-pagination-select .md-list-item-holder{font-size:13px}.md-table-alternate-header{position:absolute;top:0;right:0;left:0;z-index:10;pointer-events:none;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-alternate-header.md-active{pointer-events:auto;opacity:1;transform:translate3D(#000)}.md-table-alternate-header .md-counter{margin-left:8px;-ms-flex:1;flex:1}.md-tabs{width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}.md-tabs.md-transition-off *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation{height:48px;min-height:48px;position:relative;z-index:1;display:-ms-flexbox;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label{min-height:72px}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon{margin-bottom:10px}.md-tabs .md-tabs-navigation.md-centered{-ms-flex-pack:center;justify-content:center}.md-tabs .md-tabs-navigation.md-fixed .md-tab-header{-ms-flex:1;flex:1}.md-tabs .md-tabs-navigation.md-right{-ms-flex-pack:end;justify-content:flex-end}.md-tabs .md-tab-header{min-width:72px;max-width:264px;margin:0;padding:0 12px;display:inline-block;position:relative;cursor:pointer;border:0;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase}.md-tabs .md-tab-header.md-disabled{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.md-tabs .md-tab-header-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.md-tabs .md-tab-header-container .md-icon{margin:0}.md-tabs .md-tab-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translate3D(0,0,0)}.md-tabs .md-tab-indicator.md-transition-off{transition:none!important}.md-tabs .md-tab-indicator.md-to-right{transition:all .4s cubic-bezier(.25,.8,.25,1),left .3s cubic-bezier(.35,0,.25,1),right .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-indicator.md-to-left{transition:all .4s cubic-bezier(.25,.8,.25,1),right .3s cubic-bezier(.35,0,.25,1),left .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tabs-content{width:100%;height:0;position:relative;overflow:hidden}.md-tabs .md-tabs-wrapper{width:9999em;position:absolute;top:0;right:0;bottom:0;left:0;transform:translateZ(0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tab{padding:16px;position:absolute;top:0;left:0;right:0}.md-toolbar{min-height:64px;padding:0 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-flow:row wrap;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;-ms-flex-line-pack:inherit;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#fff}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:hsla(0,0%,100%,.12)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:start;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:hsla(0,0%,100%,.1)}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-list{padding:0;margin:0 -8px;-ms-flex:1;flex:1}.md-tooltip{height:20px;padding:0 8px;position:fixed;z-index:200;pointer-events:none;background-color:rgba(97,97,97,.87);border-radius:2px;opacity:0;transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;transition-delay:0s;color:#fff;font-family:Roboto,Noto Sans,Noto,sans-serif;font-size:10px;line-height:20px;text-transform:none;white-space:nowrap}.md-tooltip.md-active{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.3s}.md-tooltip:not(.md-active){transition-delay:0s!important}.md-tooltip.md-transition-off{transition:none!important}.md-tooltip.md-tooltip-top{margin-top:-14px;transform:translate(-50%,8px)}.md-tooltip.md-tooltip-top.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-right{margin-left:14px;transform:translate(-8px,50%)}.md-tooltip.md-tooltip-right.md-active{transform:translateY(50%)}.md-tooltip.md-tooltip-bottom{margin-top:14px;transform:translate(-50%,-8px)}.md-tooltip.md-tooltip-bottom.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-left{margin-left:-14px;transform:translate(8px,50%)}.md-tooltip.md-tooltip-left.md-active{transform:translateY(50%)}.md-whiteframe{position:relative;z-index:1}.md-whiteframe-1dp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.md-whiteframe-7dp{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Index = __webpack_require__(101);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _Home = __webpack_require__(104);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = [{
		path: '/',
		component: _Index2.default
	}, {
		path: '/index',
		component: _Index2.default
	}, {
		path: '/home',
		component: _Home2.default
	}];
	
	exports.default = routes;

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(102)
	
	/* template */
	var __vue_template__ = __webpack_require__(103)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/mats/Projects/_/battle-tanks/client/components/Index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ce64f74c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ce64f74c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Index.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 102:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "main-wrap"
	  }, [_c('div', {
	    staticClass: "header"
	  }), _c('div', {
	    staticClass: "main-content"
	  }, [_c('md-icon', {
	    attrs: {
	      "md-theme": "default"
	    }
	  }, [_vm._v("home")]), _c('span', {
	    staticClass: "md-subheading"
	  }, [_vm._v("Subheading")]), _c('nav', {
	    staticClass: "navbar navbar-default"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('ul', {
	    staticClass: "nav navbar-nav"
	  }, [_vm._m(0), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "home"
	    }
	  }, [_vm._v("home")])]), _vm._m(1)])])])]), _c('div', {
	    staticClass: "footer"
	  })])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": "/play"
	    }
	  }, [_vm._v("play")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": "/signout"
	    }
	  }, [_vm._v("sign out")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ce64f74c", module.exports)
	  }
	}

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(105)
	
	/* template */
	var __vue_template__ = __webpack_require__(106)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/mats/Projects/_/battle-tanks/client/components/Home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6f307ff2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6f307ff2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 105:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'home',
	  data: function data() {
	    return {
	      seen: false
	    };
	  },
	  methods: {
	    getQuote: function getQuote() {
	      var _this = this;
	
	      this.$http.get('/api/test-reuest').then(function (result) {
	        _this.seen = result.body.result;
	      }).catch(function (err) {
	        return console.log(err);
	      });
	    }
	  }
	};

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "col-sm-6 col-sm-offset-3"
	  }, [_c('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        _vm.getQuote()
	      }
	    }
	  }, [_vm._v("Make a test reuest")]), (_vm.seen) ? _c('p', [_vm._v("Now you see me after test request")]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6f307ff2", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=index.bundle.js.map