let botaoInserir = document.querySelector(".inserir")

botaoInserir.addEventListener("click", function () {
    vazio.classList.remove("appear")
    let tipoEntrada = document.querySelector('input[name="opcao"]:checked').value
    let valorEntrada = document.querySelector(".valor").value

    if (tipoEntrada === "Entrada") {
        tipoEntrada = 0
    } else {
        tipoEntrada = 1
    }
    let tamanho = 0
    if (insertedValues.length == 0) {
        tamanho = 0
    } else {
        tamanho = insertedValues.map(item => item.id).slice(-1)[0] + 1
    }

    let obj = { id: tamanho, value: valorEntrada, categoryID: tipoEntrada }
    insertedValues.push(obj)

    let numeros = insertedValues.map(item => item.value).map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
    somar(numeros)
    lista.innerHTML = ""
    insertedValues.forEach(item => criarValor(item))

})
