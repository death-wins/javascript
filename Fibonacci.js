function Fibonacci() {

    n = parseInt(document.getElementById("numeroInt").value)

    if (isNaN(n) || n < 1) {
        document.write("Informe uma quantidade válida de termos.")
        return
    }

    a = 1
    b = 1

    document.write("<h2>Sequência de Fibonacci</h2>")

    for (i = 1; i <= n; i++) {
        document.write(a + " ")

        proximo = a + b
        a = b
        b = proximo
    }
}
