console.log("Sesión JS03 Funciones");

//Funcion declarada+++++++++++++++++++++++++++++++
/**
 * Este es un ejemplo de una función declarada 
 * (Function Declaration, function Statement)
 * Una característica es que tiene un hoisting (elevación)
 * Realiza la multiplicación de dos numeros
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicador
 * @returns resultado de la multiplicación de a*b
 */
function multiplica(a,b){
    return a*b;
}

//llamado de la funcion declarada
console.log("Multiplica 5*6= "+multiplica(5,6))


//Funcion expresada+++++++++++++++++++++++++++++++
/**
 * Las funciones expresadaas (function expressions)
 * son declaradasdentro de la asignación de una variable
 * 
 * Estasfunciones pueden ser anonimas(no tener nombre)
 * LAs funciones expresadas no tienen hoisting
 */

/**
 * Sumatoria de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */
const suma = function(a,b){return a+b}

console.log("EL resultado de 56 + 4= "+suma(56,4));

//Funciones autoinvocadas+++++++++++++++++++++++++++++++
/**
 * Las funciones autoinvocadas (self-invoking functions)
 * pueden ser anonimas y se autoejecutan() en su declaración (function)()
 */

(function (){
    console.log("=============");
    console.log("Hola");
    console.log("=============");
})();

//Funciones flecha+++++++++++++++++++++++++++++++
/**
 * Las funciones flecha  (arrow functions) fucionan similar a las declaradas 
 * pero no requieren la palabra "function"
 * y si tienen una sola instrucción y es el retorno,
 * no requiere la isntrucción return
 */
/**
 * Realiza la operación de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a,b) => a-b;

console.log("La resta de 10-5= "+resta(10,5));

//Parametros default+++++++++++++++++++++++++++++++

/**
 * Funcion con parametros inicializados 
 */
function divide(a,b){
    return a/b
}

console.log("La division de a/b="+ divide(10,2));

//+++++++++++++Funciones recursivas++++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return(num*factorial(num-1))
}

console.log("Factorial de 5= "+factorial(5))

//+++++++++Rest Parameters++++++++++++++++++++++

//(parameters) => return;
//(parameters) => {
//    return data
//};

function sum(a,b, ...resto){
    let suma = a+b;
    resto.forEach(element => {
        suma += element;
    });
    return suma;
}

console.log("El resultado de sumar varios números es: "+sum(2,3,5,7,3));