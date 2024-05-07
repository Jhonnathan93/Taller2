const app = require('./config/app'); 

const pokeneaRoutes = require('./routes/routes');

app.use('/', pokeneaRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server initialized eat port ${app.get('port')}`);
});