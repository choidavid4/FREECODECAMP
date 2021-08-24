
// INICIO
/*
let myString = "hello world I am David";
let regex = /I am/;
console.log(regex.test(myString)); //returns true
let regexOr = /earth|world/; // '|' this is the OR operator
let regexCase = /i am da/i; //i to ignore case

let result = myString.match(/l/)
console.log(result); // [ 'l', index: 2, input: 'hello world I am David', groups: undefined ]
*/

// PROPIEDADES ESPECIALES
/*
let myString2 = "Hi Hi hi hiya";
let regex = /hi/ig; //i case sensitivity off, g repeat
//console.log(myString2.match(regex));

// . -> wildcard character
let ms3 = "dan pan can gan";
//console.log(ms3.match(/.an/g));

let vocales = /[aeiou]/ig; //i ignore case, g repeat
let ms4 = "Me LLAMO GYOBU masataka ONIWA";
//console.log(ms4.match(vocales));
*/

/*
//Cuantas vocales hay en el siguiente string?
let ms5 = "soy Una persona muy MALVADA pero aun asi me gusta cuando...";
console.log("String = \"" + ms5+"\"");
console.log("A/a: " + ms5.match(/a/ig).length);
console.log("E/e: " + ms5.match(/e/ig).length);
console.log("I/i: " + ms5.match(/i/ig).length);
console.log("O/o: " + ms5.match(/o/ig).length);
console.log("U/u: " + ms5.match(/u/ig).length);
console.log("Vocales totales: " + ms5.match(/[aeiou]/ig).length);
*/

/*
//Buscar todas las letras o un rango usando [a-b]
let ms6 = "s0y un@ sTR1nG!9"; //9 letras
//console.log(ms6.match(/[a-z]/ig));

//Tambien se puede hacer lo siguiente /[a-z0-9]/ig
let miRegex = /[a-z0-9]/ig;
//console.log(ms6.match(miRegex));

//usando el not ^ operator para excluir
let excluirNumeros = /[^0-9]/ig;
//console.log(ms6.match(excluirNumeros));


miRegex = /a+/g; //Chequea donde tengo a y aa
let miString = "hola holaa";
//console.log(miString.match(miRegex));
*/

//Siempre hay regex y strings

function getMatch(string, regex) {
    console.log(string.match(regex));
}

function getTest(string, regex){
    console.log(regex.test(string));
}


// * cero or more matches
// getMatch("Aaaaaargh",/Aa*/g);
// getMatch("Argh",/Aa*/g); //returns [A]
// getMatch("hello!",/Aa*/g);

//a *greedy*  match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a *lazy* match, which finds the smallest possible part of the string that satisfies the regex pattern.

/*
let myString = "titanic ti";
getMatch(myString, /t[a-z]*i/); //greedy match
getMatch(myString, /t[a-z]*?i/); //lazy match
*/

//Con el regex.test() el ^ se usa para ver si ese regex sale primero
//console.log(/^hello/.test("hello world")); //prints true
//console.log(/^hello/.test("world hello")); //prints false

// test with /regex$/ to look for regex at end of string using .test()
//console.log(/world$/i.test("hello World")); //returns true

//getMatch("variable_namE",/\w/g); //\w = [A-Za-z0-9_]

//\W es el opuesto de \w
//getMatch("Hola!@",/\W/g);


/*
1. Usernames can only use alpha-numeric characters.

2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3. Username letters can be lowercase and uppercase.

4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

CASOS POSIBLES:
dos letras: ab
una letra + dos numeros o mas: a97
puras letras: hELoWorld
normal: hellOWORLD97
*/

//USERNAME
/*
let username = "DEeZNUTS69";
let regexUsername = /^[a-z][a-z]+[0-9]*$/i;
let regexUsername2 = /^[a-z][0-9][0-9]+$/i;

// /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/i
// console.log(regexUsername.test(username));
// console.log(regexUsername2.test(username));
if(regexUsername.test(username) || regexUsername2.test(username)){
    //console.log("Valid username");
}else{
    //console.log("No");
}
*/

// \s para buscar whitespaces. Also includes carriage return, tab, form feed, and new line characters \s = [ \r\t\f\n\v]
/*
getMatch("Hello World!\n",/\s/g);
*/
// \S for non-whitespace characters


// {3,5} cuando buscas algo entre 3 y cinco veces
/*
getMatch("cancion psdamhgll", /[^aeiou\s]{3,5}/g) //busca 3-5 consonantes seguidas

getTest("aah!",/a{3}/);
getTest("aaah!",/a{3}/);
*/

// {3,} if we want three or more
//getTest("aaaaaaaaaaaaaaaaaaaaaaaaaaaaah",/a{3,}/);


// ? when a character is optional
//getTest("Hellow",/Hellow?/); //returns true

//lookaheads no devuelven el valor pero chequean si el regex esta o no
// (?=regex) positive lookahead
// (?!regex) negative lookahead

//getTest("hello123",/(?=[0-9]{3})/);

/*
let string = "bana12";
let posi1 = /(?=\w{5,})/; //para ver si tiene 5 caracteres
let posi2 = /(?=[0-9]{2,})/ //para ver si tiene 2 numeros consecutivos
let posi3 = /(?=\w{5,})|(?=[0-9]{2,})/
getTest(string,posi1);
getTest(string,posi2);
getTest(string,posi3);
*/

// OR (a|b)
/*
let fullNameRegex = /(David|Daniel).*? Choi/; //Contempla David Choi o Daniel Choi y toma segundos nombres tambien
let string = "Clara Choi";
getTest(string,fullNameRegex);
*/

//Capture groups for when we don't know what we are looking for
/*
let myRegex = /([a-z]+) \1 \1/i; //Solo sirve si la palabra capturada estan una atras de la otra
//getMatch("row row your row boat",myRegex);

getTest("42 42 42 42", /^([0-9]+) \1 \1$/);
*/

// string.replace(regex,replacement)
/*
let wrongText = "The sky is silver.";
wrongText.replace(/s+/, "blue"); //THIS DOESN'T WORK
//console.log(wrongText);
//console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

//Switch places
let string = "time machine";
let myRegex = /([a-z]+) ([a-z]+)/;
console.log(string.replace(myRegex, "$2 $1"));
*/

//Remove whitespace at start and end using regex
let string = "  hello  World!    ";
let regex = /^\s+|\s+$/g;
getTest(string,regex);
console.log(string.replace(regex, ""));


