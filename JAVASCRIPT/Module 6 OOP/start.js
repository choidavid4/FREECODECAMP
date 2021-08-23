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
let davidNation = david.nationality;
let carlosNation = carlos.nationality;
let davidIsProt = Person.prototype.isPrototypeOf(david); //false. idk why


//.prototype es un objeto tambien que hereda de Object.prototype

//Superclases para no repetir codigo
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog(name){
  this.name = name;
}
function Duck(name){
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Duck.prototype = Object.create(Animal.prototype);

let myDog = new Dog();
//La propiedad .constructor fue overwritten. ahora vale Animal. En FCC la vuelven a cambiar manualmente

//console.log(myDog.constructor);
Dog.prototype.constructor = Dog;
Duck.prototype.constructor = Duck;
//console.log(myDog.constructor);

//mixin son funciones que funcionan como interfaces sobre instancias de objetos
function poopMixin(obj){
  obj.poop = function(){
    console.log('isecaca');
  }
}
poopMixin(david);
poopMixin(myDog);

//Como crear una propiedad privada
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}
let myBird = new Bird();
let weight = myBird.getWeight();


//Immediately Invoked Function Expression (IIFE)
(function(){console.log('Hello World!')})();





