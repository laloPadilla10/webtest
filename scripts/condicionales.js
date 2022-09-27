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

console.log(`La edad es ${edad>24 ? "mayor" : "menor"} a 25`);
console.log(`La edad es ${edad===25 ? "igual" : (edad>24 ? "mayor" : "menor") } a 25`);

//*******************Condicional if, else if , else */
/**
 *      if(true){
 *      instrucciones; 
 *      }
 *      else if(otra condicion){
 *      }
 *      else if(otra condicion){
 *      }
 *      else{
 *      instrucciones;
 *      }
 */
edad=25;
console.log("ELSE IF")
if (edad===25){
    console.log("Es igual a 25");
}else if(edad>25){
    console.log("Es mayor a 25");
}else{
    console.log("Es menor a 25")
}

//+++++++++++++++++SWITCH++++++++++++
/**
 * Sintaxis:
 *        switch(expresion){
 *            case valor1:
 *                  instrucciones;
 *                  break;
 *            case valor2:
 *                  instrucciones;
 *                  break;
 *            case valor3:
 *                  instrucciones;
 *                  break;
 *           defaul:
 *                  instrucciones;
 *       }
 */

edad=25;
comparacion="";
switch (edad) {
    case 24:
        comparacion="es igual";
        break;
    case 25:
        comparacion = "es menor";
        break;    

    default:
        comparacion="No se sabe"
        break;
}

let numeroMes = 3;
let estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
    break;
  case 1:
    mes = "Enero";
    break;
  case 2:
    mes = "Febrero";
    break;
  case 3:
    mes = "Marzo";
    break;
  case 4:
    mes = "Abril";
    break;
  case 5:
    mes = "Mayo";
    break;
  case 6:
    mes = "Junio";
    break;
  case 7:
    mes = "Julio";
    break;
  case 8:
    mes = "Agosto";
    break;
  case 9:
    mes = "Septiembre";
    break;
  case 10:
    mes = "Octubre";
    break;
  case 11:
    mes = "Noviembre";
    break;
}
if(numeroMes>=1 || numeroMes<=3){
    estacion="Invierno";
}else if(numeroMes>=4 || numeroMes<=6){
    estacion="Primavera";
}else if(numeroMes>=7 || numeroMes<=9){
    estacion="Otoño";
}else if(numeroMes>=10 || numeroMes<=12){
    estacion="Invierno";
}
console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

//+++++++++++++++Logica AND &&+++++++++++++++++++++++++++++++++++
/* numeroMes = 12;
estacion = "", mes = "";

if(numeroMes>=1 || numeroMes<=3){
    estacion="Invierno";
}else if(numeroMes>=4 || numeroMes<=6){
    estacion="Primavera";
}else if(numeroMes>=7 || numeroMes<=9){
    estacion="Otoño";
}else if(numeroMes>=10 || numeroMes<=12){
    estacion="Invierno";
}
console.log("El mes de " + numeroMes + " se encuentra en la estación " + estacion); */


