import React, { useState } from 'react';


const CardForm = ({ addCard }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderStyle, setBorderStyle] = useState('solid');


  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({ title, content, bgColor, borderStyle });
    setTitle('');
    setContent('');
    setBgColor('#ffffff');
    setBorderStyle('solid');
  };


  return (
    <form onSubmit={handleSubmit} className="card-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      <select
        value={borderStyle}
        onChange={(e) => setBorderStyle(e.target.value)}
      >
        <option value="solid">Solid</option>
        <option value="dotted">Dotted</option>
        <option value="dashed">Dashed</option>
      </select>
      <button type="submit">Add Card</button>
    </form>
  );
};


export default CardForm;