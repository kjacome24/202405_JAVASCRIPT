import styles from '../css/Image_card.module.css';

const Image_card = ({random_image}) =>{
    return (
        <div className="card">
            <img src={random_image} className={styles.image} alt="Random image" />
        </div>
    );
}

export default Image_card;
