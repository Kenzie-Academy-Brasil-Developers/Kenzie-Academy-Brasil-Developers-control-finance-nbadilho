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


    let tamanho = insertedValues.map(item => item.id).slice(-1)[0] + 1

    let obj = { id: tamanho, value: valorEntrada, categoryID: tipoEntrada }
    insertedValues.push(obj)
    let numeros = insertedValues.map(item => item.value)
    console.log(numeros)
    let numeros_final = numeros.map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
        somar(numeros_final)
    lista.innerHTML = ""
    insertedValues.forEach(item => criarValor(item))

})
