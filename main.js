/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\n\r\n#container{\r\n    height: 350px;\r\n    width: 600px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: auto;\r\n}\r\n.content{\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n.sub_content{\r\n    height: 30px;\r\n    width: 30px;\r\n    border: 1px solid black;\r\n    display: flex;\r\n\r\n}\r\n.sub_content:hover{\r\n    -ms-transform: scale(1.5); /* IE 9 */\r\n    -webkit-transform: scale(1.5); /* Safari 3-8 */\r\n    transform: scale(1.05);\r\n    opacity: 0.8;\r\n}\r\n\r\n#X_box{\r\n    color: red;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n#O_box{\r\n    color: green;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n#box_1{\r\n    background-color: aqua;\r\n   \r\n}\r\n\r\n#box_2{\r\n    background-color: yellow\r\n   \r\n}\r\n\r\n#body_box{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr 2fr;\r\n    margin: 0;\r\n    padding-top: 60px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#welcome{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n#welcome_turn{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 15px;\r\n}\r\n#welcome_title{\r\n    font-size: 20px;\r\n    margin: 5px;\r\n    font-weight: bold;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_battle_ship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_battle_ship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_battle_ship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/create_ship.js":
/*!****************************!*\
  !*** ./src/create_ship.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\r\nconst gameBoard = new gameboard();\r\n\r\n\r\nclass create_ship {\r\n    create_ship(a) {\r\n\r\n        const ship_0 = [0, 10, 20, 30];\r\n        const ship_1 = [5, 15];\r\n        const ship_2 = [22];\r\n        const ship_3 = [50];\r\n        const ship_4 = [67, 77];\r\n        const ship_5 = [70, 71];\r\n        const ship_6 = [74, 84, 94];\r\n        const ship_7 = [19];\r\n        const ship_8 = [35, 45, 55];\r\n        const ship = [ship_0, ship_1, ship_2, ship_3, ship_4, ship_5, ship_6, ship_7, ship_8];\r\n        const board = gameBoard.gridboard(a);\r\n        const board_to_return = [];\r\n        //board[ship[0][1]].style.backgroundColor=\"red\";\r\n        //board[ship[0][2]].style.backgroundColor=\"red\";\r\n\r\n        for (let i = 0; i < ship.length; i++) {\r\n            for (let j = 0; j < ship[i].length; j++) {\r\n                const a = board[ship[i][j]];\r\n                a.style.backgroundColor = \"red\";\r\n                board_to_return.push(a);\r\n            }\r\n        }\r\n\r\n        return board_to_return;\r\n    }\r\n}\r\n\r\nmodule.exports = create_ship;\n\n//# sourceURL=webpack://odin_battle_ship/./src/create_ship.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

eval("class gameboard{\r\n\r\n    gridboard(container){\r\n\r\n        //const container = document.getElementById(\"container\");\r\n        //console.log(container);\r\n\r\n        let box_all_element = [];\r\n        \r\n       \r\n\r\n        for(let i = 0; i<10; i++){\r\n            const box_axb_row = document.createElement('div');\r\n            box_axb_row.classList.add('content');\r\n            container.appendChild(box_axb_row);\r\n        \r\n            for(let j = 0; j < 10; j++){\r\n                const box_axb = document.createElement('div');\r\n                box_axb.textContent = \"\";\r\n                box_axb_row.appendChild(box_axb);\r\n                box_axb.classList.add('sub_content');\r\n                box_all_element.push(box_axb);\r\n              \r\n            }\r\n            \r\n        }\r\n        return box_all_element;\r\n        \r\n    }\r\n}\r\n\r\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://odin_battle_ship/./src/gameboard.js?");

/***/ }),

/***/ "./src/generate_randomNumb.js":
/*!************************************!*\
  !*** ./src/generate_randomNumb.js ***!
  \************************************/
