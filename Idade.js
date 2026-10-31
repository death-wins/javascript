function Idade() {

    nome = document.getElementById("nome").value
    anoAtual = (document.getElementById("anoAtual").value)
    anoNascimento = (document.getElementById("anoNascimento").value)

    idade = parseInt(anoAtual) - parseInt(anoNascimento)

    if (idade >= 18) {
        alert(nome + ", você é maior de idade")
    } else {
        alert(nome + ", você é menor de idade")
    }
}
