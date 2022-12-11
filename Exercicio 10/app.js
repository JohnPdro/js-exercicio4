let contador = 0
while (contador <= 100) {
    if (contador % 2 == 0)
    // No item "if" nos passa a seguinte informação, se o contador foi divisivel por 2 e o resultado for igual a 0 significa que é um número par.
    {
        document.getElementById("resposta").innerHTML += contador + "<br>"
    }
    contador++    
}