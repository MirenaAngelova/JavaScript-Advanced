function mapSort(map, sortFn) {
    if (sortFn == undefined) {
        sortFn = function(a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        };
    }
    let entries = Array.from(map.entries()).sort(sortFn); //[key value]
    let sortedMap = new Map();
    for (let entry of entries) {
        sortedMap.set(entry[0], entry[1]);
    }

    return sortedMap;
}

module.exports = mapSort;

// let map = new Map();
// map.set(3, "Pesho");
// map.set(1, "Gosho");
// map.set(7, "Aleks");
// let sortedMap = sortMap(map);
// console.log(sortedMap);

// let map2 = new Map();
// map2.set(3, { age: 13, hoby: "Skiing" });
// map2.set(1, { name: "Stamat", age: 29, color: "blue" });
// map2.set(7, { name: "Yordan", age: 3 });
// let sortedMap2 = sortMap(map2, (a, b) => a[1].age - b[1].age);
// console.log(sortedMap2);