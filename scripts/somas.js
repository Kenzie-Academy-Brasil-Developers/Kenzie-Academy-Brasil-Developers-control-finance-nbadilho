

function mudarParaString(num) {
    let string =num.toFixed(2)
    let modificada = string.replace(".", ",")
    return modificada

}


function mudarParaNum(item) {
    let modificada = item.replace(",", ".")
    let num = Number(modificada)
    return num
}


function somar(valor) {
    soma.innerText = ""
    soma.innerText = `R$${mudarParaString(valor)}`
}
