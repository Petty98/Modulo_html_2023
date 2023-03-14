

// const el = document.getElementById("poster")
// const height =el.clientHeight
// const width = el.clientWidth

// el.addEventListener("mousemove", (evt) => {
//     const {layerX, layerY} = evt;

//     const yRotation = (
//         (layerX - width / 2) / width
//     ) * 20;

//     const xRotation = (
//         (layerX - height / 2) / height
//     ) * 20;

//     const string =
//         perspective(500)
//         scale(1.1)
//         rotateX($,{xRotation},deg)
//         rotateY($,{yRotation},deg)

//     el.style.transform = string


// })

// el.addEventListener("mouseout", () => {

// })


// console.log('*****INICIO*****')


// // $(window).load(function(){

// //   $('.loader-container').addClass('hide')
// //   console.log('LOAD')


// // })

// window.addEventListener('load', function() {

//   // setTimeout(function(){

//     $('.loader-container').addClass('hide')
//   // },3000)

//     // const loader = document.querySelector('.loader-container');
//     // loader.classList.add('hide');
//     console.log('LOAD')
// });







// Creando un evento de click



// Index1

$("#btnOpen").click(function () {

    // Crear un evento

    console.log( 'Click en el botón' )

    // Quitar la clase activo a #btnOpen
    $('#btnOpen').removeClass( 'activo' )


    $('#btnClose').addClass( 'activo' )

    $('.CajaTransparente').removeClass( 'blocked' )
    console.log($('.CajaTransparente'))

});



$("#btnClose").click(function () {

    // Crear un evento

    console.log( 'Click en el botón' )

    $('#btnClose').removeClass( 'activo' )
    $('#btnOpen').addClass( 'activo' )


    $('.CajaTransparente').addClass( 'blocked' )

});



$(".CajaTransparente").click(function () {

    // Crear un evento

    console.log( 'Click en Caja transaprente' )

    $('.CajaTransparente').addClass( 'blocked' )

    $('#btnClose').removeClass( 'activo' )
    $('#btnOpen').addClass( 'activo' )
   

});






// Index 2

$(".box").click(function () {

    // Crear un evento

    console.log( 'Click en el botón' )


    $('.pop_up_fondo').addClass( 'activo' )


    // Buscar la imagen del contenedor que ha sido clicado
    // this -> hace referencia al elemento que ha sido clicado
    console.log(this)
    // Coger el src de la imagen
    let src_clicado = $( this ).find( 'img' ).attr( 'src' );
    console.log(src_clicado)

    // atributo data texto

    let texto = $(this).data( 'texto' )
    let titulo = $(this).data( 'titulo' )

    console.log( texto )

    $('.pop_up_fondo .p1').text( titulo ) 
    $('.pop_up_fondo .p2').text( texto ) 

    // Seleccionar y abri el pop up 

    $('.pop_up_fondo').removeClass( 'seva' )

    // Cambiar el src de la imagen

    $("#imagenPopUp").attr('src' , src_clicado )









});


$(".cerrar_popUp").click(function () {

    // Crear un evento

    console.log( 'Click en el botón' )


    $('.pop_up_fondo').addClass( 'seva' )
});