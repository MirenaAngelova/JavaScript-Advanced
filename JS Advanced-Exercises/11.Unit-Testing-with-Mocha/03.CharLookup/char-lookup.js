function lookupChar(string, index) {
    if (typeof(string) != 'string' || !Number.isInteger(index)) {
        return undefined;
    }

    if (index < 0 || index > string.length - 1) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

module.exports = { lookupChar };