let vazio = document.querySelector(".nenhum_item")
let categorias = document.querySelectorAll("[data-botao-resumo]")
let arrCategorias = [...categorias]


function montarVazio(tipo) {
    let titulo = document.querySelector(".titulo_vazio")
    if (tipo !== "Todos") {
        titulo.innerText = ""
        titulo.innerText = `Sem nenhum valor na categoria ${tipo}s`
    } else {
        titulo.innerText = ""
        titulo.innerText = `Nenhum valor cadastrado`
    }
    vazio.classList.add("appear")
}



arrCategorias.forEach(item => item.addEventListener("click", function () {
    let num = 0
    let tipo = item.getAttribute("data-botao-resumo")
    if (tipo == "Saída") {
        num = 1
    }
    let filtro = insertedValues.filter(obj => obj.categoryID == num)
    if (insertedValues.length == 0 || filtro.length == 0) {
        montarVazio(item.getAttribute("data-botao-resumo"))
    }

}))


