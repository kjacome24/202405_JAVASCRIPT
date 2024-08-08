import {Curso} from '../modelos/modelosCursos.js';

const ControladorCurso = {
    obtenerTodos: async (req,res) => {
        try{
            const cursos = await Curso.find();
            return res.status(201).json(cursos);
        }catch(error){
            return res.status(400).json(error)
        }
    },
    agregar: async (req,res)=> {
        const {nombre,instructor,clave} = req.body;
        const nuevoCurso = {
            nombre,
            instructor, 
            clave
        }
        try{
            const curso = await Curso.create(nuevoCurso);
            return res.status(201).json(curso);
        }catch(error){
            return res.status(400).json(error)
        }
    }
}

export default ControladorCurso;