import { api } from "./api.js";

const lista = document.querySelector('[data-lista]');

export default function constuirProduto(id, nome, preco, imagem){
    
    const produto = document.createElement('il');
    produto.className = "produtos_item";
    produto.id = id
    produto.innerHTML =`
    <img class="produto_img" src="${imagem}" alt="${nome}">
    <p class="produto_nome">${nome}</p>
    <div class="produto_div">
        <h3 class="produto_preco">$ ${preco}</h3>
        <button class="produto_excluir" type="button">
            <img class="produto_excluir" src="./img/excluir.svg" alt="excluir">
        </button>
    </div>`

    return produto;
}

async function listaProduto() {
    try{
        const listaApi = await api.mostarProdutos();
        listaApi.forEach(elemento => lista.appendChild(
           constuirProduto(elemento.id, elemento.nome, elemento.preco, elemento.imagem)));
    } catch {
        lista.innerHTML = '<h2 class="titulo">Não é possível carregar os produtos.</h2>'
    }
}

listaProduto()
