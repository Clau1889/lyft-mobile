$(document).ready(function () {

    $('select').formSelect();

    $('#phone').keydown(getPhoneNumber);

    function getPhoneNumber(e) {
        var charactersNumbers = 9;
        var getCharacters = $(this).val().length;
        var key = e.keyCode;

    
        if (!getAsciiChars(key)) {
            e.preventDefault();
            return;
        }

        if (getCharacters === charactersNumbers) {
            $('#btn-next').removeClass('disabled');
        } else if (getCharacters > charactersNumbers){
            $("#phone").attr('disabled', 'disabled');
        }

    }

    function getAsciiChars(key) {
        return (   
            key == 8 ||       
            key == 9 ||
            key == 13 ||
            (key >= 48 && key <= 57));
    }


    $('#btn-next').click(function (){
        swal("Your code is this: 1s2g6d5", {
            content: "input",
          })
          .then((value) => {
             swal("Good job!");
          });
    });
});
