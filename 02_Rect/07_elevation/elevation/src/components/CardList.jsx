import React from 'react';
import Card from './Card';


const CardList = ({ cards, removeCard }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} {...card} removeCard={() => removeCard(index)} />
      ))}
    </div>
  );
};


export default CardList;
