
let message = "Hi I am a really long string"


message += " more string added";
console.log(message.length);

console.log("\nArray example: ");
let myArray = ["Kevin", "John", "Diana"];
console.log(myArray);

console.log("\n> We uset pop/push o delete/add to end of array");
myArray.pop();
myArray.push("Luz");
console.log(myArray);

console.log("\n> shift/unshift to delete/add start of array");
myArray.shift();
myArray.unshift("Tini");
console.log(myArray);

function fourth(string){
    if(string.length >= 4){
        return string[3];
    }
    return "String too short";
}

console.log("\n> fourth(Hi!)");
console.log(fourth("Hi!"));
console.log("\n> fourth(\"Hiya!\")");
console.log(fourth("Hiya!"));

console.log("\n> Queue app");

let queue = [1];
let last = 1;

function nextInLine() {
    //Sacamos el primer elemento
    let aux = queue[0];
    queue.shift();
    return aux;
}

function standInLine() {
    last++;
    queue.push(last);
}

for (let i = 0; i < 3; i++) {
    standInLine();  
}

for(let i = 0; i < 3; i++){
    console.log(nextInLine());
    //Deberia retornar 1 2 3
}

console.log(queue);
//imprime [4]


// COUNTING CARDS

var count = 0;

function cc(card) {
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    let action = "Hold";

    if (count > 0){
        action = "Bet";
    }

    console.log(`${count} ${action}`);
}

function resetCount(){
    count = 0;
}

console.log("\n> Counting cards app");
cc(3); cc(4); cc('A'); cc(8); cc('J'); cc('Q');


