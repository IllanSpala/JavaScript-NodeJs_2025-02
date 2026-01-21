function countTotalWords(str){
    for(let i = 0; i < str.length; i++){
        if(str[0] === "  "){
            return console.log('NAO HÁ PALAVRAS');
        }
        else{
            let count = 1;
            for(let j = 0; j < str.length; j++){
                if(str[j] === " " && str[j + 1] !== " "){
                    count++;
                }
            }
            return console.log(`Total de palavras: ${count}`);
        }

    }
}

//test

let testString = "hello world";
let testString2 = "this is  a test string this is only a test";


countTotalWords(testString); // Total de palavras: 2
countTotalWords(testString2); // Total de palavras: 10
