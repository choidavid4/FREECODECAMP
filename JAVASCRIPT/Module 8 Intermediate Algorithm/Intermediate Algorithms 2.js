//Search and replace
function myReplace(str, before, after) {
    //reemplazar palabra
    //Preservar el case de la palabra original

    //Separar el string usando split()
    //Mirar la palabra que contenga el 2do arg
    //Guardar en un boolean si es Uppercase o no
    //Convertir el 3er argumento al mismo case
    //Reemplazar en el respectivo lugar
    //Devolver el string unido.
    let newStr = str.split(" ");
    let myWord = newStr.filter(element => element == before).toString();
    if (myWord != "") {
        let isUpper = /[A-Z]/.test(myWord[0]);
        let after2;
        if (isUpper) {
            after2 = after[0].toUpperCase() + after.slice(1);
        } else {
            after2 = after[0].toLowerCase() + after.slice(1);
        }
        newStr = newStr.join(" ");
        newStr = newStr.replace(myWord, after2);
        return newStr;
    } else {
        console.log('word not found');
    }
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");

//Pair element
function pairElement(str) {
    //Devolver un array con pares de caracteres

    //Agarrar elemento por elemento (abrir loop)
    //Armar un array y agregar el elemento
    //Pasar elemento por un switch de 4 opciones ATCG
    //Agregar al array y luego el par a uno mas grande (cerrar loop)
    //Devolver big array
    let bigArray = [];
    for (let i = 0; i < str.length; i++) {
        let dualArray = [];
        dualArray.push(str[i]);
        switch (str[i]) {
            case "A":
                dualArray.push("T");
                break;
            case "T":
                dualArray.push("A");
                break;
            case "C":
                dualArray.push("G");
                break;
            case "G":
                dualArray.push("C");
                break;
        }
        bigArray.push(dualArray);
    }
    return (bigArray);
}
pairElement("CTCTA");

//Missing letter
function fearNotLetter(str) {
    //Hallar la letra que falte en el rango y devolverla.
    //Si todas estan presentes devolver undefined

    //recorrer el string letra por letra hasta el anteultimo elemento (abrir loop)
    //preguntar si siguiente = actual + 1
    //Si es falso devolver actual + 1
    //(cerrar loop) devolver undefined
    for (let i = 0; i < str.length - 1; i++) {
        if (!(str.charCodeAt(i + 1) == str.charCodeAt(i) + 1)) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}
fearNotLetter("abcdefghijklmnpqrstuvwxyz");

//Juntar elementos unicos de varios arrays
function uniteUnique(...args) {
    //devolver un unico array con elementos unicos
    //usar el arguments object

    //crear arrayGrande, es el que vamos a devolver
    //recorrer args usando for (abre loop)
    //Recorrer el array usando otro for (abre 2do loop)
    //La condicion es que el elemento no exista en array grande
    //devolver arrayGrande
    let arrayGrande = [];
    for (let i = 0; i < args.length; i++) {
        let miniArray = args[i];
        for (let j = 0; j < miniArray.length; j++) {
            if (arrayGrande.indexOf(miniArray[j]) == -1)
                arrayGrande.push(miniArray[j]);
        }
    }
    return arrayGrande;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Convertir entidades HTML
function convertHTML(str) {
    //Convertir & < > " ' en sus entidades html
    //& = &amp;
    //< = &lt;
    //> = &gt;
    //" = &quot;
    //' = &apos;

    //Recorrer el string (abrir loop)
    //Colocar un switch para los caracteres especiales y reemplazarlos usando String.replace()
    let newStr = str;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '&':
                newStr = newStr.replace('&', '&amp;');
                break;
            case '<':
                newStr = newStr.replace('<', '&lt;');
                break;
            case '>':
                newStr = newStr.replace('>', '&gt;');
                break;
            case '"':
                newStr = newStr.replace('"', '&quot;');
                break;
            case "'":
                newStr = newStr.replace("'", '&apos;');
                break;
        }
    }
    return newStr;
}
convertHTML("a ' b");
//Sumar todos los numeros impares anteriores en la secuencia fibonacci
function sumFibs(num) {
  //1 1 2 3 5 8
  //Retornar la suma de todos los numeros impares anteriores a num de la secuencia fibonacci
  
  //Armar la secuencia fibonacci hasta superar el numero
  //Ir sumando los impares
  
  if (num < 2) return 1;
  let anterior = 1;
  let actual = 1;
  let sumaActual;
  let suma = 1;
  while (actual <= num){
    sumaActual = actual + anterior;
    if (actual % 2 == 1) suma += actual;
    anterior = actual;
    actual = sumaActual;
  }
  return suma;
}

sumFibs(75024);

//Como chequear si un numero es primo
function esPrimo(n){
    if(n <= 2) return true;
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
let number = 15;
//console.log(number + " es primo? " + esPrimo(number));

//SUMA DE NUMEROS PRIMOS MENORES O IGUALES A N
function sumPrimes(num) {
  //Retornar la suma de todos los numeros primos menores o iguales a num

  //Si num vale menos que dos retornar num
  //ir de 3 a num para ir sumando aquellos que sean primos (abrir loop)
  //preguntar si el actual es primo
  //Si es primo, sumar (cerrar loop)
  //retornar la suma
  if(num < 2) console.log("Ingrese un numero mayor o igual a 2");
  let suma = 0;
  for(let i = 2; i <= num; i++){
    if(esPrimo(i)){
      suma += i;
    }
  }
  return suma;
}
sumPrimes(10);

//HALLAR EL MINIMO COMUN MULTTIPLO DENTRO DE UN RANGO
function smallestCommons(arr) {
  //Retornar un numero que sea divisible por todos los numeros en el rango proporcionado. Minimo comun multiplo
  
  //Ordenamos arr
  //Inicializar result = 1
  //recorremos con i de arr[0] hasta arr[1] (abrir loop)
  //Aplicar mcm(i,resultado anterior) 
  //(cerrar loop) retornar resultado
  if(arr[0] == arr[1]) return arr[0];
  let newArr = arr.sort((a,b) => a-b);
  let result = arr[0];
  for (let i = arr[0]; i <= arr[1]; i++){
    result = mcm(i,result);
  }
  return result;
}

function mcm(a,b){
  if(b > a){
    let aux = a;
    a = b;
    b = aux;
  }
  let notFound = true;
  let multiplo = a;
  while(notFound){
    if(multiplo % b == 0){
      return multiplo;
    }
    multiplo += a;
  }
}
smallestCommons([2,5]);

//DROP ELEMENTS
function dropElements(arr, func) {
  //devolver el resto del array una vez que se cumpla la condicion de func

  //recorrer array(abrir loop)
  //testear con func
  //(cerrar loop) recordar el indice y hacer slice desde ese indice en adelante
  let indice;
  for(indice = 0; indice < arr.length; indice++){
    if(func(arr[indice])) break;
  }
  if(indice < arr.length){
    return arr.slice(indice);
  }
  return [];
}
dropElements([1, 2, 3], function(n) {return n < 3; });

//COMO APLANAR UN ARRAY USANDO RECURSIVIDAD
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i])); //spread operator
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

