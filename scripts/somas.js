
function somar(valor) {
    soma.innerText = ""
    soma.innerText = `R$${mudarValor(valor)}`
}

function mudarValor(num) {
    let string = num.toString()
    // if (string.contains(".") == false || string.contains(",") == false) {
    //     string +",00"
    // }
    let modificada = string.replace(".", ",")
    return modificada

}

function mudarSoma(item) {
    let modificada = item.replace(",", ".")
    let num = Number(modificada)
    return num
}
