let a = 1;
let b = 0;
let c = 0;

let sum = 0;

while(c <= 400){
    c = a + b  
    if(c % 2 == 0){
        sum += c  
        a = b  
        b = c }
}
console.log(sum)