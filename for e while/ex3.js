let contador = 1;

while (contador <= 20) {
    if (contador % 2 == 1){
        console.log(contador);
        contador++;
    } else if (contador >= 15){
        break
    } else {
        contador++
    }
}