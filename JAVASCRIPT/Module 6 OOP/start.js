//constructor
function Person(name, age) {
    this.name = name; //own property
    this.age = age;
    this.saludar = function(){
        return "Hello I am " + name;
    }
}
let david = new Person('David', 69);

//instanceof. Creo que no funciona con primitivas.
let instance = david instanceof Person;

//Own properties are the ones that all the instances have

//Object.prototype. se usa para definir propiedades estaticas que se comparten entre todas las instancias
Person.prototype.isPerson = true; //prototype property
let tini = new Person('Martina', 25);
let tiniIsPerson = tini.isPerson;
let davidIsPerson = david.isPerson;

//Las instancias poseen una propiedad .constructor
let miConstructor = david.constructor;

//Como definir multiples propiedades prototipo
Person.prototype = {
    nationality: "Argentinian",
    sayBye(){
        console.log("Bye bye");
    }
}
//OJO: ESTO TIENE QUE IR ANTES DE LA CREACION DE LA INSTANCIA. NO AGREGA PROPIEDADES A INSTANCIAS YA CREADAS
let carlos = new Person('Carlos', 9);
//console.log(`${tini.nationality} ${david.nationality} ${carlos.nationality}`); //undefined undefined Argentinian



