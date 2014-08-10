$(document).ready(function() {
  console.log( 'ready to roll!' );
});
//Setup

//TODO



// TODO UI
var ultimoTODO = $('.todo-el').last();
var agregaNuevo = function (event){
    console.log('ultimo apretado')
    if(event.which == 13){
	var nuevo = $('<input type="text" class="todo-el form-control" />');
	nuevo.keydown(agregaNuevo);
	nuevo.appendTo('#todos');
	ultimoTODO.unbind('keydown');
	ultimoTODO.click(mandaTareaA('#doings',mandaTareaA('#dones', null)));
	ultimoTODO = nuevo;
	
	nuevo.focus();}
}; 
ultimoTODO.keydown(agregaNuevo);

var mandaTareaA = function(columna, onClick){

    return function (event) {
	console.log('mandando a' + columna);
	$(this).detach()
	.appendTo(columna)
	.unbind('click')
	.bind('click', onClick);
    };
};

