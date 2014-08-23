// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var pg = require("pg");
var bodyParser = require("body-parser");

app.use(logfmt.requestLogger());

//USE BODY PARSER
//THIS LETS US GET DATA FROM A POST REQUEST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//CONEXION A POSTGRESQL
//========================================================

// ROUTES DE LA API
//=========================================================
var apiRouter = express.Router();

apiRouter.get('/', function(req, res){
    res.json({ message: 'Esta es nuestra API!'});
});

apiRouter.route('/tareas')
// crea nueva tarea accesada en POST /api/tareas
    .post(function(req,res){
	pg.connect(process.env.DATABASE_URL, function(err, client, done){
	    console.log('Connecting to database');
	    if(err)
		console.log('DB connection error');
	    else
		client.query("INSERT INTO tarea(nombre, fecha_creacion) VALUES($1, Now())",[req.body.nombre], function(err, result) {
		    done();
		    
		    if(err) {
			return console.error('error running query', err);
		    } else
			console.log('Task inserted');
		});
	});
	
    })

// Jala todas las tareas
    .get(function(req,res){
	pg.connect(process.env.DATABASE_URL, function(err, client, done){
	    console.log('Connecting to database');
	    if(err){
		console.log('DB connection error');
		res.send(500);
	    }
	    else{
	    //var sqlCreationQuery = 'CREATE TABLE tarea(id_tarea serial PRIMARY KEY, fecha_creacion timestamp, nombre varchar(100))';
	    client.query('SELECT * FROM tarea', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		    return console.error('error running query', err);
		}
		else{
		    result.rows.forEach(function(element){
			console.log(element);
		    });
		}
		res.json(result.rows);
		//output: 1
	    });}
	});	
    });

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