/***/ ((module) => {

eval("class generate_randomNumb{\r\n    generateNumb(){\r\n        let total_arr_enough_size = [];\r\n        total_arr_enough_size = generate_randomNumb_size();\r\n        \r\n        console.log(total_arr_enough_size);\r\n\r\n        if(total_arr_enough_size.length != 19){\r\n        \r\n            window.location.reload();\r\n          \r\n        }\r\n\r\n        return total_arr_enough_size;\r\n\r\n    }\r\n\r\n    \r\n}\r\n\r\nfunction generate_randomNumb_size(){\r\n    const computer_numb = [];\r\n\r\n    //p,q,r,s\r\n    const p = Math.floor((Math.random() * 69) + 1);\r\n    const q = p + 10;\r\n    const r = p + 20;\r\n    const s = p + 30;\r\n    computer_numb.push(p);\r\n    computer_numb.push(q);\r\n    computer_numb.push(r);\r\n    computer_numb.push(s);\r\n\r\n    //m,n,o\r\n    const m_1 = Math.floor((Math.random() * 79) + 1);\r\n    const n_1 = m_1 + 10;\r\n    const o_1 = m_1 + 20;\r\n    if(!computer_numb.includes(m_1) && !computer_numb.includes(n_1) && !computer_numb.includes(o_1)){\r\n        const m = m_1;\r\n        const n = n_1;\r\n        const o = o_1;\r\n        computer_numb.push(m);\r\n        computer_numb.push(n);\r\n        computer_numb.push(o);\r\n    }\r\n\r\n    //j,k,l\r\n    const j_1 = Math.floor((Math.random() * 79) + 1);\r\n    const k_1 = j_1 + 10;\r\n    const l_1 = j_1 + 20;\r\n    if(!computer_numb.includes(j_1) && !computer_numb.includes(k_1) && !computer_numb.includes(l_1)){\r\n        const j = j_1;\r\n        const k = k_1;\r\n        const l = l_1;\r\n        computer_numb.push(j);\r\n        computer_numb.push(k);\r\n        computer_numb.push(l);\r\n    }\r\n\r\n    //h,i\r\n    const h_1 = Math.floor((Math.random() * 89) + 1);\r\n    const i_1 = h_1 + 10;\r\n    if(!computer_numb.includes(h_1) && !computer_numb.includes(i_1)){\r\n        const h = h_1;\r\n        const i = i_1;\r\n        computer_numb.push(h);\r\n        computer_numb.push(i);\r\n    }\r\n\r\n    //f,g\r\n    const f_1 = Math.floor((Math.random() * 89) + 1);\r\n    const g_1 = f_1 + 10;\r\n    if(!computer_numb.includes(f_1) && !computer_numb.includes(g_1)){\r\n        const f = f_1;\r\n        const g = g_1;\r\n        computer_numb.push(f);\r\n        computer_numb.push(g);\r\n    }\r\n\r\n    //d,e\r\n    const d_1 = Math.floor((Math.random() * 99) + 1);\r\n    const e_1 = d_1 + 1;\r\n    const d_1_condition = [0,10,20,30,40,50,60,70,80,90];\r\n    const e_1_condition = [9,19,29,39,49,59,69,79,89,99];\r\n    if(!computer_numb.includes(d_1) && !computer_numb.includes(e_1) && \r\n       !e_1_condition.includes(d_1) && !d_1_condition.includes(e_1)){\r\n        const d = d_1;\r\n        const e = e_1;\r\n        computer_numb.push(d);\r\n        computer_numb.push(e);\r\n    }\r\n\r\n    //a,b,c\r\n    const c_1 = Math.floor((Math.random() * 99) + 1);\r\n    if(!computer_numb.includes(c_1)){\r\n        const c = c_1;\r\n        computer_numb.push(c);\r\n    }\r\n\r\n    const b_1 = Math.floor((Math.random() * 99) + 1);\r\n    if(!computer_numb.includes(b_1)){\r\n        const b = b_1;\r\n        computer_numb.push(b);\r\n    }\r\n\r\n    const a_1 = Math.floor((Math.random() * 99) + 1);\r\n    if(!computer_numb.includes(a_1)){\r\n        const a = a_1;\r\n        computer_numb.push(a);\r\n    }\r\n\r\n    return computer_numb; \r\n    //return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];\r\n}\r\n\r\nmodule.exports = generate_randomNumb;\n\n//# sourceURL=webpack://odin_battle_ship/./src/generate_randomNumb.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\nconst player_i = __webpack_require__(/*! ./player_i.js */ \"./src/player_i.js\");\r\nconst generate_randomNumb = __webpack_require__(/*! ./generate_randomNumb.js */ \"./src/generate_randomNumb.js\");\r\nconst play_game_random_numb = __webpack_require__(/*! ./play_game_random_numb.js */ \"./src/play_game_random_numb.js\");\r\nconst initialship = __webpack_require__(/*! ./initial_ship.js */ \"./src/initial_ship.js\");\r\nconst create_ship = __webpack_require__(/*! ./create_ship.js */ \"./src/create_ship.js\");\r\n\r\nconst createShip = new create_ship();\r\n\r\n\r\n\r\n\r\nconst player_real_computer = new player_i();\r\n\r\nconst player_human_div = document.getElementById(\"box_1\");\r\nconst player_computer_div = document.getElementById(\"box_2\");\r\n\r\nconst ship_to_move = createShip.create_ship(player_computer_div);\r\nconsole.log(ship_to_move);\r\n\r\n\r\n\r\n\r\nconst playGameRandomNumb = new play_game_random_numb();\r\n\r\nconst computer = new generate_randomNumb();\r\n\r\nconst initialShip = new initialship();\r\n\r\nlet computer_random_play_numb = playGameRandomNumb.generate_play_game_random_numb();\r\nconsole.log(\"computer_random_play: \" + computer_random_play_numb);\r\n\r\nconst total_arr = computer.generateNumb();\r\n//p,q,r,s\r\nconst p = total_arr[0]; const q = total_arr[1]; const r = total_arr[2]; const s = total_arr[3];\r\n//m,n,o\r\nconst m = total_arr[4]; const n = total_arr[5]; const o = total_arr[6];\r\n//j,k,l\r\nconst j = total_arr[7]; const k = total_arr[8]; const l = total_arr[9];\r\n//h,i\r\nconst h = total_arr[10]; const i = total_arr[11];\r\n//f,g\r\nconst f = total_arr[12]; const g = total_arr[13];\r\n//d,e\r\nconst d = total_arr[14]; const e = total_arr[15];\r\n//a,b,c\r\nconst c = total_arr[16]; const b = total_arr[17]; const a = total_arr[18]; \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet player_human = player_real_computer.player_i_human_or_computer(player_human_div, \"Human\", 3, 5, 10, 17, 18, 40, 50, 42, 52, 44, 54, 64, 35, 45, 55, 58, 68, 78, 88);\r\n\r\n\r\nfunction ship_set_to_green(a){\r\n    for(let i = 0; i<a.length; i++){\r\n        a[i].style.backgroundColor = \"green\";\r\n    }\r\n}\r\n\r\n\r\nlet ship_0 = [ship_to_move[0],ship_to_move[1],ship_to_move[2],ship_to_move[3]];\r\nlet ship_1 = [ship_to_move[4],ship_to_move[5]];\r\nlet ship_2 = [ship_to_move[6]];\r\nlet ship_3 = [ship_to_move[7]];\r\nlet ship_4 = [ship_to_move[8],ship_to_move[9]];\r\nlet ship_5 = [ship_to_move[10],ship_to_move[11]];\r\nlet ship_6 = [ship_to_move[12],ship_to_move[13],ship_to_move[14]];\r\nlet ship_7 = [ship_to_move[15]];\r\nlet ship_8 = [ship_to_move[16],ship_to_move[17],ship_to_move[18]];\r\n\r\nlet total_ship = [ship_0, ship_1, ship_2, ship_3, ship_4, ship_5, ship_6, ship_7, ship_8];\r\n\r\nlet box_human_select = [];\r\n\r\nlet box_computer_selected = [];\r\n\r\nlet box_computer_selected_arr = [];\r\n\r\n//console.log(rearrangeArray_Index(a));\r\n\r\nfunction rearrangeArray_Index(a){\r\n  \r\n    a.sort((a, b) => a.length - b.length);\r\n    return a.flat(); \r\n}\r\n\r\nfor(let kkkk = 0; kkkk<19; kkkk++){\r\n    \r\n    \r\n    ship_to_move[kkkk].onclick = function(){\r\n\r\n        let switch_board = document.getElementById(\"welcome\");\r\n        \r\n        for(let iiii = 0; iiii<total_ship.length; iiii++){\r\n        \r\n          if(total_ship[iiii].includes(ship_to_move[kkkk]) && !box_human_select.includes(total_ship[iiii]) && switch_board.innerText == \"Human\"){\r\n            ship_set_to_green(total_ship[iiii]);\r\n            switch_board.innerText = \"Computer\";\r\n            //total_ship.splice(total_ship[iiii],1);\r\n           \r\n            \r\n            for(let x = 0; x<100; x++){\r\n                player_human[x].onclick = function(){\r\n                    \r\n                        //pp, qq, rr, ss\r\n                        let pp = 0; let qq = 0; let rr = 0; let ss = 0;\r\n                        //mm,nn,oo\r\n                        let mm = 0; let nn = 0; let oo = o;\r\n                        //j,k,l\r\n                        let jj = 0; let kk = 0; let ll = 0;\r\n                        //h,i\r\n                        let hh = 0; let ii = 0;\r\n                        //f,g\r\n                        let ff = 0; let gg = 0;\r\n                        //d,e\r\n                        let dd = 0; let ee = 0;\r\n                        //a,b,c\r\n                        let cc = 0; let bb = 0; let aa = 0; \r\n                    \r\n                    if(total_ship.includes(total_ship[iiii])){\r\n                        \r\n                        if(total_ship[iiii].length==4 && x <= 69 && switch_board.innerText == \"Computer\" \r\n                            && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10) && !box_computer_selected.includes(x+20)\r\n                            && !box_computer_selected.includes(x+30) && !box_human_select.includes(total_ship[iiii])){\r\n                           \r\n                            pp = x;\r\n                            qq = pp + 10;\r\n                            rr = pp + 20;\r\n                            ss = pp + 30;\r\n                            box_computer_selected.push(pp);\r\n                            box_computer_selected.push(qq);\r\n                            box_computer_selected.push(rr);\r\n                            box_computer_selected.push(ss);\r\n                            box_computer_selected_arr.push([pp,qq,rr,ss]);\r\n                            ship_set_to_green([player_human[pp],player_human[qq],player_human[rr],player_human[ss]]);\r\n                            switch_board.innerText = \"Human\";\r\n                            box_human_select.push(total_ship[iiii]);\r\n                           \r\n                            \r\n                        }\r\n\r\n                        else if(total_ship[iiii].length==3 && x <= 79 && switch_board.innerText == \"Computer\" && total_ship[iiii]===ship_8 && !box_human_select.includes(total_ship[iiii]) \r\n                            && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10) && !box_computer_selected.includes(x+20)){\r\n                            mm = x;\r\n                            nn = mm + 10;\r\n                            oo = mm + 20;\r\n                            box_computer_selected.push(mm);\r\n                            box_computer_selected.push(nn);\r\n                            box_computer_selected.push(oo);\r\n                            box_computer_selected_arr.push([mm,nn,oo]);\r\n                            ship_set_to_green([player_human[mm],player_human[nn],player_human[oo]]);\r\n                            switch_board.innerText = \"Human\";\r\n                            box_human_select.push(total_ship[iiii]);\r\n                           \r\n                            \r\n                        }\r\n                        else if(total_ship[iiii].length==3 && x <= 79 && switch_board.innerText == \"Computer\" && total_ship[iiii]===ship_6 && !box_human_select.includes(total_ship[iiii])\r\n                            && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10) && !box_computer_selected.includes(x+20)){\r\n                            jj = x;\r\n                            kk = jj + 10;\r\n                            ll = jj + 20;\r\n                            box_computer_selected.push(jj);\r\n                            box_computer_selected.push(kk);\r\n                            box_computer_selected.push(ll);\r\n                            box_computer_selected_arr.push([jj,kk,ll]);\r\n                            ship_set_to_green([player_human[jj],player_human[kk],player_human[ll]]);\r\n                            switch_board.innerText = \"Human\";\r\n                            box_human_select.push(total_ship[iiii]);\r\n                           \r\n                            \r\n                        }\r\n                        else if(total_ship[iiii].length==2 && x <= 89 && switch_board.innerText == \"Computer\" && !box_human_select.includes(total_ship[iiii])\r\n                            && total_ship[iiii]===ship_1 && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10)){\r\n                            hh = x;\r\n                            ii = hh + 10;\r\n                            box_computer_selected.push(hh);\r\n                            box_computer_selected.push(ii);\r\n                            box_computer_selected_arr.push([hh,ii]);\r\n                            ship_set_to_green([player_human[hh],player_human[ii]]);\r\n                            switch_board.innerText = \"Human\";\r\n                            box_human_select.push(total_ship[iiii]);\r\n                           \r\n                            \r\n                        }\r\n\r\n                        else if(total_ship[iiii].length==2 && x <= 89 && switch_board.innerText == \"Computer\" && !box_human_select.includes(total_ship[iiii])\r\n                            && total_ship[iiii]===ship_4 && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+ 10)){\r\n                                ff = x;\r\n                                gg = ff + 10;\r\n                                box_computer_selected.push(ff);\r\n                                box_computer_selected.push(gg);\r\n                                box_computer_selected_arr.push([ff,gg]);\r\n                                ship_set_to_green([player_human[ff],player_human[gg]]);\r\n                                switch_board.innerText = \"Human\";\r\n                                box_human_select.push(total_ship[iiii]);\r\n                               \r\n                                \r\n                            }\r\n                        else if(total_ship[iiii].length==2 && ![9,19,29,39,49,59,69,79,89,99].includes(x) \r\n                                && switch_board.innerText == \"Computer\" && !box_human_select.includes(total_ship[iiii])\r\n                                && total_ship[iiii]===ship_5 && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+1)){\r\n                                    dd = x;\r\n                                    ee = dd + 1;\r\n                                    box_computer_selected.push(dd);\r\n                                    box_computer_selected.push(ee);\r\n                                    box_computer_selected_arr.push([dd,ee]);\r\n                                    ship_set_to_green([player_human[dd],player_human[ee]]);\r\n                                    switch_board.innerText = \"Human\";\r\n                                    box_human_select.push(total_ship[iiii]);\r\n                                    console.log(box_computer_selected_arr);\r\n                                   \r\n                                    \r\n                            }\r\n                        else if(total_ship[iiii].length==1 && switch_board.innerText == \"Computer\" && !box_human_select.includes(total_ship[iiii])\r\n                                && total_ship[iiii]===ship_3 && !box_computer_selected.includes(x)){\r\n                                    cc = x;\r\n                                    box_computer_selected.push(cc);\r\n                                    ship_set_to_green([player_human[cc]]);\r\n                                    box_computer_selected_arr.push([cc]);\r\n                                    switch_board.innerText = \"Human\";\r\n                                    box_human_select.push(total_ship[iiii]);\r\n                                    \r\n\r\n                            }\r\n                        else if(total_ship[iiii].length==1 && switch_board.innerText == \"Computer\" && !box_human_select.includes(total_ship[iiii])\r\n                                && total_ship[iiii]===ship_2 && !box_computer_selected.includes(x)){\r\n                                    bb = x;\r\n                                    box_computer_selected.push(bb);\r\n                                    ship_set_to_green([player_human[bb]]);\r\n                                    box_computer_selected_arr.push([bb]);\r\n                                    switch_board.innerText = \"Human\";\r\n                                    box_human_select.push(total_ship[iiii]);\r\n                                    \r\n                                    \r\n                            }\r\n                        else if(total_ship[iiii].length==1 && switch_board.innerText == \"Computer\" && !box_human_select.includes(total_ship[iiii])\r\n                                && total_ship[iiii]===ship_7 && !box_computer_selected.includes(x)){\r\n                                    aa = x;\r\n                                    box_computer_selected.push(aa);\r\n                                    ship_set_to_green([player_human[aa]]);\r\n                                    box_computer_selected_arr.push([aa]);\r\n                                    switch_board.innerText = \"Human\";\r\n                                    box_human_select.push(total_ship[iiii]);\r\n                                    console.log(\"last pp: \" + pp);\r\n                                    \r\n                            }\r\n                         \r\n                            \r\n                            \r\n                            if(box_human_select.length==9){\r\n                                console.log(box_computer_selected_arr);\r\n                                let re_arrange_arr = rearrangeArray_Index(box_computer_selected_arr);\r\n                                player_computer_div.innerText = \"\";\r\n                                player_human_div.innerText = \"\";\r\n                                let player_human = player_real_computer.player_i_human_or_computer(player_human_div, \"Human\", re_arrange_arr);\r\n                            \r\n                                let player_computer = player_real_computer.player_i_human_or_computer(player_computer_div, \"Computer\",[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]);\r\n\r\n                                const initial_ship_computer = initialShip.initial_Ship_1([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]);\r\n\r\n                                const initial_ship_copy_computer = initialShip.initial_Ship_1([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]);\r\n\r\n                                const total_arr_computer = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];\r\n\r\n                                const initial_ship_human = initialShip.initial_Ship_1(re_arrange_arr);\r\n\r\n                                const initial_ship_copy_human = initialShip.initial_Ship_1(re_arrange_arr);\r\n\r\n                                const total_arr_human = re_arrange_arr;\r\n\r\n                                let z_computer = [];\r\n                                let z_human = [];\r\n                                let welcome_value_text = document.getElementById(\"welcome\");\r\n                                let result_value_text = document.getElementById(\"welcome_turn\");\r\n\r\n                                for(let t=0; t<100; t++){\r\n                                    player_computer[t].onclick = function(){setTimeout(func_play, 100)}\r\n\r\n                                    function func_play(){\r\n                                        //welcome_value_text.innerText = \"Human\";\r\n                                        if(welcome_value_text.innerText == \"Human\"){\r\n                                            player_real_computer.setBox_to_X_O(player_computer[t], t, player_computer_div, \"Human\",initial_ship_computer, initial_ship_copy_computer, total_arr_computer,z_computer);\r\n                                            welcome_value_text.innerText = \"Computer\";\r\n                                            setTimeout(() => {\r\n                                                // Code to run later goes here.\r\n                                                \r\n                                                player_real_computer.setBox_to_X_O(player_human[computer_random_play_numb[t]],computer_random_play_numb[t],player_human_div, \"Computer\", initial_ship_human, initial_ship_copy_human, total_arr_human,z_human);\r\n                                                if(!result_value_text.innerText.includes(\"Win\")){\r\n                                                    welcome_value_text.innerText = \"Human\";\r\n                                                }\r\n                                                else{\r\n                                                    welcome_value_text.innerText = \"\";\r\n                                                }\r\n                                            }, 300); // Time till execution, in milliseconds.\r\n\r\n                                            \r\n                                        }\r\n                                    }  \r\n                                }\r\n\r\n                            }\r\n                           \r\n                            \r\n                    }\r\n                   \r\n                    \r\n                    \r\n                }\r\n            }\r\n       \r\n          }  \r\n          \r\n        }\r\n\r\n    }\r\n   \r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin_battle_ship/./src/index.js?");

/***/ }),

