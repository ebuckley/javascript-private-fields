"use strict";

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver).value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  var descriptor = privateMap.get(receiver);
  if (!descriptor.writable) {
    throw new TypeError("attempted to set read only private field");
  }
  descriptor.value = value;
  return value;
}

// Use babel to transpile this example
var Block =
  /*#__PURE__*/
  (function() {
    function Block(dimensions) {
      _classCallCheck(this, Block);

      _height.set(this, {
        writable: true,
        value: void 0
      });

      _width.set(this, {
        writable: true,
        value: void 0
      });

      _length.set(this, {
        writable: true,
        value: void 0
      });

      var _dimensions = _slicedToArray(dimensions, 3),
        _width2 = _dimensions[0],
        _length2 = _dimensions[1],
        _height2 = _dimensions[2];

      _classPrivateFieldSet(this, _width, dimensions[0]);

      _classPrivateFieldSet(this, _length, dimensions[1]);

      _classPrivateFieldSet(this, _height, dimensions[2]);
    }

    _createClass(Block, [
      {
        key: "getWidth",
        value: function getWidth() {
          return _classPrivateFieldGet(this, _width);
        }
      },
      {
        key: "getLength",
        value: function getLength() {
          return _classPrivateFieldGet(this, _length);
        }
      },
      {
        key: "getHeight",
        value: function getHeight() {
          return _classPrivateFieldGet(this, _height);
        }
      },
      {
        key: "getVolume",
        value: function getVolume() {
          return (
            _classPrivateFieldGet(this, _width) *
            _classPrivateFieldGet(this, _height) *
            _classPrivateFieldGet(this, _length)
          );
        }
      },
      {
        key: "getSurfaceArea",
        value: function getSurfaceArea() {
          return (
            _classPrivateFieldGet(this, _height) *
              _classPrivateFieldGet(this, _length) *
              2 +
            _classPrivateFieldGet(this, _width) *
              _classPrivateFieldGet(this, _length) *
              2 +
            _classPrivateFieldGet(this, _width) *
              _classPrivateFieldGet(this, _height) *
              2
          );
        }
      }
    ]);

    return Block;
  })();

var _height = new WeakMap();

var _width = new WeakMap();

var _length = new WeakMap();

module.exports = Block;
