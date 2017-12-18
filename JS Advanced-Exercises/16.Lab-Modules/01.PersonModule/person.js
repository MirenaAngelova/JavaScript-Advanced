class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        let a = this.name;
        return "I'm " + a;
    }
}
module.exports = { Person };