(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        // let result = [];
        // for (let i = n; i < this.length; i++) {
        //     result.push(this[i]);
        // }
        // return result;
        return this.slice(n);
    };

    Array.prototype.take = function(n) {
        // let result = [];
        // for (let i = 0; i < n; i++) {
        //     result.push(this[i]);
        // }
        // return result;
        return this.slice(0, n);
    };

    Array.prototype.sum = function() {
        // let result = 0;
        // for (let i = 0; i < this.length; i++) {
        //     result += this[i];
        // }
        // return result;
        return this.reduce((a, b) => a + b);
    };

    Array.prototype.avarage = function() {
        // let sum = this.sum();
        // let avg = sum / this.length;
        // return avg;
        return this.sum() / this.length;
    };

})();