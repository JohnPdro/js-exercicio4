let contador = 0
while (contador <= 100) {
    if (contador % 2 == 1)
        // No item "if" nos passa a seguinte informação, se o contador foi divisivel por 2 e o resultado for igual a 1 significa que é um número impar.
    {
        document.getElementById("resposta").innerHTML += contador + "<br>"
    }
    contador++    
}