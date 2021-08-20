//Reverse a string
function reverseString(str) {
  let newStr = ""
  for(let i = str.length-1; i >= 0; i--){
    newStr += str[i];
  }
  str = newStr;
  return str;
}

//Factorialize a number
function factorialize(num) {
  if(num == 0){
    return 1;
  }
  for(let i = num-1; i > 0; i--){ //Arranca de num-1 y va multiplicando 'para atras' 5(num)*4*3*2*1
    num *= i;
  }
  return num;
}

//Find longest word in String
function findLongestWordLength(str) {
    let regex = /\w+/g;
    let palabras = str.match(regex);
    let longest = "";
    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].length > longest.length){
            longest = palabras[i];
        }
    }
    return longest.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return an array with largest numbers
function largestOfFour(arr) {
  let largest = [];
  for(let i = 0; i < arr.length; i++){
    let actualArray = arr[i];
    let large = actualArray[0];
    for(let j = 1; j < actualArray.length; j++){
      if(actualArray[j] > large){
        large = actualArray[j];
      }
    }
    largest.push(large);
  }

  return largest;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the ending of a string
function confirmEnding(str, target) {
    let start = str.length - target.length;
    let end = str.length;
    let fin = str.slice(start,end);
    if(fin == target){
        return true;
    }
    return false;
    //Aparentemente podemos usar los metodos de los arrays en los strings tambien
}
confirmEnding("Bastian", "sti");

//Return first element that passes truth test (function)
function findElement(arr, func) {
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

//Check type of element
function booWho(bool) {
  if(typeof bool == 'boolean'){
    return true;
  }
  return false;
}
booWho(null);

//Capitalize every word
function titleCase(str) {
    let palabras = str.split(" ");
    let nuevoStr = "";
    for(let i = 0; i < palabras.length; i++){
        let palabraActual = palabras[i][0].toUpperCase() + palabras[i].slice(1,palabras[i].length).toLowerCase();
        if(i == palabras.length - 1){
            nuevoStr += palabraActual;
        }else{
            nuevoStr += palabraActual + " ";
        }
    }
    return nuevoStr;
}
titleCase("I'm a liTTle tEa pOt");

//Crear un Franken Array metiendo arr1 en el index n de arr2
function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let i;
  for(i = 0; i < n; i++){
    newArr.push(arr2[i]);
  }
  newArr.push(...arr1);
  while(i < arr2.length){
    newArr.push(arr2[i]);
    i++
  }
  return newArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Remove falsy values from array
function bouncer(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){ 
            //ESTA CONDICION TESTEA PARA TODOS LOS VALORES FALSY (undefined, null, 0, false, NaN)
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
bouncer([false, null,"hi", 0, 7, NaN, undefined, ""]);

//Bubble sort
function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                let aux = arr[i];
                arr[i] = arr[j]
                arr[j] = aux;
            }
        }
    }
}

//Chequear si todas las letras del 2do string estan presentes en el 1ro
function mutation(arr) {
  //armar un array con las letras del 2do string sin repeticiones
  //Chequear si estan todas presentes en el primer string
  let lowercase = arr[1].toLowerCase();
  let letters = [];
  for(let i = 0; i < lowercase.length; i++){
    if(letters.indexOf(lowercase[i]) == -1){
      letters.push(lowercase[i]);
    }
  }
  //console.log(letters);


  let firstWord = arr[0].toLowerCase();
  let containArr = [];
  for(let i = 0; i < letters.length; i++){
    containArr.push(false);
  }

  for(let i = 0; i < firstWord.length; i++){
    for(let j = 0; j < letters.length; j++){
      //console.log(`comparing ${firstWord[i]} to ${letters[j]}`)
      if(firstWord[i] == letters[j]){
        containArr[j] = true;
        break;
      }
    }
    //console.log(containArr);
    //console.log(`contains ${firstWord[i]} ` + contains);
  }

  for(let i = 0; i < containArr.length; i++){
    if(!containArr[i]){
      return false
    }
  }
  return true;
}

console.log(
mutation(["wasabigaa", "aabgwwa"]));

