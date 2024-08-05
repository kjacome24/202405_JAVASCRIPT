import express from 'express';

const app = express();

const port = process.env.PORT || 8000; 



//////app.use to use midleware
app.use((req, res, next) => {
    console.log('Solicitud recibida:', req.method, req.url);
    next(); // Llama al siguiente middleware en la cadena
});




/////app.get to specifically return somthing for an specific route
app.get(
    '/home', (req,res) => {
        res.send('Hola mundo!')
    }
);

app.get('/producto',(req, res) => {
    res.send('Mostrando información del producto');
});



//////app.route
// Definimos la ruta '/usuarios' y encadenamos los métodos GET y POST
app.route('/usuarios')
.get((req, res) => {
    res.send('Obteniendo lista de usuarios');
})
.post((req, res) => {
    res.send('Creando un nuevo usuario');
});






////app.post to receive for example info from an form
app.post('/producto/nuevo', (req, res) => {
    // Aquí procesarías los datos del formulario enviado y agregarías el nuevo producto a la base de datos
    res.send('Producto agregado correctamente');
});




////app.put


app.put('/producto/:id', (req, res) => {
    // Aquí procesarías los datos enviados en la solicitud PUT y actualizarías el producto con el ID especificado
    res.send('Producto actualizado correctamente');
});



////app.delete

app.delete('/producto/:id', (req, res) => {
    // Aquí procesarías la solicitud DELETE y eliminarías el producto con el ID especificado de la base de datos
    res.send('Producto eliminado correctamente');
});


//////app.all():
app.all('/admin', (req, res) => {
    res.send('Página de administración');
  });



////res.send() y res.json():
// Estos métodos se utilizan para enviar una respuesta al cliente. Pueden enviar texto, HTML, objetos JSON, etc.
// Después de recibir una solicitud y procesarla, puedes usar estos métodos para enviar una respuesta al cliente con los datos necesarios.



app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!');
  });
  
  app.get('/usuario', (req, res) => {
    res.json({ nombre: 'Juan', edad: 30 });
  });



////app.listen(): Este método se utiliza para iniciar el servidor y hacer que escuche en un puerto específico.
app.listen(
    port, ()=>{
        console.log(`el servidor esta activo en el puerto ${port}`)
    }
);