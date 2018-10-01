// Works the same way as the closure_example.js, but uses the modern es6 class syntax
class Block {
  constructor(dimensions) {
    const [width, length, height] = dimensions
    this.getWidth = function() {
      return width
    }
    this.getLength = function() {
      return length
    }
    this.getHeight = function() {
      return height
    }

    this.getVolume = function() {
      return width * height * length
    }

    this.getSurfaceArea = function() {
      return (height * length * 2) + (width * length * 2) + (width * height * 2)
    }
  }
}

module.exports = Block