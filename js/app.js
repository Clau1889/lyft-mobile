
 $(document).ready(function () {

    // ******************FUNCION PARA SPLASH******************//
    setTimeout(function() {
       $('#splash').fadeOut(500);
    }, 2000);

    $('#sign-up').click(getSignUp);

    // *************FUNCION PARA ENLAZAR EL BOTON SIGN UP*************//
    function getSignUp (event){
        event.preventDefault();
        console.log('hola');
        window.location.href= 'views/open-sing.html';
    }

});