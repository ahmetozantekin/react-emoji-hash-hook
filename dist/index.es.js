import { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Emojis = require('./emojis.json');

var useHashEmoji = function useHashEmoji(str) {
  var _useState = useState(str),
      _useState2 = _slicedToArray(_useState, 1),
      strState = _useState2[0];

  var hashedString = hashCode(strState);
  return convertToEmoji(hashedString);
};

var hashCode = function hashCode(str) {
  if (Array.prototype.reduce) {
    return str.split("").reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }

  var hash = 0;
  if (str.length === 0) return hash;

  for (var i = 0; i < str.length; i++) {
    var character = str.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; //Convert to 32bit integer
  }

  return hash;
};

var convertToEmoji = function convertToEmoji(hStr) {
  var hashLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var hexHash = hexEncode(hStr.toString());
  var decimalHash = parseInt(hexHash, 16);
  var emojiIndex = decimalHash % Math.pow(Emojis.length, hashLength);
  var emojiString = '';

  for (var ii = 0; ii < hashLength; ii++) {
    emojiString = "".concat(Emojis[emojiIndex % Emojis.length]).concat(emojiString);
    emojiIndex = Math.floor(emojiIndex / Emojis.length);
  }

  return emojiString;
};

var hexEncode = function hexEncode(str) {
  var hex, i;
  var result = "";

  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result;
};

export { useHashEmoji };
//# sourceMappingURL=index.es.js.map
