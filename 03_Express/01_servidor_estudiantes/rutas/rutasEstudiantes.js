import {Router} from 'express';
import ControladorEstudiante from '../controladores/controladoreEstudiantes.js';

const rutasEstudiantes = Router();



rutasEstudiantes.get('/', ControladorEstudiante.obtenerTodos);

rutasEstudiantes.get('/:email', ControladorEstudiante.obtenerUnEstudiante);

rutasEstudiantes.post('/nuevo',ControladorEstudiante.crearEstudiante);

rutasEstudiantes.put('/:email', ControladorEstudiante.actualizarEstudiente);

rutasEstudiantes.delete('/:email', ControladorEstudiante.eliminarEstudiente);

export default rutasEstudiantes;