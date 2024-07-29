import { useState, useEffect } from "react";

const Api_cats = ({setTrigger,setCounter,counter})=> {
    return (
        <div>
            <h1>Dar clic al codigo para cargar 10 gatos</h1>
            <button onClick={()=>setTrigger("True")}>Cargar</button>
            <button onClick={()=>setCounter((prevCount) => prevCount +1)}>{counter}</button>
        </div>
    );

}

export default Api_cats;