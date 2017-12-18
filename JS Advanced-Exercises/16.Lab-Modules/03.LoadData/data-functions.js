let data = require('./data');

function sort(property) {
    return data.sort((a, b) => a[property].localeCompare(b[property]));
}

function filter(property, value) {
    return data.filter(x => x[property] == value);
}

module.exports = { sort, filter };

// let sortedData = sort('shipTo');
// console.log(sortedData);
// let filteredData = filter('status', 'shipped');
// console.log(filteredData);