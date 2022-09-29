let insertedValuesfiltered = [];
let soma = document.querySelector(".soma_total")


function filtrar(id) {
    insertedValuesfiltered = []
    insertedValuesfiltered.push(insertedValues.filter(obj => obj.categoryID == id))
    return insertedValuesfiltered[0]
}

function somar(valor) {
    soma.innerText = ""
    soma.innerText = `R$${mudarValor(valor)}`
}

function mudarSoma(item) {
    let modificada = item.replace(",", ".")
    let num = Number(modificada)
    return num
}

arrCategorias.forEach(item => item.addEventListener("click", function () {
    lista.innerHTML = ""
    let tipo = 0
    if (item.getAttribute("data-botao-resumo") == "Saída") {
        tipo = 1
    } else if (item.getAttribute("data-botao-resumo") == "Todos") {
        let numeros = insertedValues.map(item => item.value)
        console.log(numeros)
        let numeros_final = numeros.map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
        somar(numeros_final)
        return insertedValues.forEach(obj => criarValor(obj))
    }
    let resultado = filtrar(tipo)
    let nums = resultado.map(valor => valor.value)
    let soma_final = nums.map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
    somar(soma_final)
    resultado.forEach(item => {
        criarValor(item)
    }
    )
}))

insertedValues.forEach(obj => obj.value = mudarValor(obj.value))
insertedValues.forEach(item => criarValor(item))


