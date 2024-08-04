import styles from '../css/NoEncontrado.module.css';

const NoEncontrado = ()=> {
    return (
        <div className={styles.tarjetanoencontrado} > 
            <div className='card text-white bg-primary' style={{height:"100%"}}>
                <h2>¡No se encontró la ruta seleccionada!</h2>
                <img src='https://i.gifer.com/WS2c.gif' alt='No encontrada' />
            </div>
        </div>
    );

}

export default NoEncontrado;