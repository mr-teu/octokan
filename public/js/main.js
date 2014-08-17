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
	var nuevo = ultimoTODO.clone(false);
	nuevo.find('input').keydown(agregaNuevo);
	nuevo.find('input').val('');
	nuevo.appendTo('#todos');
	ultimoTODO.find('input').unbind('keydown');
	ultimoTODO.find('.btn-success').click(mandaTareaA('#doings',mandaTareaA('#dones', null))).show();
	ultimoTODO.find('.btn-danger').click(eliminaElemento).show();
	
	ultimoTODO = nuevo;
	
	nuevo.find('input').focus();
	nuevo.find('.btn-success').hide();
	nuevo.find('.btn-danger').hide();
    }
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

function toggleElementButtons(){
    var todoElement = $(this).parents('todo-el');
}



