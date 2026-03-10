// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();

// Solicitamos Informacion
let numero1 = parseInt(prompt("Digita El Numero1: ")); 
let numero2 = parseInt(prompt("Digita El Numero2: ")); 


function sumar(numero1 , numero2) {

    return numero1 * numero2; 

}


console.log(`Resultado = ${sumar(numero1, numero2)}`); 


