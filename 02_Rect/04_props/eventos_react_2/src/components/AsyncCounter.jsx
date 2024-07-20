import { useState, useEffect } from "react";


const AsyncCounter = () => {
const [counter, setCounter] = useState(0);

const increase = () => {
    setCounter((prevCount) => prevCount +1);
    setCounter((prevCount) => prevCount +1);
}

////THis is the one to make it synchronous
useEffect(() => {
    console.log(counter);
}, [counter]); // This will run whenever `counter` changes

return(
        <>
            <p>{counter}</p>
            <button className="btn btn-primary" onClick={(counter) => increase(counter)}>Click here!</button>
        </>
    );
}

export default AsyncCounter;