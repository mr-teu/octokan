$(document).ready(function() {
    console.log( 'ready to roll!' );
    var ultimoTODO = $('.todo-el').last();
    ultimoTODO.find('input').keydown(agregaNuevo);
});
//Setup

//TODO



// TODO UI

function agregaNuevo(event){
    if(event.which == 13){
	var ultimoTODO = $(this).parents('.todo-el');
	var nuevo = ultimoTODO.clone();
	nuevo.find('input').keydown(agregaNuevo);
	nuevo.appendTo('#todos');
	ultimoTODO.find('input').unbind('keydown');
	ultimoTODO.find('.btn-success').click(mandaTareaA('#doings',mandaTareaA('#dones', null)));
	ultimoTODO.find('.btn-danger').click(eliminaElemento);
	ultimoTODO = nuevo;
	
	nuevo.find('input').focus();}
}; 

function mandaTareaA(columna, onClick){
    return function (event) {
	console.log('mandando a ' + columna);
	$(this).parents('.todo-el').detach()
	    .appendTo(columna)
	    .find('.btn-success')
	    .unbind('click')
	    .bind('click', onClick);
    };
};

function eliminaElemento(){
    console.log('Borrando elemento');
    $(this).parents('.todo-el').remove();
};