/***/ "./src/initial_ship.js":
/*!*****************************!*\
  !*** ./src/initial_ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("class initialship{\r\n    initial_Ship_1([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]){\r\n        let initial_arr = [ [a],\r\n                            [b],\r\n                            [c],\r\n                            [d,e],\r\n                            [f,g],\r\n                            [h,i],\r\n                            [j,k,l],\r\n                            [m,n,o],\r\n                            [p,q,r,s]];\r\n        return initial_arr;\r\n    }\r\n   \r\n}\r\n\r\n//export{ Ship };\r\nmodule.exports = initialship;\n\n//# sourceURL=webpack://odin_battle_ship/./src/initial_ship.js?");

/***/ }),

/***/ "./src/play_game_random_numb.js":
/*!**************************************!*\
  !*** ./src/play_game_random_numb.js ***!
  \**************************************/
/***/ ((module) => {

eval("class play_game_random_numb{\r\n    generate_play_game_random_numb(){\r\n\r\n        var arr = [];\r\n        while(arr.length < 100){\r\n            var r = Math.floor(Math.random() * 100);\r\n            if(arr.indexOf(r) === -1) arr.push(r);\r\n        }\r\n        return arr;\r\n        \r\n    }\r\n  \r\n}\r\n\r\n\r\n\r\nmodule.exports = play_game_random_numb;\n\n//# sourceURL=webpack://odin_battle_ship/./src/play_game_random_numb.js?");

/***/ }),

