let expect = require('chai').expect;
let mathEnforcer = require('../math-enforcer.js').mathEnforcer;

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined for string parameter', () => {
            expect(mathEnforcer.addFive('pesho')).to.be.undefined;
        });

        it('should return 5 for 0', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });

        it('should return 0 for -5', () => {
            let expected = mathEnforcer.addFive(-5);
            let actual = -5 + 5;
            expect(expected).to.equal(actual);
        });

        it('should return 7.5 for 2.5', () => {
            let expected = mathEnforcer.addFive(2.5);
            let actual = 2.5 + 5;
            expect(expected).to.equal(actual);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined for string parameter', () => {
            expect(mathEnforcer.subtractTen('pesho')).to.be.undefined;
        });

        it('should return -10 for 0', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });

        it('should return 0 for 10', () => {
            let expected = mathEnforcer.subtractTen(10);
            let actual = 10 - 10;
            expect(expected).to.equal(actual);
        });

        it('should return 0.5 for 10.5', () => {
            let expected = mathEnforcer.subtractTen(10.5);
            let actual = 10.5 - 10;
            expect(expected).to.equal(actual);
        });
    });

    describe('sum', () => {
        it('should return undefined for string as first parameter', () => {
            expect(mathEnforcer.sum('pesho', 5)).to.be.undefined;
        });

        it('should return undefined for string as second parameter', () => {
            expect(mathEnforcer.sum(4, 'gosho')).to.be.undefined;
        });

        it('should return -10 for (-15, 5)', () => {
            expect(mathEnforcer.sum(-15, 5)).to.equal(-10);
        });

        it('should return 0 for (10, -10)', () => {
            let expected = mathEnforcer.sum(10, -10);
            let actual = 10 - 10;
            expect(expected).to.equal(actual);
        });

        it('should return 0.5 for (10.5, -10)', () => {
            let expected = mathEnforcer.sum(10.5, -10);
            let actual = 10.5 - 10;
            expect(expected).to.closeTo(actual, 0.01);
        });
    });
});