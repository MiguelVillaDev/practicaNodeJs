const mongoose = require("mongoose");
const express = require('express');
const app = express();

const url = "mongodb+srv://miguelvilladev:Chaplin2@cluster0.x0gnmpb.mongodb.net"
mongoose.connect(url, {useNewUrlParser: true});
const cnx = mongoose.connection;

app.use(express.json());

try {
    cnx.on('open',()=>{
        console.log("Conectado a la DB");
    })
} catch (error) {
    console.log("Error: " + error);
    
}


app.get('/', (req, res) =>{
    res.send("<h1>Hola nueva página</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server con express en el puerto 3000")
});

const userRoute = require("./src/routes/userRoute");

app.use('/users', userRoute);
 
