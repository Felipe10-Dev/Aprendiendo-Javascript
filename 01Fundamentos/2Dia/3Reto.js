// Programa Que Valida Si La Nota Del Estudiante Es Aprobatoria


// Definimos Las Variables
let nota = 5; 

// Definimos Las Constantes
const NOTA_APROBATORIA = 3; 



// Validamos Si El Estudiante Aprueba O No Aprueba
if (nota >= NOTA_APROBATORIA) {

    console.log("Aprobaste"); 

} else if (nota >= 0 && nota < NOTA_APROBATORIA) {

    console.log("Reprobaste"); 

} else {

    console.log("Nota Invalida"); 

}
