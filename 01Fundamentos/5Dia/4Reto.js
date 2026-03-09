// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();


// Solicitamos Un Numero Entero
let numero = parseInt(prompt("Digita Un Numero Entero: ")); 



// Utilizamos El Ciclo Repetitivo While -> Mientras La Condicion Se Cumpla Se Siga Ejecutando
while (numero <= 100) {

    // Imprimimos
    console.log(numero);

    // Incrementamos En Uno
    numero++;

}

