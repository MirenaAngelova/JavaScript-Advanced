let sharedObject = require('../shared-object.js').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jQuery');

document.body.innerHTML = `<div id="wrapper">
<input type="text" id="name">
<input type="text" id="income">
</div>`;

describe('shared object', () => {
    describe('initial state', () => {
        it('name should return null', () => {
            expect(sharedObject.name).to.null;
        });

        it('income should return null', () => {
            expect(sharedObject.income).to.null;
        });
    });

    describe('change name', () => {
        it('changeName should not change the name property if an invalid value is passed with preexisting value.', () => {
            sharedObject.name = 'randomValue';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('randomValue');
        });

        it('changeName should not change the name property if an invalid value is passed with preexisting value.', () => {
            $('#name').val('Gosho');
            sharedObject.changeName('');
            expect($('#name').val()).to.equal('Gosho');
        });

        it('changeName should not change the name property if an invalid value is passed with preexisting value.', () => {
            sharedObject.name = 'randomValue';
            sharedObject.changeName('newRandomValue');
            expect(sharedObject.name).to.equal('newRandomValue');
        });

        it('changeName should not change the name property if an invalid value is passed with preexisting value.', () => {
            $('#name').val('Gosho');
            sharedObject.changeName('Stamat');
            expect($('#name').val()).to.equal('Stamat');
        });
    });

    describe('change income', () => {
        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', () => {
            sharedObject.income = Number(5);
            sharedObject.changeIncome('Hello');
            expect(sharedObject.income).to.equal(5);
        });

        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', () => {
            sharedObject.income = 5;
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.equal(5);
        });

        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', () => {
            sharedObject.income = 5;
            sharedObject.changeIncome(3.5);
            expect(sharedObject.income).to.equal(5);
        });

        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', () => {
            $('#income').val(5);
            sharedObject.changeIncome(-5);
            expect($('#income').val()).to.equal(5);
        });

        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', () => {
            $('#income').val(5);
            sharedObject.changeIncome('hello');
            expect($('#income').val()).to.equal(5);
        });

        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', () => {
            $('#income').val(5);
            sharedObject.changeIncome(3.5);
            expect($('#income').val()).to.equal(5);
        });

        it('changeIncome should change the income property if a proper value is passed, with preexisting value', () => {
            sharedObject.income = 5;
            sharedObject.changeIncome(10);
            expect($('#income').val()).to.equal(10);
        });

        it('changeIncome should change the income property if a proper value is passed, with preexisting value', () => {
            $('#income').value(5);
            sharedObject.changeIncome(10);
            expect($('#income').val()).to.equal(10);
        });
    });

    describe('updateName', function() {


        it('updateName should not change the name property if an invalid value is passed, with preexisting value', function() {
            $('#name').val('randomValue');
            sharedObject.updateName('');
            expect(sharedObject.name).to.be.equal("randomValue");
        });


        it('updateName should change the name property if a valid value is passed, with preexisting value', function() {
            $('#name').val('newrandomValue');
            sharedObject.updateName('newRandomValue');
            expect(sharedObject.name).to.be.equal("newRandomValue");
        });
        it('updateName should not change the textbox value if a valid value is passed, with preexisting value', function() {
            name = "Gosho";
            sharedObject.updateName('Stamat');
            expect(name).to.be.equal("Stamat");
        });
    });
});