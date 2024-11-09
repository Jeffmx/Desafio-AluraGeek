import { api } from "./api.js";
const formulario= document.querySelector("[data-formulario]");

async function adicionarProduto(evento) {
    evento.preventDefault();
    
    const nome=   document.querySelector("[data-nome]").value;
    const preco=  document.querySelector("[data-preco]").value;
    const imagem= document.querySelector("[data-imagem]").value;

    alert('deu o carai')
    await api.criarProduto(nome, preco, imagem);
}

async function limparFormulario(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]");
    nome.innerHTML = "";
    const preco = document.querySelector("[data-preco]");
    preco.innerHTML = "";
    const imagem = document.querySelector("[data-imagem]");
    imagem.innerHTML = "";
}

formulario.addEventListener('submit', evento => adicionarProduto(evento));
formulario.addEventListener('reset' , evento => limparFormulario(evento));