/***/ "./src/player_i.js":
/*!*************************!*\
  !*** ./src/player_i.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\r\nconst gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\r\nconst initialship = __webpack_require__(/*! ./initial_ship.js */ \"./src/initial_ship.js\");\r\nconst setbox = __webpack_require__(/*! ./set_box_to_X_O.js */ \"./src/set_box_to_X_O.js\");\r\n\r\n\r\n\r\nconst ship = new Ship();\r\n\r\nconst setBox = new setbox();\r\n\r\nconst initialShip = new initialship();\r\n\r\nconst gameBoard = new gameboard();\r\n\r\n\r\n\r\n\r\n\r\nclass player_i{\r\n    \r\n    player_i_human_or_computer(player_div, player,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){\r\n\r\n        let box_arr = gameBoard.gridboard(player_div);\r\n\r\n        let box_total_arr = []\r\n            for(let u = 0; u<100; u++){\r\n                box_total_arr.push(u);\r\n            }\r\n\r\n        for(let t = 0; t < 100; t++){\r\n            //box_arr[t].innerText = t;\r\n        }\r\n        return box_arr;\r\n    }\r\n\r\n       \r\n    setBox_to_X_O(box_arr, t,player_div, player,initial_ship, initial_ship_copy,total_arr, z){\r\n\r\n      \r\n        let y = 0;\r\n        let switch_number = 0;\r\n        let count = 0;\r\n        \r\n        let welcome_value = [];\r\n\r\n        let welcome_value_text = document.getElementById(\"welcome_turn\");\r\n        let x = welcome_value_text.innerText; \r\n\r\n        for(let j = 0; j < initial_ship_copy.length; j++){\r\n            \r\n            if(total_arr.includes(t) && !x.includes(\"Win\")){\r\n\r\n                setBox.setbox_X(box_arr);\r\n                \r\n                \r\n                if(initial_ship[j].includes(t)){\r\n                    \r\n                    \r\n                    let time_hit = initial_ship_copy[j].length - initial_ship[j].length+1;\r\n                    let ship_hitted = initial_ship_copy[j].length;\r\n                    const index_to_be_splice = initial_ship[j].indexOf(t); // find index box to remove from array\r\n                    initial_ship[j].splice(index_to_be_splice,1);\r\n                   \r\n                    \r\n                    \r\n                    if(ship.isShunk(time_hit+1, ship_hitted+1,j) == \"shunk\"){\r\n                        z.push(1);\r\n                        \r\n                    }\r\n                    \r\n                }\r\n                \r\n            }\r\n            \r\n            else if(!x.includes(\"Win\")){\r\n                \r\n                setBox.setbox_O(box_arr);\r\n                \r\n                \r\n            }    \r\n            \r\n        }\r\n    console.log(\"z: \" + z);\r\n    if(initial_ship_copy.length == z.length){\r\n        console.log(player+\", You Win!\");\r\n        const result = document.getElementById(\"welcome_turn\");\r\n        result.innerText = player+\", You Win!\";\r\n    }\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = player_i;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin_battle_ship/./src/player_i.js?");

