import styles from '../css/Tarjeta.module.css';

const Tarjeta = (props)=> {
    const {name, species,status, image, recurso, type,air_date,dimension,episode, arregloResidentes} = props;
    console.log(arregloResidentes)
    return (
        <div className={styles.tarjeta}> 
            <div className='card text-white bg-success' style={{height:"100%"}}>
                <h3>Detalles:</h3>
                <p>{recurso === "character" 
                ? `Nombre: ${name}` 
                : recurso === "episode" 
                ? `Nombre Episodio: ${name}` 
                : `Nombre Ubicacion: ${name}`}
                </p>
                <p>{recurso === "character" 
                ? `Especie: ${species}` 
                : recurso === "episode" 
                ? `Fecha de lanzamiento: ${air_date}`
                : `Tipo de ubicacion: ${type}` }
                </p>
                <p>{recurso === "character" 
                ? `Estatus: ${status}` 
                : recurso === "episode" 
                ? `Nomenclatura del episodio: ${episode}`
                : `Dimensiones: ${dimension}` }
                </p>
                
                    {recurso === "character" 
                        ? <img src= {image} alt='imagen de rick y morty'/>
                        : 
                        <>
                            <p>Personajes:</p>
                            <div className={styles.residentepadre}>
                                {arregloResidentes.map( (residente,index)=> {
                                return(
                                    <div key={index} className={styles.residentes}>
                                        <div>
                                            <img src={residente.image}/>
                                        </div>
                                    </div>)}) }
                            </div>
                        </> }
                
            </div>
            <div>

            </div>
        </div>
    );

}

export default Tarjeta;