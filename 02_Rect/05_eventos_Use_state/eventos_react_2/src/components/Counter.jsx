import { useState } from 'react';

const Counter = () =>{
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const counter_func = () => {
        setCounter(counter +1);
    }

    return (
    <>
        <div>
            <h4>Counter using fuction</h4>
            <button className='btn btn-primary' onClick={() => counter_func()}>CLick here!
            </button>
            <p>The counter is: {counter}</p>
        </div>
        <div>
            <h4>Counter using direct arrow fuction with setCounter</h4>
            <button className='btn btn-primary' onClick={() => setCounter2(counter2 +1)}>CLick here!
            </button>
            <p>The counter is: {counter2}</p>
        </div>
    </>);


}

export default Counter;