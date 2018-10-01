// Works the same way as the closure_example.js, but uses the modern es6 class syntax
class Block {
  constructor(dimensions) {
    this._width = dimensions[0]
    this._length = dimensions[1]
    this._height = dimensions[2]
  }
  getWidth() {
    return this._width
  }
  getLength() {
    return this._length
  }
  getHeight() {
    return this._height
  }
  getVolume() {
    return this._width * this._height * this._length
  }
  getSurfaceArea() {
    return (this._height * this._length * 2) + (this._width * this._length * 2) + (this._width * this._height * 2)
  }
}

module.exports = Block