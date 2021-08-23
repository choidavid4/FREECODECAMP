//En JS las funciones pueden ser enviadas como parametros
const greet = () => console.log('hello world');

//Traditional function notation also works:
// function greet() {
//     console.log('hello world');
// }

function greetWithName(func,name){
    console.log(name + " says:");
    func();
}


//La funcion splice(cortar)(start, cantDeElem) puede tener solamente el indice inicial
let miArray = [1,2,3,4,5,6,7,8];
//console.log(miArray.splice(5,2));

//In functional programming we should avoid mutation since it causes side effects
//Functional progamming principles:
// 1. Do not change global variables values
// 2. Use arguments

//Return an object in a function

const myFunc = () => {
    return {name: 'David', age: 29}
}; 
const myFunc2 = () => ({ name: 'David', age: 29 }); //When it's only one line, it returns inmediately, so we use parenthesis

//myArray.map(callbackFunction(currentElement, indexOfElement, arrayThatCalledMap))
miArray = ['a','b','c',1,2,3];
let copiaMiarr = miArray.map(element => element); //We must use inline function here
//element => element is equal to element => {return element}

//Mi propio map()
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i],i,this)); //IMPORTANTE: Esta linea es la clave. El primer argumento de callback es el elemento actual, el 2do el index y el 3ro el array. Tener argumentos extra al parecer no rompe el programa
    }
    return newArray;
};
var new_s = s.myMap(item => item * 2);

//Array.prototype.filter(function) te devuelve un array con las funciones que dan positivo a la funcion pasada como parametro sin modificar el array original
//Los argumentos para la callback function son iguales que los de map(): (elemento,index,miArray)
//users.filter(user => {return user.age < 30})

let numeros = [1,2,3,4,5,6,7];
let numerosFiltrados = numeros.filter(i => i > 4); //Retorna el resultado del condicional either true or false

//To avoid mutating original array:
//Use concat() instead of push to add
//Use slice instead of splice to remove

//Array.prototype.reduce(callback(previousValue,elemento,index,miArray),initialValue) 

//funcion usando filter y reduce y el index para sacar un promedio
function getRating(watchList){
  let newArray = watchList.filter(i => i.Director == 'Christopher Nolan');
  let count;
  let average = newArray.reduce((sum,element,index) => {
    count = index + 1;
    return sum += parseFloat(element.imdbRating);
  }, 0);
  average = average/count;
  return average;
}

//Devolver un Array que contenga solamente los cuadrados de los enteros positivos
function squareList(arr){
  let newArr
  newArr = arr.filter(element => element > 0 && Number.isInteger(element));
  newArr = newArr.map(element => Math.pow(element,2));
  return newArr;
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);


//metodo sort(callback(a,b)) el callback devuelve un valor negativo, 0 o un valor positivo. Si el valor es negativo 'a' queda antes que 'b'
function miSortCrecienteLetras(arr){
    return arr.sort((a,b) => {
        return a === b ? 0 : (a < b) ? -1 : 1; //Los caracteres no se pueden restar pero si se pueden COMPARAR
    });
}
function miSortDecrecienteNumeros(arr){
    return arr.sort((a,b) => {
        return b-a;
    })
}
let letras = ['a','z','b','x','c','y'];
let numeros2 = [1,5,2,9,3,4,8,1];

//Recordar que sort() modifica el array original, lo cual es no bueno para functional programming

//let newArray = arr no soluciona mi problema, estoy copiando el pointer nomas
//use 'let newArray = [...arr]' instead





