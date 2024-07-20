import { useState } from 'react';
import styles from '../css/TarjetaProducto.module.css';



const TarjetaProducto = (props) => {
    const {nombreProducto, precio, descripcion, enStock} = props;
    const [quantity, setQuantity] = useState(enStock);

    const comprar = () => {
        console.log(`You bought a ${nombreProducto}`)
        setQuantity(quantity -1)
    };

    return (
        <div className={`card bg-light shadow-sm  ${styles.tarjetaProducto} `}>
            <h4>{nombreProducto}</h4>
            <p>$ {precio}</p>
            <p>{descripcion}</p>
            {quantity>=1? <p className={styles.enStock}>En stock: {quantity}</p>:<p className={styles.soldOut}>Agotado</p>}
            {}
            <button className='btn btn-primary' onClick={() => comprar()} disabled={quantity === 0}>
                Comprar
            </button>
        </div>
    )
}


export default TarjetaProducto;