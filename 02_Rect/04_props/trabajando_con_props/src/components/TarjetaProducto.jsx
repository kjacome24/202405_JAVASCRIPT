
import styles from '../css/TarjetaProducto.module.css';



const TarjetaProducto = (props) => {
    const {nombreProducto, precio, descripcion, enStock} = props;
    const agregarEstudiante = input => {
        console.log(`You clicked on ${input}`)
    };

    return (
        <div className={`card bg-light shadow-sm  ${styles.tarjetaProducto} `}>
            <h4>{nombreProducto}</h4>
            <p>$ {precio}</p>
            <p>{descripcion}</p>
            {enStock===true? <p className={styles.enStock}>En stock</p>:<p className={styles.soldOut}>Agotado</p>}
            <button className='btn btn-primary' onClick={() => agregarEstudiante(nombreProducto)}>
                Comprar
            </button>
        </div>
    )
}


export default TarjetaProducto;