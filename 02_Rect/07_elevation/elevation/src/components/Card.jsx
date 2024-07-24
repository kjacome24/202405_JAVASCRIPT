import React from 'react';


const Card = ({ title, content, bgColor, borderStyle, removeCard }) => {
    return (
    <div
        className="card"
        style={{
            backgroundColor: bgColor,
            border: `1px ${borderStyle} black`,
            padding: '10px',
            margin: '10px',
            width: '200px',
            height: '150px'
    }}
    >
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={removeCard}>Remove</button>
    </div>
);
};


export default Card;