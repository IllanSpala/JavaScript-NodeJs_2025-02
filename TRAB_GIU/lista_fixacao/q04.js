function recebeArray(arr){
    var i = arr.length;
    var primeiroElemento = arr[0];
    var ultimoElemento = arr[i - 1];
    return primeiroElemento + ultimoElemento;
}

console.log(recebeArray([10, "oi", true, 145.50, -50, 'this']))
console.log(recebeArray(["oi", true, 145.50, -50]))
console.log(recebeArray([ true]))
