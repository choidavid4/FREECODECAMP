let persona = {
    nombre: "David",
    edad: 600,
    pasatiempos: ["comer", "dormir"],
    diccionario: {
        a: "hola",
        b: "chau"
    }
};

let hol = persona.diccionario.a;
//console.log(hol);

hol = persona["diccionario"].a;
// console.log(hol);

hol = persona.diccionario["a"];
//console.log(hol);

let nestArr = [
    {
        nombre: "caca",
        array: ["string", "hola", "chau"]
    },
    {
        nombre: "pus",
        array2: ["hoal", "hgaha", "caca"]
    }
];

let aux = nestArr[1].array2[1];
// console.log(aux);

// let i = 0;
// while(i < 5){
//     //console.log("chau");
//     i = i + 1; // i++
// }

//console.log("----------------------------------------");

for(let i = 0; i < 5; i++){
    //console.log("chau");
}

let miArr = ["david", "hola", "mundo"];
for(let i = 0; i < miArr.length; i++){
    //console.log(miArr[i]);
}

let indice = 0;
do{
    //console.log("hola");
    indice++; 
}while(indice < 5);

function sum(arr, n){
    if(n <= 0){
        return 0;
    }else{
        return sum(arr, n - 1) + arr[n - 1];
    }
}

let sumar = [5, 4, 1, 3, 9, 8 ,90, 23];
//console.log(sum(sumar, sumar.length));

let random = Math.random(); //entre 0 y 1


// for (let i = 0; i < 5; i++) {
//     random = Math.floor(Math.random() * 101);
//     console.log(random);
// }

// let numString = "00096"
// console.log(numString);
// let parseado = parseInt(numString);
// console.log(parseado);

// 0 - 9 A B C D E F

let parseado = parseInt("10", 36);
//console.log(parseado);

let david = "lindo";

if(david == "lindo"){

    //console.log(false);

}else{

    //console.log(true);

}

// a ? b : c || a condicion b true c false

//david == "lindo" ? console.log(false) : console.log(true);

let harry = "feo";

// if (harry == "lindo"){
//     console.log(true);
// }else if(harry == "feo"){
//     console.log(false);
// }else{
//     console.log("Harry es: " + harry);
// }

// a ? b ? c

//harry == "lindo" ? console.log(true) : harry == "feo" ? console.log(false) : console.log("Harry es: " + harry);

function cuentaRegresiva(n){
    // n techo inicio
    if(n <= 0){
        return [];
    }else{
        const arr = cuentaRegresiva(n - 1);
        arr.unshift(n);
        return arr;
    }
}

let miCuentaRegresiva = cuentaRegresiva(10);
//console.log(miCuentaRegresiva);

function rangoDeNumeros(min, max){
    if(max < min){
        return [];
    }else{
        let arr = rangoDeNumeros(min, max - 1);
        arr.push(max);
        return arr;
    }
}

let miRango = rangoDeNumeros(7,29);
console.log(miRango);