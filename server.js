const express = require('express');

const routes = require('./network/routes');
const db = require('./db');
db('mongodb+srv://user-chat:7MGjvrgcXU9JAie4@cluster0.s566z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/app', express.static('public'));
app.listen(3000);
console.log('server encendido');

routes(app);


// app.use(routes); //! El enrutador debe de ir al final ya que express tiene unos middleaware que evaluan antes de que pasen las rutas, si parsea antes de que ásen las rutas entonces no habra nada que mostrar

// const {router} = require('./components/message/network');