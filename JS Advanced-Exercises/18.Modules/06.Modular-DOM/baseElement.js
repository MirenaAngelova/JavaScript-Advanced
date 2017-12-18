class BaseElement {
    constructor() {
        if (new.target === BaseElement) {
            throw new Error('Cannot be instantiate directly!')
        }

        this.element = null;
    }

    appendTo(selector) {
        this.createElement();
        $(selector).append(this.element);
    }

    createElement() {
        this.element = this.getElementString();
    }

    getElementString() {
        // to be specified in child classes
    }
}

module.exports = BaseElement;