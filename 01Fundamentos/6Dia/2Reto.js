// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();

// Solicitamos Informacion
let nombre = prompt("Digita Tus Nombres: "); 

// Metodo Para Saludar
let saludo = (nombre) => {

    console.log(`Hola, ${nombre}`); 


}

// Llamamos EL Metodo
saludo();










