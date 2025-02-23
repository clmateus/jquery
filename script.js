$(document).ready(function(){
    $("header button").click(function(){
        alert('click')
    }) 

    $('form').on('submit', function(e){
        e.preventDefault();
    })
})

