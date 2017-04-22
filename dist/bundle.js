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


document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#registrar');
  var input = document.querySelector('input');
  var invitedList_UL = document.querySelector('#invitedList');
  var mainDiv = document.querySelector('.main');
  var warningP = document.querySelector('.warning');

  var invitees = [];

  var div = document.createElement('div');
  var filterLabel = document.createElement('label');
  var filterCheckbox = document.createElement('input');

  filterLabel.textContent = "Hide those who haven't responded";
  filterCheckbox.type = 'checkbox';
  div.appendChild(filterLabel);
  div.appendChild(filterCheckbox);
  mainDiv.insertBefore(div, invitedList_UL);

  filterCheckbox.addEventListener('change', function (e) {
    var isChecked = e.target.checked;
    // converts htmlcollection to an iterable array
    var lis = Array.from(invitedList_UL.children);
    if (isChecked) {
      lis.forEach(function (li) {
        if (li.className === 'responded') {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      });
    } else {
      lis.forEach(function (li) {
        li.style.display = '';
      });
    }
  });

  function createElement(elementName, property, value) {
    var element = document.createElement(elementName);
    element[property] = value;
    return element;
  }

  function createLI(text) {
    function appendToLI(elementName, property, value) {
      var element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    var li = createElement('li');
    appendToLI('span', 'textContent', text);
    var label = appendToLI('label', 'textContent', 'Confirm');
    label.appendChild(createElement('input', 'type', 'checkbox'));
    var select = createElement('select');
    var option_coming = createElement('option', 'textContent', 'Coming');
    var option_notcoming = createElement('option', 'textContent', 'Not Coming');
    select.appendChild(option_coming);
    select.appendChild(option_notcoming);
    label.appendChild(select);
    appendToLI('button', 'textContent', 'edit');
    appendToLI('button', 'textContent', 'remove');

    return li;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // removes class each time there's submission,
    // so that on each theres a new warning shown.
    warningP.classList.remove('active');

    // removes whitespace from both sides of user input
    var text = input.value.trim().toUpperCase();

    // checks if user entered whitespaces
    if (text === '') {
      // activate warining message
      if (!warningP.classList.contains('active')) {
        warningP.textContent = 'Please enter an invitee\'s name.';
        warningP.classList.add('active');
      }

      // check if the invitee is already on the list, uses es7 .contains
    } else if (invitees.includes(text)) {
      if (!warningP.classList.contains('active')) {
        warningP.textContent = text + ' already exist on your list.';
        warningP.classList.add('active');
        input.value = '';
      }
    } else {
      // used to store invitees name for form validation
      invitees.push(text);
      input.value = '';
      var li = createLI(text);
      invitedList_UL.appendChild(li);
    }
  });

  invitedList_UL.addEventListener('change', function (e) {
    var checkbox = event.target;
    var checked = checkbox.checked;
    var listItem = checkbox.parentNode.parentNode;

    if (checked) {
      checkbox.parentNode.firstChild.textContent = 'Confirmed';
      listItem.className = 'responded';
    } else {
      listItem.className = '';
      checkbox.parentNode.firstChild.textContent = 'Confirm';
    }
  });

  invitedList_UL.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      var button = e.target;
      var li = e.target.parentNode;
      var ul = li.parentNode;
      var action = button.textContent;

      var nameActions = {
        remove: function remove() {
          ul.removeChild(li);
        },
        edit: function edit() {
          var span = li.firstElementChild;
          var input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
        },
        save: function save() {
          var span = document.createElement('span');
          var input = li.firstElementChild;
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = 'edit';
        }
      };

      // select and run action in button's name
      nameActions[action]();
    }
  });
});

/***/ })
/******/ ]);