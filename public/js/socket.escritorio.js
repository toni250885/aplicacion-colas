//establecer conexion
var socket = io();

var searchParams = new URLSearchParams( window.location.search );

let label = $('small');

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text("Escritorio " + escritorio);


//listener del boton
$('button').on('click',function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){

        if(resp === 'No hay tickets'){
            alert(resp);
            label.text('...');
            return;
        }

        label.text('Ticket '+resp.numero);
        console.log(resp);
    });
});
