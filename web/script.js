var BASE_API_ROUTE = "https://api3aransia.herokuapp.com/"
var TRANSLATION_API_ROUTE = BASE_API_ROUTE + "translate_moroccan_arabic/"
var CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"

$(document).ready(function(){
    translate_text()
});

$(document).ready(function(){
    $('#translate').click(function() {
        translate_text()
    });
});

function translate_text() {
    $("#translation").text("")
    var sourceText = $("#source-text").val()
    var parsedSourceText = sourceText.replace(new RegExp(" ", 'g'), '+');
    $.getJSON(CORS_ANYWHERE + TRANSLATION_API_ROUTE + parsedSourceText, function (result) {
        $.each(result, function (i, field) {
            $("#translation").append(field.arabian_word + " ");
        });
    });
} 