//TRADUCIR DE BINARIO A STRING
function binaryAgent(str) {
  let words = str.split(" ");
  let message = "";
  for(let i = 0; i < words.length; i++){
    message += String.fromCharCode(parseInt(words[i],2)); //Esta es la linea que hace todo el trabajo
  }
  return message;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//CHEQUEAR SI LA PROPIEDAD EXISTE Y ES TRUTHSY
function truthCheck(collection, pre) {
  //chequear si el 2do argumento es truthy en todos los elementos de la coleccion

  //recorrer el array (abrir loop)
  //preguntar si tiene la propiedad
  //preguntar si la propiedad es truthy
  //si no lo es retornar falso
  //(cerrar loop) retornar verdadero

  //como chequear si un objeto tiene una propiedad
  // myObject.hasOwnProperty("weight")
  for(let i = 0; i < collection.length; i++){
    if(collection[i].hasOwnProperty(pre)){
      if(!collection[i][pre]){
        return false;
      }
    }else return false; //Retorna falso si la propiedad no existe
  }
  return true;
}
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") //should return false.

//ESCRIBIR UNA FUNCION QUE RECIBE DOS ARGUMENTOS Y LOS SUMA
//si recibe un solo argumento devolver una funcion para el siguiente argumento
//Si alguno de los dos argumentos no es un numero, devolver undefined
function addTogether(...args) {
  if(typeof args[0] != 'number'){
    return undefined;
  }
  if(args.length == 1){
    return function addTogether(b){
      if(typeof b == 'number'){
        return args[0] + b;
      }else{
        return undefined
      }
    }
  }else{
    if(typeof args[1] == 'number'){
        return args[0] + args[1];
      }else{
        return undefined
      }
  }
}
addTogether(2)(5);

//CREAR UNA PERSONA CON PROPIEDADES PRIVADAS Y SETTERS Y GETTERS
function Person(firstAndLast) {
  let name = "";
  let last = "";
  this.getFullName = function() {
    return name + " " + last;
  };

  this.getFirstName = function(){
    return name;
  }
  this.getLastName = function(){
    return last;
  }

  this.setFirstName = (first) => {
    name = first;
  }
  this.setLastName = (lastt) => {
    last = lastt;
  }
  this.setFullName = (firstAndLast) => {
    let words = firstAndLast.split(" ");
    name = words[0];
    last = words[1];
  }

  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
bob.setLastName("Curry")
bob.getLastName()

//DEVOLVER UN ARRAY QUE TOME LAS ALTITUDES DE LOS CUERPOS Y DEVULEVA EL PERIODO ORBITAL EN SEGUNDOS
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let result = arr.map(element => {
    let obj = {name: element.name};
    obj.orbitalPeriod = Math.round(
        2 * Math.PI * 
        Math.sqrt(
            Math.pow(earthRadius + element.avgAlt , 3) 
            / GM
            ) //Aqui sudece toda la magia
      );
    return obj;
  });
  return result;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

