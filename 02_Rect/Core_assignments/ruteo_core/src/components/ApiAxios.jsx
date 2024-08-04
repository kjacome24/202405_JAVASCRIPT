import React, {useState,useEffect} from "react";
import axios from 'axios';

const ApiAxios = ({setGalleryArray})=> {
    const [error, setError] = useState(null);
    useEffect(
        ()=> {
            getData();
        }
    ,[]);

    const getData = ()=>{
        const url = `https://api.artic.edu/api/v1/artworks?page=2&limit=20`;
        axios(url).then(
            response => {
                const newArrayAPI = response.data.data.map(art =>(
                    {...art, imgUrl:`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg` }
                ) 
                
            );
            const filteredArray = newArrayAPI.filter(pieaceOfArt => 
                pieaceOfArt.id !== null &&
                pieaceOfArt.image_id !== null &&
                pieaceOfArt.thumbnail !== null &&
                pieaceOfArt.thumbnail.alt_text !== null
            )
            setGalleryArray(filteredArray)
            }
        ).catch(
            error => {
                console.log("Error fetching images:", error);
                setError(error)
            }
        ).finally(()=>{
                
        })
    }
}

export default ApiAxios;