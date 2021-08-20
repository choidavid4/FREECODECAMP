//Basic data structures
//splice() te permite sacar varios elementos consecutivos de un array y aparte de modificarlo tambien te devuelve el array removido

let miArr = ['David', 'Dante', 'Naruto', 'Choi'];
let miArrModificado = miArr.splice(1,2);

//El '3er' argumento de splice() son los valores a remplazar
let miArr2 = ['uno', 'dos', 'tres', 'cuatro'];
miArr2.splice(1,2,'troleo','trofeo','what');

//Usamos slice(inicio,fin+1) para copiar elementos de un array
//WE CAN USE THIS METHOD WITH STRINGS TOO

miArr = ['David', 'Dante', 'Naruto', 'Choi'];
let copiaMiArr = miArr.slice(1,3); //[ 'Dante', 'Naruto' ]

//Tambien se puede copiar completo usando el spread(...) operator

copiaMiArr = [];
copiaMiArr = [...miArr];

//Podemos usar el spread operator para agregar arrays completos en medio de otros arrays

miArr2 = ['Tomate', 'Lechuga', 'Zanahoria'];
miArr = ['Agua', ...miArr2, 'Jugo', 'Gaseosa'];

//indexOf() devuelve -1 si el elemento no existe en el array
function quickCheck(arr, elem) {
  switch(arr.indexOf(elem)){
    case -1:
      return false;
    default:
      return true;
  }
}
let indexLechuga = miArr.indexOf('Lechuga');
let existe = quickCheck(miArr, 'Hello');

//Nested arrays complicados
let nestedArray = [
    ['deep'],
    [['deeper'], ['deeper']],
    [[ ['deepest'], ['deepest']],[[['deepest-est?']]]]
];
let deepestest = nestedArray[2][1][0][0][0];

//How to check if a property exists in an object
let person = {
    nombre: "David",
    edad: 5
}

let tieneNombre = 'nombre' in person;
tieneNombre = person.hasOwnProperty('nombre');
//Ambos retornan true

//Recorrer un objeto con for... in
let users = {
    David: {
        nombre:"David",
        age: 69
    },
    Sarah: {
        nombre:"Sarah",
        age: 20
    },
    Monica: {
        nombre:"Monica",
        age: 35
    },
    Thomas: {
        nombre:"Thomas",
        age: 300
    }
}

for(let user in users){
    //No logro acceder a las propiedades de cada usuario por alguna razon. HIPOTESIS: user es una copia del nombre de la propiedad solamente.
    let userAge = users[user].age;
    //Se usa mas como un arr[i] no como puntero.
    //for(let i in object)
}

//Object.keys(obj) para obtener un array con todas las keys
let keys = Object.keys(users);





