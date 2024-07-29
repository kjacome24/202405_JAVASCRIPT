import React, { useState } from 'react';


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
          >
            {item.label}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default Accordion;
