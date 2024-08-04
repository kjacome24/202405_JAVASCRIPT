import { useParams } from "react-router-dom";
import Estudiante from "./Estudiante";

const DetalleEstudiante = ({estudiantes}) =>{
    const parametros = useParams();
    const idParametro = Number(parametros.id);

    const estudiante_actual = estudiantes.find(estudiante=> estudiante.id===idParametro);
    console.log(estudiante_actual)
    return(
        <div className="estudiantes">
            <Estudiante 
                {...estudiante_actual}
                />
        </div>
    );
}

export default DetalleEstudiante;