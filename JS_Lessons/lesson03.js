//working with prototype 23/10/25

/* FIRST BLOCK 

const avo = {attr1: "A"}
const pai = {attr2: "B", attr3: "D", __proto__: avo} // were passing the avo as an atribute to the proto, so he can inheretance him
const filho = {attr3: "C", __proto__: pai} // same name on the variable thats encountered on pai Object
// Look how all of them can access the prototype, he is considered as a father of all kinda like
//but we want to have an inheretance between all of the variables, the father will inheretance the grandfather and so on...

console.log(pai) // our output should be without the attr1: "A", thats because the info inherited isnt printed yet
console.log(pai.attr1) // now only A will be printed. the data inherited by grandfather

console.log(filho) // only attr3:"C" will be printed
console.log(filho.attr1, filho.attr2) // now A and B will be printed, inheritance by grandfather passed through the father 
console.log(filho.attr3) // C will be printed because it was declared on the last generation, overwritting the D value on the father object
console.log(filho.__proto__.attr3) // D will be printed because were looking for the __proto__ one

END FIRST BLOCK */

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    } 
}

const ferrari = {
    modelo: "F50",
    velMax: 324,
//  __proto__: carro on that way, we will inheretance the values for VelAtual and also the acelararMais function
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo} : --`
    }
}

Object.setPrototypeOf(volvo, carro) // volvo will inheretance the atributes and methods from carro
Object.setPrototypeOf(ferrari, carro) // ferrari will inheretance the atributes and methods from carro
//Object.setPrototypeOf is a easier way to do __p   roto__: carro

console.log(ferrari)
ferrari.acelerarMais(100)
console.log(ferrari.status())

// WORKING WITH Object.seal() and Object.preventExtensions()
// looking how to creat a class on the oop sintax

class carro_OOP{
    modelo
    velAtual
    velMax
    constructor(modelo="GENERICO", velAtual = 0, velMax = 500){
        this.modelo = modelo
        this.velAtual = velAtual
        this.velMax = velMax
    }
}