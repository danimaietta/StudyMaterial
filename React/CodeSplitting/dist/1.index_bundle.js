(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/Others/Component2.js":
/*!*********************************************!*\
  !*** ./app/components/Others/Component2.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component2; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Im the evil component slowing the app >:)\n\nfunction Component2() {\n  var num;\n\n  function slowFunction() {\n    for (var i = 0; i <= 1000000000; i++) {\n      num = i;\n    }\n  }\n\n  slowFunction();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Component 2\"));\n}\n\n//# sourceURL=webpack:///./app/components/Others/Component2.js?");

/***/ })

}]);