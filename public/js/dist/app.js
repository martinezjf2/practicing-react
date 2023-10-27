(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/app.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Counter_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Counter/Counter */ "./assets/js/components/Counter/Counter.js");\n/* harmony import */ var _components_Immutable_Immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Immutable/Immutable */ "./assets/js/components/Immutable/Immutable.js");\n\n\n\n\nfunction App() {\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(\'Jeffrey\');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Immutable_Immutable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));\n}\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\'app\'));\n\n//# sourceURL=webpack:///./assets/js/app.js?');
    },
    "./assets/js/components/Counter/Button.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Button(_ref) {\n  let {\n    action,\n    text,\n    hoverColor,\n    backgroundColor,\n    fontColor,\n    handleClick\n  } = _ref;\n  const [hover, setHover] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const styleButton = {\n    width: '50%',\n    border: '3px solid black',\n    padding: '20px',\n    fontSize: '2rem',\n    fontWeight: '900',\n    textAlign: 'center',\n    cursor: 'pointer',\n    color: hover && fontColor,\n    background: hover ? hoverColor : backgroundColor,\n    transition: 'all .6s ease-in-out'\n  };\n  const toggleHover = () => {\n    setHover(hover => !hover);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: action,\n    style: styleButton,\n    value: hover,\n    onMouseEnter: toggleHover,\n    onClick: handleClick\n  }, text);\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Button.js?");
    },
    "./assets/js/components/Counter/Counter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./assets/js/components/Counter/Button.js");\n\n\nfunction Counter(_ref) {\n  let {\n    status\n  } = _ref;\n  const [currentNumber, setCurrentNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);\n  const [counterStatus, setCounterStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(\'manual\');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    if (status == \'auto\') {\n      setCounterStatus(\'auto\');\n      const intervalId = setInterval(() => {\n        setCurrentNumber(currentNumber => currentNumber + 1);\n      }, 1000);\n      return () => clearInterval(intervalId);\n    }\n  }, [status]);\n  function handleIncrement(e) {\n    e.preventDefault();\n    setCurrentNumber(currentNumber => currentNumber + 1);\n  }\n  function handleDecrement(e) {\n    e.preventDefault();\n    setCurrentNumber(currentNumber => currentNumber - 1);\n  }\n  const styleButtons = {\n    display: status == \'auto\' ? \'none\' : \'flex\'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    id: "counter-comp",\n    style: styleCounterComp\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "Number",\n    style: styleNumber\n  }, currentNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "buttons",\n    style: styleButtons\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    action: "minus",\n    text: "-",\n    hoverColor: "red",\n    backgrounColor: "white",\n    fontColor: "white",\n    handleClick: handleDecrement\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    action: "plus",\n    text: "+",\n    hoverColor: "purple",\n    backgrounColor: "white",\n    fontColor: "white",\n    handleClick: handleIncrement\n  })));\n}\nconst styleCounterComp = {\n  width: \'100%\',\n  maxWidth: \'400px\',\n  margin: \'0 auto\',\n  paddingTop: \'100px\'\n};\nconst styleNumber = {\n  border: \'3px solid black\',\n  padding: \'20px\',\n  fontSize: \'2rem\',\n  fontWeight: \'900\',\n  textAlign: \'center\'\n};\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Counter.js?');
    },
    "./assets/js/components/Immutable/Immutable.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Immutable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Immutable() {\n  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('manual');\n  const [currentNumber, setCurrentNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const [background, setBackground] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('black');\n  function handleClick() {\n    console.log('Clicked Button');\n    setBackground('green');\n  }\n  let changeToActive = background == 'green' ? 'active' : '';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: immutableStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"box \".concat(changeToActive)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: buttonStyle,\n    className: \"button\",\n    onClick: handleClick\n  }, \"Press Me\"));\n}\nconst immutableStyle = {\n  width: '100%',\n  maxWidth: '400px',\n  margin: '0 auto'\n};\nconst buttonStyle = {\n  borderRadius: '4px',\n  background: 'blue',\n  padding: '10px 20px',\n  margin: '20px 0',\n  color: 'white',\n  cursor: 'pointer'\n};\n\n//# sourceURL=webpack:///./assets/js/components/Immutable/Immutable.js?");
    }
});