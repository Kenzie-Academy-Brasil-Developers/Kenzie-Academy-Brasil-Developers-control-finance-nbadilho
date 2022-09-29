let remover = document.querySelectorAll("[data-botao-lixeira]")
let arrRemover = [...remover]

function removerValor(valor) {
    insertedValues = insertedValues.filter(obj => obj !== valor[0])
}



arrRemover.forEach(item => item.addEventListener("click", function () {
    let itemRemov = insertedValues.filter(valor => valor.id == item.id)
    removerValor(itemRemov)
    item.closest("li").remove()

    let numeros = insertedValues.map(item => item.value)
    let numeros_final = numeros.map(item => item = mudarSoma(item)).reduce((b, a) => a + b)

    console.log(insertedValues)
    somar(numeros_final)

}))