const express = require('express'); // 1.Importar biblioteca
const app = express(); // 2.Instanciar a express
const port = 3000; // 3.puerto de conexion

//5. Middlewards
app.use(express.urlencoded({extended:false})); // Para datos en text/plain
app.use(express.json()); // Para datos en formato json

//6. Endpoints
app.get('/hello', (req,res)=>{
res.send('Hello world');
});

// 4. Crear el servidor
app.listen(port,()=>{
    console.log(`run server OK ${port}`);
});