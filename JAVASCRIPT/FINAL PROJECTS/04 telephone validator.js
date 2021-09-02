//Repaso de regex
//Como chequear si un string es numero
function chequearNum(miString){
    for(let i = 0; i < miString.length; i++){
        if(/[0-9]| /.test(miString[i]) == false){
            return false;
        } 
    }
    return true;
}

//Como chequear que haya 3 numeros entre parentesis
function checkParentesis(string){
    return /\([0-9]{3}\)/.test(string);
}

//Algorithm for US Telephone check 1 (555) 555 5555
function telephoneCheck(str) {
  //Chequear si tengo ambos parentesis primero
  //Transformar simbolos () y - a espacios
  //Chequear que el string sea solo numeros y espacios
  //chequear cantidad de digitos
  //Si tiene 11 chequear que el primero sea 1, sacarlo del string para quedarme con los otros 10
  //Dividirlo en un array y fijarme que sea 3 3 4 el ratio
  if(/\(/.test(str)){
    if(/\)/.test(str) == false){
      return false;
    }//En este punto tengo dos parenthesis
    else{
      if(/\([0-9]{3}\)/.test(str) == false){
        return false;
      }
    }
  }
  if(/\)/.test(str)){
    if(/\(/.test(str) == false){
      return false;
    }
  }
  //Chequear que haya 3 numeros entre parentesis

  let newStr = str.replace(/-|\(|\)/g," ");
  //console.log(newStr); //test 1
  for(let i = 0; i < newStr.length; i++){
    if(/[0-9]| /.test(newStr[i]) == false){
      return false
    }
  }

  let digitos = newStr.replace(/ /g,"").length;
  //console.log(newStr); //Test 2
  if(digitos != 10 && digitos != 11){
    return false;
  }else if(digitos == 11){
    if(newStr[0] != '1'){
      return false;
    }else{
      newStr = newStr.replace(/1/,"");
    }
  }
  //console.log(newStr); //3
  //A este punto me quedo un string con espacios y 10 digitos
  newStr = newStr.split(" ");
  newStr = newStr.filter(element => element);
  //console.log(newStr); //4
  //This removes the empty ones
  if(newStr[0].length == 10) return true;
  if(newStr[0].length != 3 || newStr[1].length != 3 || newStr[2].length != 4) return false;

  return true;
}
console.log(telephoneCheck("1 (555) 555 5555"));
