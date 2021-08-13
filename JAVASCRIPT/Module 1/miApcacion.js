// console.log("Hola mundo");

let persona = {
    nombre: "David",
    edad: 23,
    comidaFavorita: "Vos"
};

//naruto uzumaki

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona["edad"]);

let comida = "comidaFavorita";
// console.log(persona[comida]);

persona.nombre = "Facundo";
// console.log(persona.nombre);

//persona["nombre"] persona[myVar] 

persona.actividadFavorita = "Programar en ECMA Script";
// console.log(persona);

//HEADFIRST JAVA

delete persona["actividadFavorita"];
// console.log(persona);

// { 
//     nombre: 'Facundo', 
//     edad: 23, 
//     comidaFavorita: 'Vos' }

let tieneActividadFavorita = persona.hasOwnProperty("nombre");
//console.log(tieneActividadFavorita);

let miArray = [
    {nombre: "Martin", edad: 26},
    {patas: 4, raza : "cocker"}
];
//console.log(miArray);

//console.log(miArray[1]);



