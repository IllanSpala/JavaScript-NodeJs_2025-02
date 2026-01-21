function filtraNumArray(arr){
    const result = arr.filter(x => Number.isInteger(x));
    result.forEach(x => console.log(x));
    return result;
}


let array = [1, "dois", 3, "quatro", 5, "seis"];
let novoArray = filtraNumArray(array);
console.log(array);
console.log(novoArray);