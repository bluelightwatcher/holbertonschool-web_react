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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Create student 1 and student 2 variables stored in variable 'studentsList'\nvar student1 = {\n    firstName: 'Lemohang',\n    lastName: 'Lipholo',\n    age: 25,\n    location: 'Silicon Valley',\n};\nvar student2 = {\n    firstName: 'Maggie',\n    lastName: 'Gibbs',\n    age: 30,\n    location: 'Miami',\n};\n// Store them in the studentsList array\nvar studentsList = [student1, student2];\n// Function that creates a table and appends student details\nvar table = document.createElement('table');\n// Iterate through the studentsList and create a row for each student\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    var firstNameCell = document.createElement('td');\n    firstNameCell.textContent = student.firstName;\n    var locationCell = document.createElement('td'); // Changed from 'tr' to 'td'\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(locationCell);\n    table.appendChild(row);\n});\n// Append the table to the body of the document\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;