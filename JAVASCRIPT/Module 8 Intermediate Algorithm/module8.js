//Sum all numbers in a range
function sumAll(arr) {
  arr.sort((a,b) => a-b);
  //usar recursividad o un for para ir sumando los numeros
  //Siempre tengo el primero y el ultimo arr[0] inicio arr[1] fin
  let valorActual = arr[0];
  let acum = 0
  for(let i = 0; i <= arr[1]-arr[0]; i++){
    acum += valorActual;
    valorActual++;
  }
  return acum;
}

//Diferencia simetrica entre dos arrays (mejorar)
function diffArray(arr1, arr2) {
  if(arr1.length == 0) return arr2;
  if(arr2.length == 0) return arr1;
  var newArr = [];
  //recorrer el primer array - por cada elemento, compararlo con todo el otro array - si existe en el otro array, salir del loop. Si no existe, agregarlo al nuevo array
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if (j == arr2.length - 1 && arr1[i] != arr2[j]) 
        newArr.push(arr1[i]);
      if (arr1[i] == arr2[j])
        break;
    }
  }
  //Ahora lo mismo pero al reves
  for(let i = 0; i < arr2.length; i++){
    for(let j = 0; j < arr1.length; j++){
      if (j == arr1.length - 1 && arr2[i] != arr1[j]) 
        newArr.push(arr2[i]);
      if (arr2[i] == arr1[j])
        break;
    }
  }
  return newArr;
}
//console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//Diferencia simetrica - version mejorada
function diffArray(arr1, arr2) {
  var newArr = [];
  //Usar filter() en vez de un for para recorrer los arrays
  //la funcion filter devuelve los elementos que dan true a la condicion
  //pregunto por todos los elementos de arr1 que no se encuentren en arr2 y luego viceversa usando filter() 2 veces
  newArr = arr1.filter(element => arr2.indexOf(element) == -1).concat(arr2.filter(element => arr1.indexOf(element)==-1));
  //newArr = newArr.concat(arr2.filter(element => arr1.indexOf(element)==-1)); //concat devuelve el array, no modifica el original
  return newArr;
}
//console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//Sacar una cantidad de elementos indefinidos de un array
function destroyer(arr, ...theRest) {
  let newArr = arr.filter(element => (theRest.indexOf(element) == -1)); //Si el elemento actual NO existe en theRest, se agrega a newArr
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//Busqueda de propiedades. Algoritmo sloppy que me trajo pesadillas
function whatIsInAName(collection, source) {
  //Recorrer collection y comparar con source
  //Por cada item en collection, hay que ver si posee todas las propiedades-valor en source.
  //Pseudo-codigo

  //crear un checks[] con la cantidad de propiedades en source cada uno de los objetos en collection va a usar un checks[]
  //inizializarlo usando (let property in source) indice i
  //Usar un filter sobre collection y guardar en newArr(abrir funcion) resetear i
  //Recorrer source y buscar igualdad de propiedad - valor (abrir loop)
  //si propiedad-valor matchea, guardar verdadero en el check correspondiente
  //else retornar falso (pq quiere decir que tiene la propiedad pero el valor no matchea)
  //(cerrar loop) evaluar check. resetear check. Si es todo true devolver true. else devolver false.  (cerrar funcion)

  let checks = [];
  let i = 0;
  
  for(let property in source){
    checks[i] = false;
    i++;
  }
  let cantDeProp = i;
  
  let newArr = collection.filter(object => {
    i = 0;
    for(let property in source){
      if(object.hasOwnProperty(property)){
        if(object[property] == source[property]){
          checks[i] = true;
          //Si me dan los valores en source en diferente orden, este algoritmo no funciona
          i++;
        }
        else
          return false;
      }
    }
    if (checks.every(element => (element == true))){
      for(let i = 0; i < cantDeProp; i++){
        checks[i] = false;
      }
      return true;
    }else
      return false;
  });
  return newArr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

//Convertir cualquier string en spinal case
function spinalCase(str) {
  let myRegex = /([A-Z])/g; //Mayusculas
  let newStr = str.replace(myRegex, " $1"); //Cada vez que encuentra una mayuscula le agrega un espacio adelante
  newStr = newStr.trim().toLowerCase().split(/[\W|_]+/).join('-');
  return newStr;
}

spinalCase("The_Andy_Griffith_Show");

//Mover el primer grupo de consonantes y agregar 'ay' O agregar 'way'
function translatePigLatin(str) {
  //miro el primer char y pregunto si es vocal o consonante usando regex
  //Hay que agarrar el consonant cluster, no solo la primera consonante
  let newStr = str;
  let consonantCluster = str.match(/[^aeiou]+/).toString(); //Sin el toString() no funciona, str.match() devuelve un objeto
  if(/[aeiou]/.test(str[0])){
    newStr = newStr.concat("way");
  }else{
    newStr = newStr.slice(consonantCluster.length).concat(consonantCluster + "ay");
  }
  console.log(newStr);
  return newStr;
}

translatePigLatin("psicologia");