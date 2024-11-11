async function mostarProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarProduto(id, nome, preco, imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error('Não foi possível enviar seu produto!');
    }
    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletarProduto(id) {
    console.log(id)
    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE', // Método de exclusão
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);  // Exibe a mensagem de sucesso
        // Você pode remover o produto da interface, se necessário
        document.getElementById(id).remove();  // Supondo que o id do produto seja o mesmo no HTML
    })
}

async function pegarMaiorId() {
    try {
        const conexao = await fetch("http://localhost:3000/produtos");
        const conexaoConvertida = await conexao.json();

        if (conexaoConvertida.length === 0) {
            return 1;
        }

        const maiorId = Math.max(...conexaoConvertida.map(produto => produto.id));

        return maiorId + 1;

    } catch (erro) {
        alert.error("Erro ao acessar os produtos:", erro);
    }
}

export const api = {
    mostarProdutos, criarProduto, deletarProduto, pegarMaiorId
}

mostarProdutos()
