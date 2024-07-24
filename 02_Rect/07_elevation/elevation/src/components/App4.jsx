import React, { useState } from 'react';
import CardForm from './CardForm';
import CardList from './CardList';
import '../index.css';


const App4 = () => {
    const [cards, setCards] = useState([]);


    const addCard = (card) => {
    setCards([...cards, card]);
    };


    const removeCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
};


    return (
    <div className="app">
        <h1>Generador de Tarjetas</h1>
        <CardForm addCard={addCard} />
        <CardList cards={cards} removeCard={removeCard} />
    </div>
);
};


export default App4;