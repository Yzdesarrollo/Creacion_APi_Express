const express = require('express'); // 1.Importar biblioteca
const app = express(); // 2.Instanciar a express
const port = 3000; // 3.puerto de conexion

app.listen(port,()=>{
    console.log(`run server OK ${port}`);
});