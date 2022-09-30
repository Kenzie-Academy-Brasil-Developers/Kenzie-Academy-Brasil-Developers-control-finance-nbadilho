let botaoInserir = document.querySelector(".inserir")


function inserirValor(obj) {
    insertedValues.push(obj)
    somar(insertedValues.map(item => item.value).map(item => item = mudarParaNum((item))))
    console.log(insertedValues)
    insertedValues.forEach(item => criarValorTodos(item))
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
    lista.innerHTML = ""
    let obj = { id: novoid, value: mudarParaString(mudarParaNum(valorEntrada)), categoryID: tipoEntrada }
    inserirValor(obj)
    let soma_inicial = insertedValues.map(item => item.value).map(item => item = mudarParaNum((item)))
    somar(soma_inicial)


    document.getElementById("valor").value = ""
    document.querySelector('input[name="opcao"]:checked').checked = false
})