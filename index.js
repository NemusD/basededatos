const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nemus:nemus_0310@cluster0.xaprjh6.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    age: Number,
})

const crear = async () => {
    const user = new User({ username: 'Che Guevara', age: 42 })
    const saveUser = await user.save()
    console.log(saveUser)
}

//crear()

//buscar todo
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
//buscarTodo()

//Buscar uno en particular
const buscar = async () => {
    const user = await User.find({ username: 'Federico'})
    console.log(user)
}

//buscar()

//Buscar uno
const buscarUno = async () => {
    const user = await User.findOne({ username: 'Federico' })
    console.log(user)
}
//buscarUno()

//Actualizar
const actualizar = async () => {
    const user = await User.findOne({ username: 'Federico' })
    console.log(user)
    user.edad = 34
    const newAge = await user.save()
    console.log(newAge)
}
//actualizar()

//Eliminar
const eliminar = async () => {
    const user = await User.findOne({ username: 'Che Guevara' })
    console.log(user)
    if (user) {
        await user.remove()
    }
    
}
eliminar()