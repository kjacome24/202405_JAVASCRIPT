import { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    const {arrayBoxes, removeBoxes, children} = props;

    return (
        <div className='boxes'>
            
            {arrayBoxes.map((card,index)=> 
                <Card key={index} index={index} {...card} removeBoxes={removeBoxes}/> )}
                {/* {children} */}
    </div>
    );
}

export default Cards