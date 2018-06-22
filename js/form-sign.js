$(document).ready(function () {

    $('select').formSelect();

    $('#phone').keydown(getPhoneNumber);

    function getPhoneNumber(e) {
        var charactersNumbers = 10;
        var getCharacters = $(this).val().length;
        var key = e.keyCode;

    
        if (!getAsciiChars(key)) {
            e.preventDefault();
            return;
        }

        if (getCharacters === charactersNumbers) {
            $('#btn-next').removeClass('disabled');
        } else {
            $('#btn-next').addClass('disabled');
        }

    }

    function getAsciiChars(key) {
        return (
            key == 8  ||           
            key == 9 ||
            key == 13 ||
            // key == 46 ||
            // key == 110 ||
            // key == 190 ||
            // (key >= 33 && key <= 47) ||
            (key >= 48 && key <= 57));
        // (key >= 96 && key <= 105));
    }
});