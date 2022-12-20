const express = require ('express');
const mongoose = require ('mongoose');
const user = require ('./user.controller');

mongoose.connect('mongodb+srv://nemus:nemus_0310@cluster0.xaprjh6.mongodb.net/miapp?retryWrites=true&w=majority')

const app = express();
const port = 3000;

app.use(express.json())
//Endpoint
//Listar
app.get('/users', user.list);
//Crear
app.post('/users', user.create);
//Obtener
app.get('/users/:id', user.get);
//Actualizar
app.put('/users/:id', user.update);
//Actualizar
app.patch('/users/:id', user.update);
//Eliminar
app.delete('/users/:id', user.destroy);

app.use(express.static('app'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

//Manejo de rutas no existentes
app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe')
})

//Conexión servidor
app.listen(port, () => {
    console.log('Servidor funcionando')
})