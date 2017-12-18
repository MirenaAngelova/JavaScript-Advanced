function printDeckOfCards(deckOfCards) {
    let cards = [];
    try {
        deckOfCards.forEach(function(cardString) {
            let cardFace = cardString.substr(0, cardString.length - 1);
            let cardSuit = cardString[cardString.length - 1];
            let card = makeCard(cardFace, cardSuit);
            cards.push(card);
        }, this);
        console.log(cards.join(' '));
    } catch (error) {
        console.log(error.message);
    }

    function makeCard(face, suit) {
        let faces = {
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            'J': 'J',
            'Q': 'Q',
            'K': 'K',
            'A': 'A'
        };

        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!faces.hasOwnProperty(face)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
        if (!suits.hasOwnProperty(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            face: face,
            suit: suit,
            toString: function() {
                return faces[face] + suits[suit];
            }
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);