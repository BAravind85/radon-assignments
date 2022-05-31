const cardData = [{
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

function findCard(value, suit) {
    if (cardData[0].value == value && cardData[0].suit == suit) {
        console.log("true")
    }



    /** * 1. complete the above function,
     * it should return true /false if card is present/absent
     * * example
     * * findCard(5, 'heart') should return false
     * * findCard(10, 'club') should return true * * * */

    /** * 2. write a function which returns the list of available suits in the above data
     * * ans => ["heart", "club", "diamond"] *
     * 
     *
     * * 3. write a function which returns an object with the suits as its key and its total count as its value
     * * ans => *
     * {  heart:1, *    club:3, *    diamond:2, * } *
     *
     * * 4. write a function which returns an object with the suits as its key and its available values as value
     * * ans =>
     * * { *    heart:[7], *    club:[8,2,10], *    diamond:[2,5], * } *  */