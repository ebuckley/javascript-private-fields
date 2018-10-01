

function testBlockClass(Block) {
  // -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
  let b = new Block([2,4,6]) 
  if (b.getWidth() !== 2) {
    throw new Error('Should return 2')
  }

  if (b.getLength() !== 4) {
    throw new Error('should return 4')
  } 

  if (b.getHeight() !== 6) {
    throw new Error('should return a 6')
  }

  if (b.getVolume() !== 48) {
    throw new Error('should have a volume of 48')
  }

  if (b.getSurfaceArea() !== 88) {
    throw new Error('should have a volume of 88')
  }
}
try {
  testBlockClass(require('./closure_example'))
  testBlockClass(require('./es6-class_example'))
  testBlockClass(require('./symbol_example'))
  testBlockClass(require('./weakmap_example'))
  testBlockClass(require('./underscore_example'))
  testBlockClass(require('./es7-class_example.compiled'))
} catch (e){
  console.error('failed to pass the test!', e)
  process.exit()
}

console.log('passed all tests')