


$("#btn1").click(function(){

    console.log("Click en el botón")
    $("h1").addClass("color-red")

});






/*  
    
    Cuando clico en el botón quiero añadir una animación

        Cuando --> Evento de click --> EVENTO
        Dónde --> En el botón --> El elemento que desencadena el evento
    
        Qué --> Añadir una animcación al cuadrado

*/

console.log("App.js CARGADO")

$("#btnStart").click(function(){

    console.log("Botón START clickado");
    // Añadir una animación al cuadrado

    // -->Añadir la clase rotar al cuadrado
    $(".cuadrado").addClass("rotar");

});


$("#btnStop").click(function(){
    console.log("Botón Stop Clickado")
    //  -->Quitar la clase rotar del cuadrado
    $(".cuadrado").removeClass("rotar")
})




/*

    Añadir la clase rotar cuando esté parado
    Quitar la clase rotar cuando esté en movimiento

*/

// Va a determinar cuándo el cuadrado está rotando
let cuadrado_rotando = false;

$("#btnStartStop").click(function () {

    console.log("Click en Empezar / Parar");
    console.log("Cuadrado rotando", cuadrado_rotando);


    if (cuadrado_rotando === false) {  /* Preguntando si el ciadrado_rotando es falso */

        /* SOLO si la condición es VERDADERA */
        $(".cuadrado").addClass("rotar");
        cuadrado_rotando = true; /* (ASIGNAR UN NUEVO VALOR A LA VARIABLE) Cambiar el estado de la variable */
        console.log("CLASE AÑADIDA")

    }else{

        /* SOLO si la condición es FALSA */
        $(".cuadrado").removeClass("rotar");
        console.log("CLASE QUITADA")
        cuadrado_rotando = false;

    }

});




