import Estudiante from '../modelos/modelosEstudiantes.js'


const ControladorEstudiante = {
    obtenerTodos : async  (req,res)=>{
        try{
            const estudiantes = await Estudiante.find();
            return res.status(201).json(estudiantes);
        }catch(error) {
            return res.status(400).json(error);
        } 
    },
    obtenerUnEstudiante: async (req,res)=>{
        const email = req.params.email;
        try{
            const estudianteEncontrado = await Estudiante.findOne({email});
        
            if(!estudianteEncontrado){
                
                return res.status(404).json({mensaje: "Este correo no le pertenence a ningun estudiante"})
            }
            return res.status(200).json(estudianteEncontrado);
        }catch(error){
            return res.status(400).json(error);
        }
    },
    crearEstudiante: async (req,res)=>{
        console.log(req.body);
        const {nombre,apellido,edad,email} = req.body;
        ///validation 
        if(!nombre || !apellido|| !edad || !email ){
            res.statusMessage = "Por favor proporciona 'Nombre , apellido, edad y email "
            return res.status(406).json({mensaje: "Es necesario proporciona 'Nombre , apellido y edad"})
        }
        const nuevoEstudiante = {
            nombre,
            apellido, 
            edad,
            email
        }
        try{
            const estudianteEnBaseDeDatos = await Estudiante.create(nuevoEstudiante);
            return res.status(201).json(estudianteEnBaseDeDatos);
        }catch(error) {
            if (error.errorResponse.code === 11000) {
                return res.status(400).json({ mensaje: "El email ya está registrado" });
            } else{
            }
            return res.status(400).json(error);
        } 
    },
    actualizarEstudiente: async (req,res)=> {
        const {nombre,apellido,edad,email} = req.body;
        const email_in = req.params.email;
        const datosAActualizar = {};
        if(nombre) {
            datosAActualizar.nombre = nombre;
        }
        if(apellido){
            datosAActualizar.apellido = apellido;
        }
        if(edad){
            datosAActualizar.edad = edad; 
        }
        if(email){
            datosAActualizar.email = email;
        }
        console.log(datosAActualizar);
        console.log(email_in)
        try{
            const estudianteActualizado = await Estudiante.findOneAndUpdate({email: email_in}, datosAActualizar, {new:true , runValidators: true} )
            if(!estudianteActualizado){
                return res.status(404).json({mensaje: "Este correo no le pertenence a ningun estudiante"})
            }
            return res.status(200).json(estudianteActualizado);
        }catch(error){
            return res.status(400).json(error);
        }
    },
    eliminarEstudiente: async (req,res)=> {
        const email =  req.params.email;
        try{
            const estudianteEliminado = await Estudiante.findOneAndDelete({email});
            console.log(estudianteEliminado)
            if(!estudianteEliminado){
                
                return res.status(404).json({mensaje: "Este correo no le pertenence a ningun estudiante"})
            }
            //Status 204 does not allow u to send a return message. 
            return res.status(204).end();
        }catch(error){
            return res.status(400).json(error);
        }
    }
}

export default ControladorEstudiante;