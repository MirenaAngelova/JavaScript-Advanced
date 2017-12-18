function tickets(arr, sorter) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (let a of arr) {
        let [destination, price, status] = a.split('|');
        price = Number(price);

        let obj = new Ticket(destination, price, status);
        result.push(obj);
    }

    return result.sort((a, b) => {
        if (typeof(a[sorter]) == 'string') {
            if (a[sorter] != b[sorter]) {
                return a[sorter].localeCompare(b[sorter]);
            }
        } else {
            return a[sorter] - b[sorter];
        }
    });
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));