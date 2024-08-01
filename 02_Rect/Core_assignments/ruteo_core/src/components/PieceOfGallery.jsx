import styles from '../css/PieceOfGallery.module.css';
import { useParams, Link } from "react-router-dom";
import ApiAxios from './ApiAxios';



const PieceOfGallery = ({galleryArray})=>{
    const params = useParams();
    const idparams = Number(params.id); 

    const currentArray = galleryArray.find(pieaceOfArt=> pieaceOfArt.id === idparams);
    const currentIndex = galleryArray.findIndex(pieaceOfArt=> pieaceOfArt.id === idparams);
    const previousArray = currentIndex === 0 ? (currentArray) : galleryArray[currentIndex - 1];
    const nextArray = galleryArray.length - 1 === currentIndex ? currentArray : galleryArray[currentIndex + 1];



    return (
        <>
            <h1>{currentArray.title}</h1>
            <div className={styles.piecegalery}>
                <div className="card" style={{ width: '35rem', height: '30rem'  }}>
                    <img className="card-img-top" src={currentArray.imgUrl} style={{ height: '22rem'}} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text" style={{ height: '1rem'}}>
                            {currentArray.thumbnail.alt_text}
                        </p>
                    </div>
                    <div className="card-body">
                    <Link to={`/art/${previousArray.id}`}>
                        {currentIndex === 0 ? <button className='btn btn-success' disabled>Previous</button> : <button className='btn btn-success' >Previous</button>}
                    </Link>
                    <Link to={`/home`}>
                        <button className='btn btn-success'>Home</button>
                    </Link>
                    <Link to={`/art/${nextArray.id}`}>
                        {galleryArray.length - 1 === currentIndex ? <button className='btn btn-success' disabled>Next</button> : <button className='btn btn-success' >Next</button>}
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PieceOfGallery;