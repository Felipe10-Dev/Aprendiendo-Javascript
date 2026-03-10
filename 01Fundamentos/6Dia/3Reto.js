// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();


// Solicitamos Informacion
let edad = parseInt(prompt("Digita Tu Edad: ")); 

const old = (edad) => {

    console.log(`Tienes = ${edad} Años`); 

}


// Llamamos El Metodo
old(edad);