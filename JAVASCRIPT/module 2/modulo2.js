function print(string){
    console.log(string);
}

/*

//  CONST
const APPLES = 69;
//APPLES no se puede reasignar porque es const
//APPLES = 70; //Tira error


//  MODIFICANDO UN ARRAY DECLARADO CON CONST   
const miArray1 = [1,2,3];
//miArray1 = [4,5,6]; //Tira error porque estamos apuntando la variable a otro array, la estamos reasignando
miArray1.pop();
miArray1.push("hi");

//  PROTEGIENDO OBJETOS FROM MUTATION
Object.freeze(miArray1);
//miArray1.unshift("Zero"); //Tira error


//  ARROW FUNCTIONS 
let myVar1 = () =>  {
    let aux = 55;
    return aux;
}

//Es igual que esto pero menos elegante... De anonimo no tiene una pija
// function myVar1(){
//     let aux = 55;
//     return aux;
// }

//print(myVar1()); //imprime 55

let myFunc1 = () => "Hola" //Retorna el string "Hola"
//print(myFunc1()); //imprime Hola

//El valor por defecto seria "Guest" en caso de no recibir ese parametro
let greet = ($name = "Guest") => console.log(`Hello ${$name}!`);
//greet("David");
//greet();

//...args 'rest parameter' Almacena mis argumentos en un array dinamico args[]
let myFunc2 = (...args) => {
    print("You passed " + args.length + " parameters");
}
//myFunc2("one", [1,2,3], "hi", "hiya", "hello", 11);

let myArr = [5, 70, 15];
// ...arr es el spread operator
//printValues(...myArr);
// Equivale a:
//printValues(5, 70, 15);

function printValues(one, two, three){
    print(`${one} ${two} ${three}`);
}


//Destructuring assignment
let persona = { nombre: "David", edad: 35 }
//Cuando la propiedad y mi variable tienen el mismo nombre, lo podemos extraer de la siguiente manera
//let {nombre, edad} = persona;
//print(nombre);

//Ahora cambiando el nombre de mi variable
let {nombre: newNombre, edad: newEdad} = persona;
//print(newEdad); //Imprime 35

//Extrayendo propiedades de nested objects
let nested = {
    inner: {
        nombre: "John Doe",
        edad: 9
    }
}
let {inner: {nombre, edad}} = nested;
//print(edad);
let {inner: {nombre: newNom, edad: newEd}} = nested;
//print(newNom);

let myArr2 = [1,2,3,4,5,6,7];
let [,,a] = myArr2; //a vale 3
//print(a);
let [,,,,d,b,c] = myArr2;
//print(`${d} ${b} ${c}`); //Vale 5 6 7
let [e,...myArr3] = myArr2;
//print(e); // vale 1
//print(myArr3); // Imprime [2,3,4,5,6,7]

*/

//Comentamos todo para que no haya conflictos de variables

/*
let miObjeto = {
    nombre: "David",
    edad: 23,
    location: "Argentina"
}
// destructuring object inline
let miFuncion = ({nombre, edad, location}) => {
    console.log(location);
}
miFuncion(miObjeto);
*/

/*
//Creando un objeto
let getObjeto = (nombre, edad) => ({nombre,edad})
//es igual a 
let getObjeto2 = (nombre, edad) => ({
    nombre: nombre,
    edad: edad
})
print(getObjeto("David",23));
*/

/*
//Declarando funciones dentro de objetos
let miObjeto = {
    nombre: "Object",
    //ES5
    miFuncion: function(){
        return "hola!";
    },
    //ES6
    miFuncion2(){
        return "Hola!";
    }
}

print(miObjeto.miFuncion());
*/

/*
//class keyword, pero no tenemos una clase como en java, sino que agregamos el constructor sin necesidad de usar una funcion
class Persona {
    constructor(){
        this.nombre = "Guest";
        this.edad = "unknown";
    }
    //NO SE PUEDEN OVERLOADEAR LOS CONSTRUCTORES
    // constructor(nombre, edad){
    //     this.nombre = nombre;
    //     this.edad = edad;
    // }
}

let persona1 = new Persona();
print(persona1);
*/

/*
class Perro{
    //Las propiedades privadas empiezan con _ (guion bajo)
    constructor(nombre, raza){
        this._nombre = nombre;
        this._raza = raza;
    }

    get nombrePerro(){
        return this._nombre;
    }

    set nombrePerro(nombre){
        this._nombre = nombre;
    }

    get getRaza(){
        return this._raza
    }

    //Creo que el set y get tienen que tener el mismo nombre, ya que son usados como propiedades
    set setRaza(raza){
        this._raza = raza;
    }
}

let miPerro = new Perro("Johnny", "Cocker");
console.log(miPerro.getRaza);
miPerro.setRaza = "Caniche";
console.log(miPerro.getRaza);
*/

/*
//Necesitamos esta linea para usar los export e import
// <script type="module" src="filename.js"></script>

//Exportando funciones para usarlas en otros scripts. Agregar a package.json "type": "module";
function myFunction(){
    return "I am a function!";
}

function greet(name){
    console.log("Hello " + name + "!");
}

export {myFunction, print, greet};

//Un export default por archivo
export default function(nombre){
    console.log("Hola " + nombre + "!");
}
*/

//resolve y reject son metodos que toman un argumento
let myPromise = new Promise((resolve, reject) => {
    let boolean = undefined;
    if(boolean){
        resolve("Promise fulfilled");
    }else{
        reject("Promise unfulfilled");
    }
});

//Usando funcion anonima como parametro
myPromise.then((mensaje) => {
    console.log(mensaje); 
})

//Si no ponemos un catch, el compilador tira error
myPromise.catch(mensaje => {
    console.log(mensaje);
})