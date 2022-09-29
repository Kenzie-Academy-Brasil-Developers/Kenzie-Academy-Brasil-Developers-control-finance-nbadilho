let lista = document.querySelector(".valores")

function criarValor({ id, value, categoryID }) {
    lista.classList.add("appear")
    vazio.classList.remove("appear")
    let tipo = ""
    if (categoryID === 1) {
        tipo = "Saída"
    } else {
        tipo = "Entrada"
    }
    let li = document.createElement("li")
    let num = document.createElement("p")
    num.innerText = `R$${mudarValor(value)}`
    let div = document.createElement("div")
    div.classList.add("detalhes")
    let categoria = document.createElement("p")
    categoria.innerText = tipo
    let botao = document.createElement("button")
    botao.classList.add("apagar_valor")
    botao.id = id
    botao.setAttribute("data-botao-lixeira", "apagar")
    botao.addEventListener("click", function () {
        let itemRemov = insertedValues.filter(valor => valor.id == botao.id)
        botao.closest("li").remove()
        removerValor(itemRemov)
        console.log(insertedValues)
        if (insertedValues.length == 0 && itemRemov[0].categoryID == 1) {
            montarVazio("Saída")
        } else if (insertedValues.length == 0 && itemRemov[0].categoryID == 0) {
            montarVazio("Entrada")
        }
        if (insertedValues.length == 0) {
            return somar(0)
        }
        let numeros = insertedValues.map(item => item.value)
        let numeros_final = numeros.map(item => item = mudarSoma(item)).reduce((b, a) => a + b)
        somar(numeros_final)

    })

    let img = document.createElement("i")
    img.classList.add("fa-solid")
    img.classList.add("fa-trash")
    botao.append(img)
    div.append(categoria, botao)
    li.append(num, div)
    lista.append(li)
}


