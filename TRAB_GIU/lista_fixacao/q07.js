function returnInfoAsArray(object){
    return Object.entries(object);
}

//test

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

let infoArray = returnInfoAsArray(carro);
console.log(infoArray);