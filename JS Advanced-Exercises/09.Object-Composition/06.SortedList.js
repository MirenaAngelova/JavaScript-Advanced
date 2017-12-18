function sortedList() {
    return {
        collection: [],
        sort: function() {
            this.collection = this.collection.sort((a, b) => a - b);
        },
        add: function(element) {
            this.collection.push(element);
            this.size++;
            this.sort();
        },
        remove: function(index) {
            if (index >= 0 && index < this.size) {
                this.collection.splice(index, 1);
                this.size--;
            }
        },
        get: function(index) {
            if (index >= 0 && index < this.size) {
                return this.collection[index];
            }
        },
        size: 0,
        tosString: function() {
            return this.collection.join(', ');
        }
    }
}

let collection = sortedList();
console.log(collection.add(0));
console.log(collection.add(2));
console.log(collection.add(106));
console.log(collection.add(0));
console.log(collection.remove(2));
console.log(collection.get(2));
console.log(collection.size);
console.log(collection.tosString());