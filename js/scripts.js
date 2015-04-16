function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
}

function Deck() {
    this.deck = [];
    this.makeDeck = makeDeck;
}

var player1 = [];
var player2 = [];
var main_deck = [];
var main_deck2 = main_deck;

function makeDeck() {
    var ranks = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
    var suits = [ "C", "D", "H", "S" ];

    this.deck = [];

    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < ranks.length; j++) {
            this.deck.push(new Card(ranks[j], suits[i]));
        }
    }

}
console.log(main_deck);

function selectFirstCards(){
    var i=0;
    do { var index = Math.floor(Math.random() * main_deck.length);
        var index1 = Math.floor(Math.random() * main_deck.length);
        main_deck2.splice(index,1);
        main_deck3.splice(index1, 1);
    var selectedCard = main_deck[index];
    player1.push(selectedCard);
    i++;
    }
    while(i < 2);

}

function hitCard(){
    var index = Math.floor(Math.random() * main_deck.length);
    var selectedCard = main_deck2[index];
    player1.push(selectedCard);

}


// Javascript Prototypes
// var suit = [ "Hearts", "Diamonds", "Spades", "Clubs" ];
// var value = [ "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K" ];
// var deck = [ [2, "Hearts"], [9, "Clubs"], ... ];
//
//
// var x = {
//     create: function() {
//         for each suit {
//             for each value {
//                 create a single card array (ex: [2, "Hearts"]) and store it in var something
//             }
//         }
//     }
// }
//
//
// var Card = {
//         value: { A:1, 1:1,
//                  2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10,
//                  J:10, Q:10, K:10 },
//         select:function
//         suit:  [ H, D, S, C ]
//
// };


// jQuery
$(document).ready(function() {
    $("form#form-id").submit(function(event) {
        event.preventDefault();



    });
});
