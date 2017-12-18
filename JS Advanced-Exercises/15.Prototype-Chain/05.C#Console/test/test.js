let Console = require('../c#-console').Console;
let expect = require('chai').expect;

describe('Class C# Console', function() {
    describe('contains method writeLine', function() {
        it('should have method writeLine', function() {
            expect(typeof Console.writeLine).to.equal('function');
        });
    });

    describe('with single param and valid input', function() {
        it('should return string with the string param', function() {
            let actual = 'test';
            let expected = Console.writeLine('test');
            expect(expected).to.equal(actual);
        });

        it('should return JSON obj with an obj params', function() {
            let actual = { text: 'test', length: 4 };
            let expected = Console.writeLine({ text: 'test', length: 4 });
            expect(expected).to.equal(JSON.stringify(actual));
        });
    });

    describe('with single param and invalid input', function() {
        it('should return undefined with invalid param (number)', function() {
            let expected = Console.writeLine(100);
            expect(expected).to.equal(undefined);
        });

        it('should return TypeError with an empty param', function() {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });
    });

    describe('with multiple params an valid input', function() {
        it('should return correct output with mulptiple valid string params', function() {
            let params = ['The sum of {0} and {1} is {2}', 'one', 'two', 'three'];
            let expected = Console.writeLine(...params);
            expect(expected).to.equal('The sum of one and two is three');
        });

        it('should return correct output with mulptiple valid string params', function() {
            let params = ['The sum of {2} and {1} is {0}', 'three', 'two', 'one'];
            let expected = Console.writeLine(...params);
            expect(expected).to.equal('The sum of one and two is three');
        });

        it('should return correct output with mulptiple valid string params', function() {
            let params = ['The sum is {0}', 'three'];
            let expected = Console.writeLine(...params);
            expect(expected).to.equal('The sum is three');
        });
    });

    describe('with mulptiple params and invalid input', function() {
        it('should return TypeError with a non-string 1-st param (number)', function() {
            let params = [100, 'one', 'two', 'three'];
            expect(() => Console.writeLine(...params)).to.throw(TypeError);
        });

        it('should return RangeError with non-matching numbers of placeholders & params (placeholders > params)', function() {
            let params = ['The sum of {0} and {1} is {2}', 'one', 'two'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });

        it('should return RangeError with non-matching numbers of placeholders & params (placeholders < params)', function() {
            let params = ['The sum of {0} and {1} is {2}', 'one', 'two', 'three', 'four'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });
        it('should return RangeError with invalid placeholder index (index > upper boundary)', function() {
            let params = ['The sum of {100} and {1} is {2}', 'one', 'two', 'three'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });

        it('should return RangeError with invalid placeholder index (index > upper boundary)', function() {
            let params = ['The sum is {100}', 'three'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });
    });
});