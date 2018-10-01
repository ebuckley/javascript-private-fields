module.exports = function(dimensions) {
  const privateProps = new WeakMap()
  class Block {
    constructor(dimensions) {
      const [width, length, height] = dimensions
      privateProps.set(this, {
        width,
        length,
        height
      })

      this.getWidth = function() {
        return privateProps.get(this).width
      }

      this.getLength = function() {
        return privateProps.get(this).length
      }

      this.getHeight = function() {
        return privateProps.get(this).height
      }

      this.getVolume = function() {
        return privateProps.get(this).width * privateProps.get(this).height * privateProps.get(this).length
      }

      this.getSurfaceArea = function() {
        return (privateProps.get(this).height * privateProps.get(this).length * 2) + (privateProps.get(this).width * privateProps.get(this).length * 2) + (privateProps.get(this).width * privateProps.get(this).height * 2)
      }
    }
  }
  return new Block(dimensions)
}