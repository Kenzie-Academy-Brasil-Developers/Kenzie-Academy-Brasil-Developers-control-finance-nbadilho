/* Desenvolva sua lógica aqui */
let modal=document.querySelector(".modal")


let registrar=document.querySelector("[data-botao-registar")
registrar.addEventListener("click",function(){
    modal.classList.toggle("hidden")
})

let sairECancelar=document.querySelectorAll("[data-modal-button]")
let arraySair=[...sairECancelar]

arraySair.forEach(item=>item.addEventListener("click",function(){
    modal.classList.toggle("hidden")
}))