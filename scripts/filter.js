let insertedValuesfiltered = [];

function filtrar(id) {
    insertedValuesfiltered = []
    insertedValuesfiltered.push(insertedValues.filter(obj => obj.categoryID == id))
    return insertedValuesfiltered[0]
}

arrCategorias.forEach(item => item.addEventListener("click", function () {

    if (arrCategorias.filter(obj => obj.classList.contains("foco")).length!==0) {
        arrCategorias.forEach(item=>item.classList.remove("foco"))
    }

    item.classList.add("foco")


    lista.innerHTML = ""
    let tipo = 0
    if (item.getAttribute("data-botao-resumo") == "Saída") {
        tipo = 1
    } else if (item.getAttribute("data-botao-resumo") == "Todos") {
        somar(insertedValues.map(item => item.value).map(item => item = mudarParaNum(item)))
        return insertedValues.forEach(obj => criarValorTodos(obj))
    }

    let resultado = filtrar(tipo)
    if (resultado.length == 0) {
        somar(0)
        return montarVazio(item.getAttribute("data-botao-resumo"))
    }
    somar(resultado.map(valor => valor.value).map(item => item = mudarParaNum(item)))
    resultado.forEach(unico => criarValor(unico))

}))


let numeros_todos = insertedValues.map(item => item.value)
somar(numeros_todos)
botaoTodos.classList.add("foco")
insertedValues.forEach(obj => obj.value = mudarParaString(obj.value))
insertedValues.forEach(item => criarValorTodos(item))


