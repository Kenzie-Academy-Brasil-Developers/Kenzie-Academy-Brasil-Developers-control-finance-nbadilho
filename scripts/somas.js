let soma = document.querySelector(".soma_total")

function mudarParaString(num) {
    let string = num.toFixed(2)
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
    if (valor == 0) {
        return soma.innerText = `R$${mudarParaString(valor)}`
    } else {
        soma.innerText = `R$${mudarParaString(valor.reduce((b, a) => a + b))}`
    }

}
