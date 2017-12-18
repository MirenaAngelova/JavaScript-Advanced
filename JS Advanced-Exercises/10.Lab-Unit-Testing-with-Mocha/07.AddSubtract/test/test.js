let expect = require('chai').expect;
let createCalculator = require('../add-subtract-module').createCalculator;

describe('createCalculator()', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    it('should return 5 after {add(3), add(2)}', () => {
        calc.add(3);
        calc.add(2);
        let value = calc.get();
        expect(value).to.equal(5);
    });

    it('should return 10 after {add(20), subtract(10)}', () => {
        calc.add(20);
        calc.subtract(10);
        let value = calc.get();
        expect(value).to.equal(10);
    });
    it('should return -1 after {add(-1)}', () => {
        calc.add(-1);
        let value = calc.get();
        expect(value).to.equal(-1);
    });

    it('should return 1 after {subtract(-1)}', () => {
        calc.subtract(-1);
        let value = calc.get();
        expect(value).to.equal(1);
    });

    it('should return NaN after {add(pesho)}', () => {
        calc.add('pesho');
        let value = calc.get();
        expect(value).to.NaN;
    });

    it('initial value should be 0', () => {
        expect(calc.get()).to.be.equal(0)
    });
});