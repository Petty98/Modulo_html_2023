



console.log("Script cargado")

let edad = 18;

if (edad < 2){

// Código A

} else if (edad < 12) {

    // Sólo vamos a hacer esta pregunta si la primera NO SE HA CUMPLIDO

    // CODIGO B

} else if (edad < 18) {

    // Código C

} else {

    // Mayor o igual que 18

}






$("#btn_hide").click(function () {
    
    // .css -> Permite cambiar cualquier propiedad en CSS EN LÍNEA

    $("#contenedor_uno").css({
        // "clave", "valor"
        color: "white",
        "background-color": "lightblue"

    })

    // JQuery tiene algunas funciones creadas "por defecto"
    $("#contenedor_uno").hide(600);
    
    console.log("Click en botón ocultar")
});

$("#btn_show").click(function(){
    $("#contenedor_uno").show(1200);
})