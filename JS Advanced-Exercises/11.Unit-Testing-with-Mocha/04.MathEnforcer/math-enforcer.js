let mathEnforcer = {
    addFive: (n) => {
        if (typeof(n) != 'number') {
            return undefined;
        }

        return n + 5;
    },

    subtractTen: (n) => {
        if (typeof(n) != 'number') {
            return undefined;
        }

        return n - 10;
    },

    sum: (n1, n2) => {
        if (typeof(n1) != 'number' || typeof(n2) != 'number') {
            return undefined;
        }

        return n1 + n2;
    }
};

module.exports = { mathEnforcer };