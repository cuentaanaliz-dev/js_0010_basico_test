export function mayorDeTresNumeros(a, b, c) {
  var mayor = 0;
  if (a > b) {
    if (a > c ){
        mayor = a;
     }
     else {
        mayor = c;
     }
  }
  else{ 
    if (b > c){
        mayor = b;
    }
    else {
        mayor = c;
    }
  }
  return mayor;
}
export function ceroIfNull(a) {
 if (a === null){
    return 0;
 }
 else {
    return a;
 }
}

export function numerosParesCount(desde, hasta) {
var totalPares = 0;
for ( var i= desde;i<= hasta;i++){
  if (i%2==0)
    totalPares +=1;
}
return totalPares;
}

export function ifCadenaMasLargaDeN(cadena, n) {
var longitud = cadena.length; 

if (longitud > n){
    return true;
}
else{
    return false;
}
}
export function trueIfSumaDeTresNumerosIgualN(a, b, c, n) {
var totalSuma = a+b+c;
if (totalSuma == n){
return true;
}
else {
    return false;
}
}
// que devuelva en centimos redondeado
// el producto de cantidad por precio
export function importe(cantidad, precio) {
var totalImporte = cantidad * precio;
return  (Math.round(totalImporte*100));
}