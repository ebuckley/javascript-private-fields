// This technique involves using a closure to encapsulate the private state.
module.exports = function (dimensions) {
  const [width, length, height] = dimensions
  function Block() {
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

  return new Block()
}