$( document ).ready(function() {
  console.log( 'ready to roll!' );
});


var ultimoDeLista = $('.todo-el').last();
var agregaNuevo = function (event){
    console.log('ultimo apretado')
    if(event.which == 13){
	var nuevo = $('<input type="text" class="todo-el form-control" />');
	nuevo.keydown(agregaNuevo);
	ultimoDeLista.after(nuevo);
	ultimoDeLista.unbind();
	ultimoDeLista = nuevo;
	nuevo.focus();}
}; 
ultimoDeLista.keydown(agregaNuevo);
