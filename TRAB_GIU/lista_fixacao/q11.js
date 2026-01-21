function returnObjTotalPrice(obj){
    let totalPrice = 0;
    for(let key in obj){
        totalPrice += obj[key].price;
    }
    return { totalPrice: totalPrice };
}

//test

let order = {
    item1: { name: "notebook", price: 2500 },
    item2: { name: "mouse", price: 150 },
    item3: { name: "teclado", price: 300 },
};

let order2 = {
    item1: { name: "monitor", price: 1200 },
    item2: { name: "cabo HDMI", price: 100 },
};

console.log(returnObjTotalPrice(order)); // { totalPrice: 2950 }
console.log(returnObjTotalPrice(order2)); // { totalPrice: 1300 }