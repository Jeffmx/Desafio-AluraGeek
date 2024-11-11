import { api } from "./api.js";
const formulario= document.querySelector("[data-formulario]");
const lixeira = document.querySelector("[data-lista]");

async function adicionarProduto(evento) {
    evento.preventDefault();
    
    const id= (await api.pegarMaiorId()).toString();
    const nome=   document.querySelector("[data-nome]").value;
    const preco=  document.querySelector("[data-preco]").value;
    const imagem= document.querySelector("[data-imagem]").value;
    if((nome==='') || (preco==='') || (imagem==='')){
        alert('Por Favor, preencha os campos devidamente.')
    } else {await api.criarProduto(id, nome, preco, imagem)};
}

async function limparFormulario(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]");
    nome.value = "";
    const preco = document.querySelector("[data-preco]");
    preco.value = "";
    const imagem = document.querySelector("[data-imagem]");
    imagem.value = "";
}

async function excluirProduto(evento) {
    evento.preventDefault();
    
    const produto = evento.target.closest("il");
    if (produto) {
        console.log(produto)
        api.deletarProduto(produto.id);
    }
}

formulario.addEventListener('submit', evento => adicionarProduto(evento));
formulario.addEventListener('reset' , evento => limparFormulario(evento));
lixeira.addEventListener('click', evento => 
    {if (evento.target.classList.contains('produto_excluir')) {excluirProduto(evento);}});
