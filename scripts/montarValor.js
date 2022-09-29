let lista = document.querySelector(".valores")

function mudarValor(num) {
    let string = num.toString()
    let modificada = string.replace(".", ",")
    return modificada

}

function criarValor({ value, categoryID }) {
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
    botao.setAttribute("data-botao-lixeira", "apagar")
    let img = document.createElement("i")
    img.classList.add("fa-solid")
    img.classList.add("fa-trash")
    botao.append(img)
    div.append(categoria, botao)
    li.append(num, div)
    lista.append(li)
}
