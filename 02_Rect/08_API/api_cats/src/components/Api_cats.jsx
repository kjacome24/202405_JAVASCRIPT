import { useState, useEffect } from "react";

const Api_cats = ({setTrigger,setCounter,counter})=> {
    // const obtenerImagenes = async  ()=> {

////Example 1:

        // const url = "https://api.thecatapi.com/v1/images/search?limit=10";
        // const response = await fetch(url);
        // const datos = await response.json();
        // console.log(datos);
        // setImages(datos)

        
////Example 2:
    //     fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    //         .then(response => response.json())
    //         .then(datos => {
    //             setImages(datos); // Set the images state with the fetched data
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });

////Example 3:

    // try {
    //     const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    //     const datos = await response.json();
    //     setImages(datos)
    // } catch (error) {
    //     console.log(error);
    // } finally {
    //     console.log("Api succesfully used");
    // }




    // };

    return (
        <div>
            <h1>Dar clic al codigo para cargar 10 gatos</h1>
            <button onClick={()=>setTrigger("True")}>Cargar</button>
            <button onClick={()=>setCounter((prevCount) => prevCount +1)}>{counter}</button>
        </div>
    );
}

export default Api_cats;