let insertedValuesfiltered = [];
let soma = document.querySelector(".soma_total")


function filtrar(id) {
    insertedValuesfiltered = []
    insertedValuesfiltered.push(insertedValues.filter(obj => obj.categoryID == id))
    return insertedValuesfiltered[0]
}

arrCategorias.forEach(item => item.addEventListener("click", function () {
    lista.innerHTML = ""
    let tipo = 0
    if (item.getAttribute("data-botao-resumo") == "Saída") {
        tipo = 1
    } else if (item.getAttribute("data-botao-resumo") == "Todos") {
        let numeros = insertedValues.map(item => item.value).map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
        somar(numeros)
        return insertedValues.forEach(obj => criarValor("Todos",obj))
    }

    let resultado = filtrar(tipo)
    let nums = resultado.map(valor => valor.value).map(item => item = mudarSoma(item)).reduce((b, a) => a + b)

    somar(nums)
    resultado.forEach(unico => criarValor(unico))

}))


let numeros_todos = insertedValues.map(item => item.value).reduce((b, a) => a + b)
somar(mudarValor(numeros_todos))


insertedValues.forEach(obj => obj.value = mudarValor(obj.value))
insertedValues.forEach(item => criarValor(item))


