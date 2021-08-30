function convertToRoman(num) {
  let unidades = ['I','II','III','IV','V','VI','VII','VIII','IX'];
  let decenas = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
  let centenas = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
  let miles = ['M','MM','MMM'];

  let numActual = num;
  let result = "";
  if(numActual >= 1000){
    let resto = numActual % 1000;
    let milesIndice = (numActual - resto) / 1000 - 1;
    result += miles[milesIndice];
    numActual = resto;
  }
  if(numActual >= 100){
    let resto = numActual % 100;
    let centenasIndice = (numActual - resto)/100 - 1;
    result += centenas[centenasIndice];
    numActual = resto;
  }
  if(numActual >= 10){
    let resto = numActual % 10;
    let decenasIndice = (numActual - resto)/10 - 1;
    result += decenas[decenasIndice];
    numActual = resto;
  }
  if(numActual > 0){
    result += unidades[numActual - 1];
  }
  return result;
}

convertToRoman(3999);