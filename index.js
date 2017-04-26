let Shape = require('@alu0100897975/ull-shape-fernando');
class Square extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return  Math.pow(this.width,2)
    }
}
Shape.Shapes.Square = Square;
module.exports = Square;
