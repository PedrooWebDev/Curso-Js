let A = 0
let B = 1
let C = 0
let fibo = " "

fibo += A + " " + B

for(let contador = 1; contador <= 8; contador++){
    C = A + B
    fibo += " " + C
    A = B
    B = C
}

console.log(fibo)