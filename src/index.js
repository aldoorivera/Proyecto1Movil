const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('port', process.env.port  || 3001);
app.use(morgan('combined'));
app.set(express.urlencoded({extended:false}));
app.set(express.json());
app.set('json space',2);
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto 3001');
});
