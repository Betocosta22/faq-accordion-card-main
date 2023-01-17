$(document).ready(function () {

    /* Você só vai escrever código aqui */
    $('ul').hide();

    $('h2').on("click", function () {
        $('ul').slideUp();
        $(this).next('ul').slideDown();
    });
    /* Fim do seu código */
});