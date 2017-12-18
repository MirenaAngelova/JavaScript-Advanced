class Rat {
    constructor(name) {
        this.name = name;
        this.united = [];
    }

    unite(otherRat) {
        if (this.constructor.name == otherRat.constructor.name) {
            this.united.push(otherRat);
        }
    };

    getRats() {
        return this.united;
    }

    toString() {
        let result = this.name;
        for (let i of this.united) {
            result += `\n##${i.name}`;
        }
        return result;
    }
}

let rat1 = new Rat('pesho');
console.log(rat1);
let rat2 = new Rat('gosho');
let rat3 = new Rat('stamat');
let rat4 = 'misho';

rat1.unite(rat2);
rat1.unite(rat3);
rat1.unite(rat4);
//
// rat1.toString();

let list = rat1.getRats();
console.log(list);