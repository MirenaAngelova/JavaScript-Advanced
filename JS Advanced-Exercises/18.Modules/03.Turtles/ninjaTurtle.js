let Turtle = require('./turtle');

class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this._maskColor = maskColor;
        this._weapon = weapon;
        this._level = 0;
    }

    grow(age) {
        super.grow(age);
        this._level += age;
    }

    toString() {
        let output = `${super.toString()}\n${this._name.slice(0, 3)} wears a ${this._maskColor} mask, and is `;
        if (this._level < 25) {
            output += `an apprentice`;
        } else if (this._level >= 25 && this._level < 100) {
            output += `smokin strong`;
        } else {
            output += `BEYOND GODLIKE`;
        }
        output += ` with the ${this._weapon}.`;
        return output;
    }
}

module.exports = NinjaTurtle;