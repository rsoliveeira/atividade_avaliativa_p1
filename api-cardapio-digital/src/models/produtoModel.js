const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/produtos.json');

function readProdutos() {
    const produtos = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(produtos);
}

function writeProdutos(produtos) {
    fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2), 'utf8');
}

function createProduto(nome, descricao, preco, categoria, tipo, tamanho, disponibilidade, ingredientes, preparo, alergenicos, preparoDetalhado, imagem) {
    const produtos = readProdutos();
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        descricao,
        preco,
        categoria,
        tipo,
        tamanho,
        disponibilidade,
        ingredientes,
        preparo,
        alergenicos,
        preparoDetalhado,
        imagem
    };
    produtos.push(novoProduto);
    writeProdutos(produtos);
    return novoProduto;
}

module.exports = {readProdutos, writeProdutos, createProduto}