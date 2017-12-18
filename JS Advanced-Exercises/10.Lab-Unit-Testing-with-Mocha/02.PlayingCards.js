function makeCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    let suitChar = {
        S: "\u2660 ",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    };

    if (faces.includes(face) && suits.includes(suit)) {
        let card = {
            face: face,
            suit: suit,
            toString: function() {
                return card.face + suitChar[suit];
            }
        };
        return card;
    } else {
        throw new Error;
    }
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));