function Primo() {

    numero = parseInt(document.getElementById("numeroInt").value)

    primo = true

    if (numero < 2) {
        primo = false
    } else {
        for (i = 2; i < numero; i++) {
            if (numero % i == 0) {
                primo = false
                break
            }
        }
    }

    if (primo == true) {
        alert(numero + "  é um numero primo")
    } else {
        alert(numero + "  não é um numero primo")
    }
}
