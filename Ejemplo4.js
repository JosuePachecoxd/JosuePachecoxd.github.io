//api document: acceder a los elementos del arbol DOM

const boton = document.getElementById("btn")
const contenedor =document.getElementById("contenedor");
console.log(boton)
var contador = 0;


boton.addEventListener('click', function (){
    contador++;
    contenedor.insertAdjacentHTML('beforeend' , template);
    console.log("Total de clicks " + contador)

});


boton.addEventListener('click', function (){
    contador++;
    contenedor.insertAdjacentHTML('beforeend' , template);
    template = `<div class='salida'>El total de clicks es ${contador} </div>`;

});