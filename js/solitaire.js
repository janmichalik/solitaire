var Card = (function () {
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