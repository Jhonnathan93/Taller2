const express = require('express');
const app = express();
const pokeneaRoutes = require('./routes/routes');

app.use('/', pokeneaRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});