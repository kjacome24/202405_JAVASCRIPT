import { useState } from 'react';
import styles from '../css/Filtro.module.css';
import { useNavigate } from 'react-router-dom';

const Filtro = ()=>{
    const [recurso, setRecurso] = useState("");
    const [id,setId] = useState("");
    const navegar = useNavigate();
    const [errores,setErrores] = useState("");

    const enviar_solicitud = ()=> {
        setErrores("")
        if (recurso=== "" || id=== "" ) {
            setErrores("Por favor no olvides seleccionar un recurso y ID");
            return;} 
        navegar(`/${recurso}/${id}`)
    }

    return(
        <div className={styles.filtro}>
            <div className={styles.filtroadentro}>
                <label htmlFor="resource-select">Recurso: </label>
                <select id="resource-select" name="resource" value={recurso} onChange={(e) => setRecurso(e.target.value)}>
                    <option value="" disabled>Selecciona un recurso</option>
                    <option value="character">Personajes</option>
                    <option value="episode">Episodios</option>
                    <option value="location">Ubicaciones</option>
                </select>
                <label htmlFor="resource-id">ID: </label>
                <input
                    id="resource-id"
                    name="resourceId"
                    type="number"               
                    placeholder="Introduce el ID"
                    value={id}
                    onChange={((e)=>setId(e.target.value))}
                />
                <button className='btn btn-success' onClick={enviar_solicitud}>Consultar</button>
            </div>
            {errores && <p style={{ color: 'red'}}>{errores}</p>}
        </div>
    );
}

export default Filtro;