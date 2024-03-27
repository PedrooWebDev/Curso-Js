const array = [1, 2, 3, 4, 5, 1, 2, 3]

for (let i = 0; i < array; i++){
    for(let j = i + 1; j < array; j++){
    if (i === j){
        console.log(i)
        } else {
            break
        }
    } 
}
