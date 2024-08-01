import styles from '../css/GalleryList.module.css';
import { Link } from 'react-router-dom';

const GalleryList = ({galleryArray}) => {
    return (
        <div className={styles.galery}>
            {galleryArray.map((art,index)=>(
                <div key={index} className='card text-white bg-success'>
                    <h4 >{art.title}</h4>
                    <img src={art.imgUrl}/>
                    <Link to={`/art/${art.id}`} >Check This Work Of Art</Link>
                </div>
            ))}
        </div>
    );
}


export default GalleryList;
