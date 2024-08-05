import express from 'express';
/////THis is needed for using the body
const app = express(); 
app.use(express.json());
app.use(express.urlencoded({extended: true}))



const PUERTO = 8080;

let estudiantes = [
    {
        nombre:"Alex",
        apellido : "Valdimort",
        edad: 23,
        id: 123
    },
    {
        nombre:"Kevin",
        apellido : "Morelo",
        edad: 25,
        id: 124
    }
];




app.get('/api/estudiantes', (req,res)=>{
    // console.log(req)
    return res.status(200).json(estudiantes);
})


app.get('/api/estudiante/:id', (req,res)=>{
    const id = Number(req.params.id);
    const estudianteEncontrado = estudiantes.find((estudiante)=>estudiante.id===id);
    if(!estudianteEncontrado){

    }
    return res.status(200).json(estudianteEncontrado);
});

app.post('/api/nuevo/estudiante',(req,res)=>{
    console.log(req.body);
    const {nombre,apellido,edad,id} = req.body;
    ///validation 
    if(!nombre || !apellido|| !edad || !id){
        res.statusMessage = "Por favor proporciona 'Nombre , apellido, edad y ID'"
        return res.status(406).json({mensaje: "Es necesario proporciona 'Nombre , apellido, edad y ID"})
    }
    const nuevoEstudiante = {
        nombre,
        apellido, 
        edad, 
        id
    }
    estudiantes.push(nuevoEstudiante);
    console.log(estudiantes)
    return res.status(201).json(nuevoEstudiante)
})


/////localhost:8080
app.listen(PUERTO, () => {
    console.log(`El servido se encuentra activo en el puerto ${PUERTO}`)
}

);