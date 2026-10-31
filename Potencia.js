function Potencia() {

    base = parseInt(document.getElementById("base").value)
    expoente = parseInt(document.getElementById("expoente").value)

    resultado = 1
    conta = ""

    for (i = 1; i <= expoente; i++) {
        resultado = resultado * base
        conta = conta + base

        if (i < expoente) {
            conta = conta + "*"
        }
    }

    if (expoente == 0) {
        conta = "1"
    }

    document.write(conta + " = " + resultado)
}
