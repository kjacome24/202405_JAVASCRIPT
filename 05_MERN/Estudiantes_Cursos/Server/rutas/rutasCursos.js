import {Router} from 'express';
import ControladorCurso from '../controladores/controladoresCursos.js';

const rutasCursos = Router();

rutasCursos.get('/', ControladorCurso.obtenerTodos);
rutasCursos.post('/nuevo',ControladorCurso.agregar);


export default rutasCursos;