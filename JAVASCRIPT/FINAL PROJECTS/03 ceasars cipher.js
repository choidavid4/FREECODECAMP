function rot13(str) {
    //Recibe un string encodeado en rot 13 (avanzar las letras 13 lugares en el abecedario) todo en mayusculas y lo convierte a normal.
  //Retrodecer las letras 13 lugares
  //Recorrer el string (abrir loop)
  //Preguntar si mi caracter es una letra mayuscula
  //true: retrocederla 13 lugares usando toCharCode y agregar a result
  //false: agregarla al result tal como esta (cerrar loop)
  //Devolver result
  let result = "";
  for(let i = 0; i < str.length; i++){
    if(/[A-Z]/.test(str[i])){
      if(/[A-M]/.test(str[i])){
        result += String.fromCharCode(str.charCodeAt(i) - 13 + 26);
      }else{
        result += String.fromCharCode(str.charCodeAt(i) - 13);
      }
    }else{
      result += str[i];
    }
  }
  return result;
}
rot13("ABCDEFGHIJKLM NOPQRSTUVWXYZ123!");