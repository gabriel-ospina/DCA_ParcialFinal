/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/createRecipe/createRecipe.ts":
/*!*****************************************************!*\
  !*** ./src/components/createRecipe/createRecipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RecipeInput)\n/* harmony export */ });\nclass RecipeInput extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    ;\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const form = this.ownerDocument.createElement(\"form\");\n            const nameIn = this.ownerDocument.createElement(\"input\");\n            nameIn.placeholder = \"Name of the recipe\";\n            form.appendChild(nameIn);\n            const ingredIn = this.ownerDocument.createElement(\"section\");\n            const ingredient1 = this.ownerDocument.createElement(\"input\");\n            ingredient1.placeholder = \"Ingredient 1\";\n            ingredIn.appendChild(ingredient1);\n            const ingredient2 = this.ownerDocument.createElement(\"input\");\n            ingredient2.placeholder = \"Ingredient 2\";\n            ingredIn.appendChild(ingredient2);\n            const ingredient3 = this.ownerDocument.createElement(\"input\");\n            ingredient3.placeholder = \"Ingredient 3\";\n            ingredIn.appendChild(ingredient3);\n            form.appendChild(ingredIn);\n            const instructionsIn = this.ownerDocument.createElement(\"input\");\n            instructionsIn.placeholder = \"Instructions\";\n            form.appendChild(instructionsIn);\n            this.shadowRoot.appendChild(form);\n            const button = this.ownerDocument.createElement(\"button\");\n            button.innerText = \"Publish\";\n            this.shadowRoot.appendChild(button);\n        }\n    }\n}\ncustomElements.define(\"recipe-input\", RecipeInput);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/createRecipe/createRecipe.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RecipeInput\": () => (/* reexport safe */ _createRecipe_createRecipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _createRecipe_createRecipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRecipe/createRecipe */ \"./src/components/createRecipe/createRecipe.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/export */ \"./src/screens/export.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-create');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            switch (appState.screen) {\n                case value:\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/createRecipe/createRecipe.ts":
/*!**************************************************!*\
  !*** ./src/screens/createRecipe/createRecipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateRecipeScreen)\n/* harmony export */ });\nclass CreateRecipeScreen extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    ;\n    connectedCallback() {\n        this.render();\n    }\n    ;\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const title = this.ownerDocument.createElement(\"h1\");\n            title.innerText = \"Share your recipe\";\n            this.shadowRoot.appendChild(title);\n            const recipeForm = this.ownerDocument.createElement(\"recipe-input\");\n            this.shadowRoot.appendChild(recipeForm);\n        }\n    }\n}\ncustomElements.define(\"app-create\", CreateRecipeScreen);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/createRecipe/createRecipe.ts?");

/***/ }),

/***/ "./src/screens/export.ts":
/*!*******************************!*\
  !*** ./src/screens/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateRecipeScreen\": () => (/* reexport safe */ _createRecipe_createRecipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _createRecipe_createRecipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRecipe/createRecipe */ \"./src/screens/createRecipe/createRecipe.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/export.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;