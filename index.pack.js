/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function roll(min, max, floatFlag) {
  var r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}

var startDay = new Date("08/28/2023");
var month = buildMonth(startDay);

// Generate a Monthly Budget (Subtract Rent/Utils)
var annualIncome = roll(31000, 40000, 1).toFixed(2);
var monthlyIncome = parseFloat(annualIncome) / 12;
var rent = roll(1200, 1800, 1).toFixed(2);
var utilities = roll(300, 500, 1).toFixed(2);
var monthlyBudget = monthlyIncome - parseFloat(rent) - parseFloat(utilities);
var monthlyNetValue = getMonthNetValue();

displayMonth(month, monthlyBudget, monthlyNetValue);
displayExpenses();

// Generate / Display Random Expenses
function generateExpenses() {
  var expenseCount = roll(0, 4);
  return [].concat(_toConsumableArray(Array(expenseCount))).map(function (_, i) {
    return {
      index: i,
      value: roll(1, 30, 1)
    };
  });
}

function displayExpenses() {
  var days = document.getElementsByClassName("day");
  Array.from(days).forEach(function (day, i) {
    var dayHtml = day.innerHTML;
    dayHtml += month[i].expenses.reduce(function (accum, expense) {
      return accum + ("<div class=\"expense\">\n                -$" + expense.value.toFixed(2) + "\n            </div>");
    }, "");
    day.innerHTML = dayHtml;
  });
}

// Calculate / Display Leftover Cash
function getMonthNetValue() {
  // let sampleDay = getDailyCost(month[0])
  var monthlyExpenseTotal = month.reduce(function (accum, day) {
    return accum + getDailyCost(day);
  }, 0);

  return monthlyBudget - monthlyExpenseTotal;
}

function getDailyCost(day) {
  return day.expenses.reduce(function (accum, expense) {
    return accum + parseFloat(expense.value);
  }, 0);
}

function getNextDay(day) {
  var nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);
  return nextDay;
}

function buildMonth(day) {
  var daysInMonth = getDaysInMonth(day.getMonth() + 1, day.getFullYear());
  var iterableDay = new Date(day);
  iterableDay.setDate(1);
  var month = [].concat(_toConsumableArray(Array(daysInMonth))).map(function (_, i) {
    var monthDay = {
      index: i,
      date: iterableDay,
      expenses: generateExpenses()
    };
    iterableDay = getNextDay(iterableDay);
    return monthDay;
  });
  return month;
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function displayMonth(month, budget, netValue) {
  var monthHtml = "<div class=\"monthly-summary\">\n        Budget: $" + budget.toFixed(2) + " | Net Value: $" + netValue.toFixed(2) + "\n    </div>" + month.reduce(function (accumulator, day) {
    return accumulator + ("<div class=\"day\">" + day.date.getDate() + "</div>");
  }, "");
  document.getElementById("MonthlyExpenses").innerHTML = monthHtml;
}

/***/ })
/******/ ]);