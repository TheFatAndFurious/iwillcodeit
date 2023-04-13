import React, { useState } from "react";

function Card() {

    const [isActive, setActive] = useState("false");

    // Creation du jeu de carte

    function deckCreation() {
        // creation du tableau qui va contenir les cartes
        let cards = [];

        //on genere des cartes de 1 a 6
        for (let i = 0; i < 6; i++) {
            cards.push(i);
        }

        //on melange les cartes dans le tableau
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }

    

    return (
        <div className="active">Coucou</div>
    )
  }
  
  export default Card;