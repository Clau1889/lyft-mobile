$(document).ready(function () {

    $('select').formSelect();
 
    $('#phone-number').keydown(handlePhoneKeys);
 
    function handlePhoneKeys(e){
        var MIN_CHARS = 9;
        var inputChars = $(this).val().length;
        var key = e.keyCode;
 
        if(!isNumericChar(key)) {
            e.preventDefault();
            return;
        }
 
        if(inputChars === MIN_CHARS){
            $('#next-button').removeClass('disabled');
        } else {
            $('#next-button').addClass('disabled');
        }
    }
 
    function isNumericChar(key){
        return (
            // key == 8 ||
            // key == 9 ||
            // key == 13 ||
            // key == 46 ||
            // key == 110 ||
            // key == 190 ||
            // (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            // (key >= 96 && key <= 105));
    }
 });