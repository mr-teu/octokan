// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var pg = require('pg');

app.use(logfmt.requestLogger());

//CONEXION A POSTGRESQL
//========================================================
//pg.connect(process.env.DATABASE_URL, function(err, client){
    //    var sqlCreationQuery = 'CREATE TABLE tarea(id_tarea serial PRIMARY KEY, fecha_creacion timestamp, nombre varchar(100))';
    //  client.query(sqlCreationQuery);
//});


// ROUTES DE LA API
//=========================================================
var apiRouter = express.Router();

apiRouter.get('/', function(req, res){
    res.json({ message: 'Esta es nuestra API!'});
});

apiRouter.route('/tareas')
    // crea nueva tarea accesada en POST /api/tareas
    .post(function(req,res){
	var sqlInsertionStr = '';
    })

// jala todas las tareas
    .get(function(req,res){
	console.log('ahuevo');
    })
;

//middleware to be used in all requests
// here one can add analytics, etc..
apiRouter.use(function(req,res,next){
    console.log('API being accesed');
    next(); //remember this is middleware; this calls the next routes
});

app.use('/api',apiRouter);


// ROUTES DEL SITIO
//==========================================================
app.use(express.static(__dirname + '/public'));


// INICIO DEL SERVIDOR
//========================================================
var port = Number(process.env.PORT || 80);
app.listen(port, function() {
	console.log("Listening on " + port);
    });
