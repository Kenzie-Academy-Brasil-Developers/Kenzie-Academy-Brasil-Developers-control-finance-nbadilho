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

    let obj = { id: tamanho, value: Number(valorEntrada), categoryID: tipoEntrada }

    insertedValues.push(obj)
    lista.innerHTML=""
    insertedValues.forEach(item=>criarValor(item))

})

