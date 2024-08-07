import express from 'express';
const app = express();
const puerto = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
const libros = [
    { id: 1, titulo: "El Último Deseo", autor: "Andrzej Sapkowski" },
    { id: 1, titulo: "La Espada del Destino", autor: "Andrzej Sapkowski" },
    { id: 2, titulo: "La Sangre de los Elfos", autor: "Andrzej Sapkowski" },
    { id: 2, titulo: "Tiempo de Odio", autor: "Andrzej Sapkowski" },
    { id: 3, titulo: "Bautismo de Fuego", autor: "Andrzej Sapkowski" },
    { id: 3, titulo: "La Torre de la Golondrina", autor: "Andrzej Sapkowski" },
    { id: 3, titulo: "La Dama del Lago", autor: "Andrzej Sapkowski" },
    { id: 4, titulo: "Estación de Tormentas", autor: "Andrzej Sapkowski" }
];

// Ruta para obtener todos los libros
app.get('/api/libros', (req, res) => {
  res.json(libros);
});

// Ruta para obtener un libro por ID
app.get('/api/libros/:id', (req, res) => {
  // Usamos el método find para obtener el primer libro que tenga el ID coincidente
  const obtenerLibroPorId = libros.find(libro => libro.id == req.params.id);
  // Siempre agrega un console.log para ver qué está pasando
  console.log(obtenerLibroPorId);
  res.json(obtenerLibroPorId);
});

app.get('/api/libros2/:id', (req, res) => {
    // Usamos el método filter para obtener todos los libros que tengan el ID coincidente
    const obtenerTodosLosLibrosPorId = libros.filter(libro => libro.id == req.params.id);
  
    // Siempre agrega un console.log para ver qué está pasando
    console.log(obtenerTodosLosLibrosPorId);
  
    res.json(obtenerTodosLosLibrosPorId);
  });


///////////////////this is to update data
app.put('/api/libros/:id', (req, res) => {
    libros.forEach((libro, idx) => {
    if (libro.id == req.params.id) {
      // Actualizamos el libro con los valores nuevos del cuerpo de la solicitud
        libro = { ...libro, ...req.body };
      // Usamos idx para actualizar el libro en su posición original en el array
        libros[idx] = libro;
    }
    
});
  // Encontramos y devolvemos el libro actualizado
  const libroActualizado = libros.find(libro => libro.id == req.params.id);
  console.log(libroActualizado);
  res.json(libroActualizado);
});








/////////////////////Patch to partially update data
app.patch('/api/libros/:id', (req, res) => {
    libros.forEach((libro, idx) => {
    if (libro.id == req.params.id) {
      // Actualizamos solo las propiedades específicas
    if (req.body.titulo) libro.titulo = req.body.titulo;
    if (req.body.autor) libro.autor = req.body.autor;
      // Usamos idx para actualizar el libro en su posición original en el array
    libros[idx] = libro;
    }
});

  // Encontramos y devolvemos el libro actualizado
    const libroActualizado = libros.find(libro => libro.id == req.params.id);
    console.log(libroActualizado);
    res.json(libroActualizado);
});





app.delete('/api/libros/:id', (req, res) => {
    const id = Number(req.params.id);
    const indiceLibro = libros.findIndex(libro => libro.id === id);
  
    if (indiceLibro !== -1) {
      libros.splice(indiceLibro, 1);
      res.json({ mensaje: 'Libro eliminado' });
    } else {
      res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
  });


app.listen(puerto, () => {
    console.log(`El servidor está funcionando en http://localhost:${puerto}`);
});