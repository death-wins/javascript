function tabuada() {

    numeroInt =(document.getElementById("numeroInt").value)

    document.write("<h2>Tabuada do " + numeroInt + "</h2>")

    for (i = 1; i <= 10; i++) {
        document.write(numeroInt + " x " + i + " = " + (numeroInt * i) + "<br>")
    }
}
