function removeAtribute(obj, attr){
    //copy the object
    let newObj = {...obj};
    delete newObj[attr];
    return newObj;
}   

//test
let pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

let novaPessoa = removeAtribute(pessoa, "idade");
console.log(novaPessoa);
console.log(Object.is(pessoa, novaPessoa)); 