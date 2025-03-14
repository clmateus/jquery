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
        $(`<img src='${enderecoSDaNovaImagem}' />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link"><a href="${enderecoSDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
    })
})

