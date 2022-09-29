
function somar(valor) {
    soma.innerText = ""
    soma.innerText = `R$${mudarValor(valor)}`
}

function mudarValor(num) {
    let string = num.toString()
    let modificada = string.replace(".", ",")
    return modificada

}

function mudarSoma(item) {
    let modificada = item.replace(",", ".")
    let num = Number(modificada)
    return num
}
