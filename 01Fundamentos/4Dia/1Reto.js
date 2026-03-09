// Importamos Esta Libreria Que Nos Permite Utilizar Y Ver En Accion El Metodo Prompt
const prompt = require("prompt-sync")();

// Solicitamos Informacion Al Usuario
let mes = prompt("Digita El Numero De Cualquier Mes De Año: ");


// Mediante La Estructura Condicional De Switch Elegimos Una Opcion -> Mes
switch (parseInt(mes)) {

    case 1: 
    console.log("January");  // Enero
    break; 

    case 2: 
    console.log("Febraury"); // Febrero
    break; 
    
    case 3: 
    console.log("March"); // Marzo
    break; 
    
    case 4: 
    console.log("April"); // Abril
    break; 
    
    case 5: 
    console.log("May"); // Mauo
    break; 
    
    case 6: 
    console.log("June"); // Junio
    break; 

    case 7: 
    console.log("July"); // Julio
    break; 

    case 8: 
    console.log("August"); // Agosto
    break;  

    case 9: 
    console.log("September"); // Septiembre
    break; 

    case 10: 
    console.log("October"); // Octubre
    break; 

    case 11: 
    console.log("November"); // Noviembre
    break; 
    
    case 12: 
    console.log("December"); // Diciembre
    break; 

    default: 
    console.log("Opcion Invalida"); 

}
