import styles from '../css/NoEncontrado.module.css';

const NoEncontrado = ()=> {
    return (
        <div className={styles.tarjetanoencontrado} > 
            <div className='card text-white bg-success' style={{height:"100%"}}>
                <h2>¡No se encontró el episodio, personaje o ubicación seleccionada!</h2>
                <img src='https://i.gifer.com/WS2c.gif' alt='No encontrada' />
            </div>
        </div>
    );

}

export default NoEncontrado;