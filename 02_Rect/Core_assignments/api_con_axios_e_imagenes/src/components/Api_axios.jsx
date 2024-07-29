import React, {useState,useEffect} from 'react';
import axios from 'axios';


const Api_axios = ({setRandom_image})=> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trigger,setTrigger] = useState(false);


    const get_img = ()=>{
        //Here we are gonna auto generate a random number taking into consideration we have 898 pokemons.
        const maxPokemonId = 898;
        const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
        ///Here we will add the pokeball moving when the api is loading
        setRandom_image('https://i.gifer.com/DeRD.gif')
        //This will basically forced the button to be disabled while the api is fetching info
        setLoading(true);
        const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
        ///The settimeout is no needed for this example but makes it looks cooler becuase while is loading the pokeball will last longer moving. 
        setTimeout((
        ) => {
            axios(url).then(
                response => 
                {
                    ///Here we need to pint to the right object within the object which in this case is an image url
                    {console.log(response.data.sprites.other.home.front_default)}
                    setRandom_image(response.data.sprites.other.home.front_default)
                }
    
            ).catch( error =>{
                console.log("Error fetching images:", error);
                setError(error)
            }
            ).finally(()=>{
                
                setLoading(false)
                setTrigger(false)
            }


            )
        }, 500);
    }

    useEffect(
        ()=> {
            get_img();
        }
    ,[trigger===true]);

    return(
        <div className='card'>
            <button className='btn btn-primary' onClick={()=>setTrigger(true)} disabled={loading}>{loading? "Loading":"Get a new random image"}</button>
        </div>
    );

}

export default Api_axios;