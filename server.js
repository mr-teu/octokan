// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

// ROUTES DE LA API
//=========================================================
var apiRouter = express.Router();

apiRouter.get('/', function(req, res){
    res.json({ message: 'Esta es nuestra API!'});
});

apiRouter.route('/tareas')
    // crea nueva tarea accesada en POST /api/tareas
    .post(function(req,res){
	//crea nueva tarea
    })

// jala todas las tareas
    .get(function(req,res){
	
    })
;

//middleware to be used in all requests
// here one can add analytics, etc..
router.use(function(req,res,next){
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
