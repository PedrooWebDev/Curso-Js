for (let i = 1; i < 100; i++){
    if (i % 2 === 1){
        continue
    }else if (i === 79) {
        break
    } else{
        console.log(i)
    }
}