let ext = (function() {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let prop in template) {
                if (typeof(template[prop] == 'function')) {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }

    return Extensible;
})();

let template = {
    extensionData: 5,
    newData: 'String',
    method: function() {
        return 10;
    }
};

let testObj = new ext();
let testObj1 = new ext();

testObj.extend(template);
console.log(testObj);

template = {
    data: 'kur',
    method: function() {
        return 'kor';
    }
};
testObj1.extend(template);
console.log(testObj1);