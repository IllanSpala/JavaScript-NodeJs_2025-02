//Aula 04 dia 03/10/2025 {vou fzr uma barrinha e foudase}
var readlineSync = require("readline-sync"),
MAX = 60, MIN = 0, value = 30, key;
console.log((new Array(20)).join(' ') +
'[A] <- -> [D]  FIX: [SPACE]\n');
while(true){
    console.log('\x1B[1A\x1B[K|'+
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX-value + 1 )).join('-') + '| ' + value);
    key = readlineSync.keyIn('',
        {hideEchoBack:true, mask:'', limit:'ad '});
    if (key === 'a' || key === 'A') { if (value > MIN) { value--; } }
    else if (key === 'd'|| key === 'D') { if (value < MAX) { value++; } }
    else { break; }
}
console.log('\nREQUESTED VALUE: ' + value);

