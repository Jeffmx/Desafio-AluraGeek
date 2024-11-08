import { api } from "./api";

const lista = document.querySelector('[data-lista]');

export default function constuirProduto(nome, preco, imagem){
    const produto = document.createElement('il');
    produto.className = "produtos_item";
    produto.innerHTML =`
    <img class="produto_img" src="${imagem}" alt="${nome}">
    <p class="produto_nome">${nome}</p>
    <div class="produto_div">
        <h3 class="produto_preco">$ ${preco}</h3>
        <img class="produto_excluir" src="./img/excluir.svg" alt="excluir">
    </div>`

    return produto;
}

async function listaProduto() {
    try{

        const listaApi = await api.listaProduto();
        listaApi.forEach(element => lista.appendChild(
           constuirProduto(element.nome, element.preco, element.imagem)));
    } catch {
        lista.innerHTML = '<h2 class="titulo">Não é possível carregar os produtos.</h2>'
    }
}

listaProduto()
