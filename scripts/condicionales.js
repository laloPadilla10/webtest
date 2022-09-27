console.log("Sesion JS03 Condicionales");


//++++++++++++Declaración de bloque++++++++++
let nombre = "Rafa";
let ciudad =  "GDL";
{
    const listado = ["Olivia","Benja","Luis","Linda"];
    let nombre = "Fer";
    let ciudad = "CDMX";
    let appelido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${appelido}, vive en ${ciudad}`);
}

console.log(`Participante: ${nombre}, que vive en: ${ciudad}`);

//++++++++++++++++Condicional IF+++++++++++++++++++

/**
 * Sintaxis :
 *      if(true) instrucción;
 * 
 *      if(true){
 *      instrucciones; 
 *      }
 */

let edad = 25;
console.log("***Declaración antes del if--->");

if(edad >24)console.log("La edad es mayor a 25");//se pone un numero menor porque >= son 2 instrucciones
else {
    console.log("No es mayor a 25");
}
console.log("<----Declaración después del if***");

//++++++++++++++++Operador Ternaria+++++++++++++++++++
// sintaxis   condicion ? condicion_verdadera : condicion_falsa;

console.log(`La edad es ${edad>24 ? "mayor" : "menor"} a 25`)
console.log(`La edad es ${edad===25 ? "igual" : (edad>24 ? "mayor" : "menor") } a 25`)