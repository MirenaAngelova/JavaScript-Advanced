let $ = require('jquery');
let sharedObject = {
    name: null,
    income: null,
    changeName: (name) => {
        if (name.length == 0) {
            return;
        }

        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: (income) => {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }

        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.name);
    },
    updateName: () => {
        let newName = $('#name').val();
        if (newName.length == 0) {
            return;
        }

        this.name = newName;
    },
    updateIncome: () => {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }

        this.income = Number(newIncome);
    }
};
module.exports = { sharedObject };