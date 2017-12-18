let Turtle = require('./turtle');

class GalapagusTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEaten = [];
    }

    get thingsEaten() {
        return this._thingsEaten;
    }

    eat(food) {
        this._thingsEaten.push(food);
    }

    grow(age) {
        super.grow(age);
        this._thingsEaten = [];
    }

    toString() {
        if (this._thingsEaten.length > 0) {
            return `${super.toString()}\nThings, eaten this year: ${this._thingsEaten.join(', ')}`;
        }
    }
}

module.exports = GalapagusTurtle;