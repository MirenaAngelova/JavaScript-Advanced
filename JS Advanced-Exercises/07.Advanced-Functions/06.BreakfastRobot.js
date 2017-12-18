let manager = (function() {
    let microElements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    let meals = {
        apple: { carbohydrate: 1, flavour: 2 },
        coke: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        omelet: { protein: 5, fat: 1, flavour: 1 },
        cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function(input) {
        let args = input.split(' ');
        if (args[0] == 'restock') {
            microElements[args[1]] += Number(args[2]);
            return 'Success';
        } else if (args[0] == 'prepare') {
            let meal = args[1];
            let quantity = Number(args[2]);

            for (let microEl in meals[meal]) {
                if (microElements[microEl] < meals[meal][microEl] * quantity) {
                    return `Error: not enough ${microEl} in stock`;
                }
            }
            for (let microEl in meals[meal]) {
                microElements[microEl] -= meals[meal][microEl] * quantity;
            }

            return 'Success';
        } else {
            return `protein=${microElements['protein']} carbohydrate=${microElements['carbohydrate']} fat=${microElements['fat']} flavour=${microElements['flavour']}`
        }
    }
})();
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));