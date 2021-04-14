var cardColor;
(function (cardColor) {
    cardColor[cardColor["Club"] = 0] = "Club";
    cardColor[cardColor["Diamond"] = 1] = "Diamond";
    cardColor[cardColor["Heart"] = 2] = "Heart";
    cardColor[cardColor["Spade"] = 3] = "Spade";
})(cardColor || (cardColor = {}));
var Card = /** @class */ (function () {
    function Card(name, value, cardColor) {
        this.name = name;
        this.value = value;
        this.color = cardColor;
        this.hidden = false;
        this.used = false;
    }
    Card.prototype.checkName = function () {
        return "Card name: " + this.name;
    };
    return Card;
}());
var gameSlots = [1, 2, 3, 4, 5, 6, 7];
var cards = [
    new Card("Ace Club", 0, cardColor.Club),
    new Card("2 Club", 1, cardColor.Club),
    new Card("3 Club", 2, cardColor.Club),
    new Card("4 Club", 3, cardColor.Club),
    new Card("5 Club", 4, cardColor.Club),
    new Card("6 Club", 5, cardColor.Club),
    new Card("7 Club", 6, cardColor.Club),
    new Card("8 Club", 7, cardColor.Club),
    new Card("9 Club", 8, cardColor.Club),
    new Card("10 Club", 9, cardColor.Club),
    new Card("Jack Club", 10, cardColor.Club),
    new Card("Queen Club", 11, cardColor.Club),
    new Card("King Club", 12, cardColor.Club),
    new Card("Ace Diamond", 0, cardColor.Diamond),
    new Card("2 Diamond", 1, cardColor.Diamond),
    new Card("3 Diamond", 2, cardColor.Diamond),
    new Card("4 Diamond", 3, cardColor.Diamond),
    new Card("5 Diamond", 4, cardColor.Diamond),
    new Card("6 Diamond", 5, cardColor.Diamond),
    new Card("7 Diamond", 6, cardColor.Diamond),
    new Card("8 Diamond", 7, cardColor.Diamond),
    new Card("9 Diamond", 8, cardColor.Diamond),
    new Card("10 Diamond", 9, cardColor.Diamond),
    new Card("Jack Diamond", 10, cardColor.Diamond),
    new Card("Queen Diamond", 11, cardColor.Diamond),
    new Card("King Diamond", 12, cardColor.Diamond),
    new Card("Ace Heart", 0, cardColor.Heart),
    new Card("2 Heart", 1, cardColor.Heart),
    new Card("3 Heart", 2, cardColor.Heart),
    new Card("4 Heart", 3, cardColor.Heart),
    new Card("5 Heart", 4, cardColor.Heart),
    new Card("6 Heart", 5, cardColor.Heart),
    new Card("7 Heart", 6, cardColor.Heart),
    new Card("8 Heart", 7, cardColor.Heart),
    new Card("9 Heart", 8, cardColor.Heart),
    new Card("10 Heart", 9, cardColor.Heart),
    new Card("Jack Heart", 10, cardColor.Heart),
    new Card("Queen Heart", 11, cardColor.Heart),
    new Card("King Heart", 12, cardColor.Heart),
    new Card("Ace Spade", 0, cardColor.Spade),
    new Card("2 Spade", 1, cardColor.Spade),
    new Card("3 Spade", 2, cardColor.Spade),
    new Card("4 Spade", 3, cardColor.Spade),
    new Card("5 Spade", 4, cardColor.Spade),
    new Card("6 Spade", 5, cardColor.Spade),
    new Card("7 Spade", 6, cardColor.Spade),
    new Card("8 Spade", 7, cardColor.Spade),
    new Card("9 Spade", 8, cardColor.Spade),
    new Card("10 Spade", 9, cardColor.Spade),
    new Card("Jack Spade", 10, cardColor.Spade),
    new Card("Queen Spade", 11, cardColor.Spade),
    new Card("King Spade", 12, cardColor.Spade)
];
var Solitaire = /** @class */ (function () {
    function Solitaire() {
        cards.forEach(function (card) {
            var min = 0, max = 7;
            for (var i = 0; i < gameSlots.length * gameSlots.length; i++) {
                if (gameSlots[i] > 0) {
                    card.used = true;
                    card.slot = Math.floor(Math.random() * (max - min)) + min;
                    gameSlots[i]--;
                }
            }
        });
        cards.forEach(function (card) {
            console.log(card);
        });
    }
    Solitaire.prototype.startGame = function () {
        // let's start ...
        console.log("witam");
    };
    return Solitaire;
}());
var solitaire = new Solitaire();
solitaire.startGame();
