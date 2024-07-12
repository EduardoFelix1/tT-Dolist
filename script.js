
const caixa_texto = document.querySelector("#caixa_texto")
const botao = document.querySelector("#botao")
const lista_resultado = document.querySelector("#lista_resultado")


botao.addEventListener("click", (evento) =>{
    evento.preventDefault()
    if(caixa_texto.value === ""){
        alert("Prencha o campo")
    }
    const novo_elemento = document.createElement("li")
    const input = document.createElement("input")
    input.type = "checkbox"
    const label = document.createElement("label")
    const btn = document.createElement("button")

    novo_elemento.appendChild(input)
    novo_elemento.appendChild(label)
    novo_elemento.appendChild(btn)
    
    label.textContent = caixa_texto.value 
    btn.textContent = "excluir"
    btn.addEventListener("click", () =>{
        novo_elemento.remove()
    })


    lista_resultado.appendChild(novo_elemento)
    caixa_texto.value = ""
   caixa_texto.focus()
    
})


