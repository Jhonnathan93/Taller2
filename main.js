const app = require('./config/app'); 

const pokeneaRoutes = require('./routes/routes');

app.use('/', pokeneaRoutes);

app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});