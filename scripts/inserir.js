let botaoInserir = document.querySelector(".inserir")

function inserirValor(obj) {
    insertedValues.push(obj)
}

botaoInserir.addEventListener("click", function () {
    vazio.classList.remove("appear")
    let tipoEntrada = document.querySelector('input[name="opcao"]:checked').value
    let valorEntrada = document.querySelector(".valor").value

    if (tipoEntrada === "Entrada") {
        tipoEntrada = 0
    } else {
        tipoEntrada = 1
    }
    let novoid = 0
    if (insertedValues.length == 0) {
        novoid = 0
    } else {
        novoid = insertedValues.map(item => item.id).slice(-1)[0] + 1
    }

    let obj = { id: novoid, value: valorEntrada, categoryID: tipoEntrada }
    inserirValor(obj)

    let soma_final = insertedValues.map(item => item.value).map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
    somar(soma_final)
    lista.innerHTML = ""
    insertedValues.forEach(item => criarValor(item))
    document.getElementById("valor").value=""
    document.querySelector('input[name="opcao"]:checked').checked=false
})