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
    num.innerText = `R$${value}`
    let div = document.createElement("div")
    div.classList.add("detalhes")
    let categoria = document.createElement("p")
    categoria.innerText = tipo
    let botao = document.createElement("button")
    botao.classList.add("apagar_valor")
    botao.id = id
    botao.setAttribute("data-botao-lixeira", "apagar")
    botao.addEventListener("click", function () {
        botao.closest("li").remove()
        let itemRemov = insertedValues.filter(valor => valor.id == botao.id)
        removerValor(itemRemov)
        let tipos = insertedValues.filter(obj => categoryID == obj.categoryID)

        if (tipos.length == 0 && itemRemov[0].categoryID == 1 && tipos.length <= insertedValues.length) {
            montarVazio("Saída")
        } else if (tipos.length == 0 && itemRemov[0].categoryID == 0 && tipos.length <= insertedValues.length) {
            montarVazio("Entrada")
        }

        if (tipos.length == 0) {
            return somar(0)
        }

        somar(tipos.map(item => item.value).map(item => item = mudarParaNum(item)))

    })

    let img = document.createElement("i")
    img.classList.add("fa-solid")
    img.classList.add("fa-trash")
    botao.append(img)
    div.append(categoria, botao)
    li.append(num, div)
    lista.append(li)
}

function criarValorTodos({ id, value, categoryID }) {
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
    num.innerText = `R$${value}`
    let div = document.createElement("div")
    div.classList.add("detalhes")
    let categoria = document.createElement("p")
    categoria.innerText = tipo
    let botao = document.createElement("button")
    botao.classList.add("apagar_valor")
    botao.id = id
    botao.setAttribute("data-botao-lixeira", "apagar")
    botao.addEventListener("click", function () {
        botao.closest("li").remove()
        let itemRemov = insertedValues.filter(valor => valor.id == botao.id)
        removerValor(itemRemov)
        if (insertedValues.length == 0) {
            montarVazio("Todos")
            return somar(0)
        } else {
            somar(insertedValues.map(item => item.value).map(item => item = mudarParaNum(item)))
        }

    })

    let img = document.createElement("i")
    img.classList.add("fa-solid")
    img.classList.add("fa-trash")
    botao.append(img)
    div.append(categoria, botao)
    li.append(num, div)
    lista.append(li)
}


