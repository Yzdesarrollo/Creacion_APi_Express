const express = require('express'); // 1.Importar biblioteca
const app = express(); // 2.Instanciar a express
const port = 3000; // 3.puerto de conexion

//5. Middlewards
app.use(express.urlencoded({ extended: false })); // Para datos en text/plain
app.use(express.json()); // Para datos en formato json

//6. Endpoints
// GET
// localhost:3000/hello
app.get('/hello', (req, res) => {
    let data = req.query;
    console.log(data);
    
    res.send(data);
});

// POST
//localhost:3000/ingreso
app.post('/ingreso', (req, res) => {
    let data = req.body;
    res.json({
        respuesta: data
    });
});

// PUT
// localhost:3000/update
app.put('/update', (req,res) =>{
    res.json({
        respuesta: 'endpoint update OK'
    })
});

// DELETE
// localhost:3000/delete
app.delete('/delete', (req,res)=>{
    res.json({
        respuesta: 'endpoint delete OK'
    })
})

// 4. Crear el servidor
app.listen(port, () => {
    console.log(`run server OK ${port}`);
});