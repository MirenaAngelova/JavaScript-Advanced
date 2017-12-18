function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) {
        result = symbol + ' ' + result;
    } else {
        result = result + ' ' + symbol;
    }
    return result;
}

function getDollarFormatter(formatter) {

    function dollarFormatter(value) {
        return formatter(',', '$', true, value);
    };

    return dollarFormatter;
}

let dollars = getDollarFormatter(formatCurrency);
console.log(dollars(3452));
console.log(dollars(3.1429));
console.log(dollars(2.709));