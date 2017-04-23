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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var form = document.querySelector('#registrar');
var input = document.querySelector('input');
var invitedListUL = document.querySelector('#invitedList');
var mainDiv = document.querySelector('.main');
var warningP = document.querySelector('.warning');

exports.form = form;
exports.input = input;
exports.invitedListUL = invitedListUL;
exports.mainDiv = mainDiv;
exports.warningP = warningP;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectors = __webpack_require__(0);

var _CreateLI = __webpack_require__(6);

var _CreateLI2 = _interopRequireDefault(_CreateLI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// invitee list
var invitees = [];

function AddInvitee(e) {
  e.preventDefault();
  // removes class each time there's submission,
  // so that on each theres a new warning shown.
  _selectors.warningP.classList.remove('active');

  // removes whitespace from both sides of user input
  var text = _selectors.input.value.trim().toUpperCase();

  // checks if user entered whitespaces
  if (text === '') {
    // activate warining message
    if (!_selectors.warningP.classList.contains('active')) {
      _selectors.warningP.textContent = 'Please enter an invitee\'s name.';
      _selectors.warningP.classList.add('active');
    }

    // check if the invitee is already on the list, uses es7 .contains
  } else if (invitees.includes(text)) {
    if (!_selectors.warningP.classList.contains('active')) {
      _selectors.warningP.textContent = text + ' already exist on your list.';
      _selectors.warningP.classList.add('active');
      _selectors.input.value = '';
    }
  } else {
    // used to store invitees name for form validation
    invitees.push(text);
    _selectors.input.value = '';
    var li = (0, _CreateLI2.default)(text);
    _selectors.invitedListUL.appendChild(li);
  }
}

exports.default = AddInvitee;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function InviteesActions(e) {
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
}

exports.default = InviteesActions;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function RespnseConfirmation() {
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
}

exports.default = RespnseConfirmation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectors = __webpack_require__(0);

function ToggleResponded(e) {
  var isChecked = e.target.checked;
  // converts htmlcollection to an iterable array
  var lis = Array.from(_selectors.invitedListUL.children);
  if (isChecked) {
    lis.forEach(function (li) {
      if (li.className === 'responded') {
        li.style.display = ''; // eslint-disable-line no-param-reassign
      } else {
        li.style.display = 'none'; // eslint-disable-line no-param-reassign
      }
    });
  } else {
    lis.forEach(function (li) {
      li.style.display = ''; // eslint-disable-line no-param-reassign
    });
  }
}

exports.default = ToggleResponded;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createElement(elementName, property, value) {
  var element = document.createElement(elementName);
  element[property] = value;
  return element;
}

exports.default = createElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CreateElement = __webpack_require__(5);

var _CreateElement2 = _interopRequireDefault(_CreateElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createLI(text) {
  var li = (0, _CreateElement2.default)('li');

  // add element to li
  function appendToLI(elementName, property, value) {
    var element = (0, _CreateElement2.default)(elementName, property, value);
    li.appendChild(element);
    return element;
  }

  appendToLI('span', 'textContent', text);
  var label = appendToLI('label', 'textContent', 'Confirm');
  label.appendChild((0, _CreateElement2.default)('input', 'type', 'checkbox'));
  var select = (0, _CreateElement2.default)('select');
  var optionComing = (0, _CreateElement2.default)('option', 'textContent', 'Coming');
  var optionNotComing = (0, _CreateElement2.default)('option', 'textContent', 'Not Coming');
  select.appendChild(optionComing);
  select.appendChild(optionNotComing);
  label.appendChild(select);
  appendToLI('button', 'textContent', 'edit');
  appendToLI('button', 'textContent', 'remove');

  return li;
}

exports.default = createLI;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectors = __webpack_require__(0);

var _AddInvitee = __webpack_require__(1);

var _AddInvitee2 = _interopRequireDefault(_AddInvitee);

var _ToggleResponded = __webpack_require__(4);

var _ToggleResponded2 = _interopRequireDefault(_ToggleResponded);

var _ResponseConfirmation = __webpack_require__(3);

var _ResponseConfirmation2 = _interopRequireDefault(_ResponseConfirmation);

var _InviteesActions = __webpack_require__(2);

var _InviteesActions2 = _interopRequireDefault(_InviteesActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = document.createElement('div'); // import all selected dom elements

var filterLabel = document.createElement('label');
var filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
_selectors.mainDiv.insertBefore(div, _selectors.invitedListUL);

// submit event listner on form
_selectors.form.addEventListener('submit', _AddInvitee2.default);

// change event listner on filterCheckbox
filterCheckbox.addEventListener('change', _ToggleResponded2.default);

// change event listner on invitedListUL's checkbox
_selectors.invitedListUL.addEventListener('change', _ResponseConfirmation2.default);

// click events listner for actions on invittees
_selectors.invitedListUL.addEventListener('click', _InviteesActions2.default);

/***/ })
/******/ ]);