class Rectangle {
    constructor(width, height, color) {
        [this.width, this.height, this.color] = [width, height, color];
    }

    calcArea() {
        return this.width * this.height;
    }
}

let redRectangle = new Rectangle(4, 5, 'red');
let blueRectangle = new Rectangle(8, 3, 'blue');
console.log(redRectangle.width);
console.log(redRectangle.height);
console.log(redRectangle.color);
console.log(redRectangle.calcArea());
console.log(blueRectangle.width);
console.log(blueRectangle.height);
console.log(blueRectangle.color);
console.log(blueRectangle.calcArea());