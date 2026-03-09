// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();

// Solicitamos Informacion Al Usuario O Cliente
let opcion = prompt("Ingresa La Opcion De La Opercion Aritmetica Que Deseas: ");


// Solicitud De Los Numeros Para Realizar Las Operaciones
let numero1 = parseInt(prompt("Digita El Primero Numero: "));
let numero2 = parseInt(prompt("Digita El Segundo Numero: "));


// Mediante La Estructura Condicional Switch Se Ejecuta Dependiendo De La Opcion Elegida Por El Usuario
switch (parseInt(opcion)) {

    case 1: // Suma 
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`); 
    break; 

    case 2: // Resta
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break; 
    
    case 3: // Multiplicacion
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break; 

    case 4: // Division
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    break;
    
    case 5: // Modulo
    console.log(`${numero1} % ${numero2} = ${numero1 % numero2}`); 
    break; 

    default: 
    console.log("Opcion Invalida"); 

}



