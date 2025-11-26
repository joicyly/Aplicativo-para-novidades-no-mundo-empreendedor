// troca de telas estilo app
document.querySelectorAll("[tela]").forEach(btn=>{
    btn.onclick=()=>{
        document.querySelectorAll(".tela").forEach(t=>t.classList.remove("ativa"))
        document.getElementById(btn.getAttribute("tela")).classList.add("ativa")
    }
})

// quiz simples
const perguntas = [
    {p:"Para ser MEI é obrigatório CNPJ?", o:["Não","Sim"], c:1}
]
let i=0, pontos=0

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const confirmar = document.getElementById("confirmar")
const pontosEl = document.getElementById("pontos")

function render(){
    pergunta.innerHTML=`<h3>${perguntas[i].p}</h3>`
    opcoes.innerHTML=""
    perguntas[i].o.forEach((txt,index)=>{
        let b=document.createElement("button")
        b.innerText=txt
        b.onclick=()=>opcoes.querySelectorAll("button").forEach(x=>x.style.background="" , b.style.background="#90caf9", b.dataset.sel=index)
        opcoes.appendChild(b)
    })
}
render()

confirmar.onclick=()=>{
    let s = opcoes.querySelector("button[data-sel]")
    if(!s) return alert("Escolha uma alternativa")
    if(Number(s.dataset.sel)===perguntas[i].c){
        pontos+=10
        pontosEl.textContent=pontos
    }
    alert("Pergunta respondida!")
}
function abrirPDF(){
    window.open("material.pdf", "_blank"); // abre PDF em nova aba
}

