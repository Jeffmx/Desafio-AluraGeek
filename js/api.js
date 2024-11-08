async function mostarProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(nome, preco, imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error('Não foi possível enviar seu produto!')
    }
    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const api = {
    mostarProdutos, criarProduto
}
