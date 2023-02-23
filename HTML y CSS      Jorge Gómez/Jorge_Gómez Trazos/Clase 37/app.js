


// Estado que controla si muevo o no el círculo
let mueveCirculo = false;

$(".circulo").click(function(evento){

   
        
        console.log("Click en el círculo");
        
  
});
    

// Ejemplo 1

// $("body").mousemove(function(evento){


//     // EVENTO -> Vamos a tener más información sobre el evento que se acaba de producir
//     //  evento.pageX -> Los píxeles en X donde esté el ratón
//     //  evento.pageY -> Los píxeles en Y donde está el ratón

//     console.log("Muevo el ratón dentro del body");
//     console.log("X:", evento.pageX);
//     console.log("Y:", evento.pageY);

//     $(".circulo").css({
//         top: evento.pageY - 50 + "px",
//         left: evento.pageX - 50 + "px",
//     })

// });



// Ejemplo 2


$("body").mousemove(function(evento){

    if(mueveCirculo === true){
        // EVENTO -> Vamos a tener más información sobre el evento que se acaba de producir
        //  evento.pageX -> Los píxeles en X donde esté el ratón
        //  evento.pageY -> Los píxeles en Y donde está el ratón

        console.log("Muevo el ratón dentro del body");
        console.log("X:", evento.pageX);
        console.log("Y:", evento.pageY);

        $(".circulo").css({
            top: evento.pageY - 50 + "px",
            left: evento.pageX - 50 + "px",
        })
    }

});



$(".circulo").click(function(){

    mueveCirculo = true;

})