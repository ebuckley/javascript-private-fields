module.exports = function(dims) {
  const privateProps = new WeakMap()
  class Block {
    constructor(dimensions) {
      const [width, length, height] = dimensions
      privateProps.set(this, {
        width,
        length,
        height
      })  
    }

    getWidth () {
      return privateProps.get(this).width
    }

    getLength () {
      return privateProps.get(this).length
    }

    getHeight () {
      return privateProps.get(this).height
    }

    getVolume () {
      return privateProps.get(this).width * privateProps.get(this).height * privateProps.get(this).length
    }

    getSurfaceArea () {
      return (privateProps.get(this).height * privateProps.get(this).length * 2) + (privateProps.get(this).width * privateProps.get(this).length * 2) + (privateProps.get(this).width * privateProps.get(this).height * 2)
    }
  }
  return new Block(dims)
}