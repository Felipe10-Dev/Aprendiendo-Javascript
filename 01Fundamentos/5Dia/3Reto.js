// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();


// Variable Que Almacena El Numero Proporcionado Por El Usuario 
let numero = parseInt(prompt("Digita El Numero Del Cual Deseas Saber Su Tabla: "));


// Mediante El Ciclo For El Usuario Puede Imprimir La Tabla Del Numero Que Quiera
for (let i = 1; i <= 10; i++) {

    console.log(`${numero} * ${i} = ${numero * i}`); 

}


