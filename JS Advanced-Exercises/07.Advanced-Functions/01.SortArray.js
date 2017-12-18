function sortArray(inputArray, sortingMethod) {
    let ascendingMethod = function(a, b) {
        return a - b;
    };
    let descendingMethod = function(a, b) {
        return b - a;
    };

    let methods = {
        'asc': ascendingMethod,
        'desc': descendingMethod
    }

    return inputArray.sort(methods[sortingMethod])
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));