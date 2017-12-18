class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (value.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let reg = /^[a-zA-Z0-9]+@[a-zA-Z\.]+$/;
        if (!reg.test(value)) {
            throw new TypeError('Invalid e-mail')
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let reg = /^[a-zA-Z]+$/;
        if (!reg.test(value)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        if (value.length < 3 || value.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        let reg = /^[a-zA-Z]+$/;
        if (!reg.test(value)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        if (value.length < 3 || value.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        this._LastName = value;
    }
}

//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');