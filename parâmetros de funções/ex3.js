function objetoOriginal (obj){
    obj.propriedade = "valor modificado"
}

let objor = { propriedade: "valor original"}
objetoOriginal(objor);
console.log(objor.propriedade)