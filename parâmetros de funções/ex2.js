function alterarObjeto (obj){
    obj.propriedade = 'neeww valor'
}

let objeto = {propriedade: "Valor antigo"}
alterarObjeto(objeto)
console.log(objeto.propriedade);