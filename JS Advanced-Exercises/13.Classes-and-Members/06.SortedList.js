class SortedList {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.size++;
        return this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
        } else {
            throw new Error;
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        } else {
            throw new Error;
        }
    }

    size() {
        return this.size;
    }
}

let newList = new SortedList();
newList.add(5);
console.log(newList.get(0));