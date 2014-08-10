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
	ultimoTODO.click(mandaADoing);
	ultimoTODO = nuevo;
	
	nuevo.focus();}
}; 
ultimoTODO.keydown(agregaNuevo);



var mandaADoing = function (event){
    console.log('mandando a doings');
    $(this).detach()
	.appendTo('#doings')
	.unbind('click')
	.click(mandaADone);
};

var mandaADone = function (event){
    console.log('mandando a done');
    $(this).detach()
	.appendTo('#dones')
	.unbind('click');
};
