$(document).ready(function(){
    $("header button").click(function(){
        $('form').slideDown();
    }) 

    $("#botao-cancelar").click(function(){
        $("form").slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoSDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $("<li></li>");
        $(`<img src=`)
    })
})