/***/ }),

/***/ "./src/set_box_to_X_O.js":
/*!*******************************!*\
  !*** ./src/set_box_to_X_O.js ***!
  \*******************************/
/***/ ((module) => {

eval("class setbox{\r\n    \r\n    setbox_X(a){\r\n        a.innerText = \"X\";\r\n        a.setAttribute(\"id\",\"X_box\");\r\n        const X_mark = a.innerText;\r\n        return X_mark;\r\n    }\r\n    setbox_O(b){\r\n        b.innerText = \"O\";\r\n        b.setAttribute(\"id\",\"O_box\");\r\n        const O_mark = b.innerText;\r\n        return O_mark;\r\n    }\r\n}\r\n\r\nmodule.exports = setbox;\n\n//# sourceURL=webpack://odin_battle_ship/./src/set_box_to_X_O.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("\r\nclass Ship{\r\n    \r\n    hit(time_hit){\r\n      \r\n        return time_hit;\r\n    }\r\n    \r\n    \r\n    isShunk(time_hit, ship_hitted,b){\r\n       \r\n        if(time_hit == ship_hitted){\r\n            console.log(\"Ship \" + b + \" is shunk.\");\r\n            return \"shunk\";\r\n        }\r\n        else{\r\n            return \"Ship \" + b + \" is a float.\"\r\n        }\r\n    }\r\n}\r\n\r\n//export{ Ship };\r\nmodule.exports = Ship;\r\n\n\n//# sourceURL=webpack://odin_battle_ship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;