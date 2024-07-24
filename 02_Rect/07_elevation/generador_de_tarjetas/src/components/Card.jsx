import styles from '../css/Card.module.css'

const Card =  (props) => {
    const {title, content, color, border, index, removeBoxes} = props;
    const removing =()=> {
        removeBoxes(index)
    }
    return (
        <div className={`${styles.card2} `} style={{backgroundColor : color, borderStyle: border }}>
            <h4 >{title}</h4>
            <p>{content}</p>
            <button className='btn btn-primary' onClick={removing }>Remover</button>
        </div>
    );

}

export default Card;