
const height = Symbol()
const width = Symbol()
const length = Symbol()

class Block {
  constructor(dimensions) {
    this[width] = dimensions[0]
    this[length] = dimensions[1]
    this[height] = dimensions[2]
  }
  getWidth() {return this[width]}
  getLength() {return this[length]}
  getHeight() {return this[height]}
  getVolume() {
    return this[width] * this[height] * this[length]
  }
  getSurfaceArea() {
    return (this[height] * this[length] * 2) + (this[width] * this[length] * 2) + (this[width] * this[height] * 2)
  }
}

module.exports = Block