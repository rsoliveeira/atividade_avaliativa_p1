const {readProdutos, createProduto} = require('../models/produtoModel');

const listarProdutos = (req, res) => {	
    try {
        const produtos = readProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar produtos', error: error.message });
    }
}

const criarProduto = (req, res) => {
    const {nome, descricao, preco, categoria, tipo, tamanho, disponibilidade, ingredientes, preparo, alergenicos, preparoDetalhado, imagem} = req.body || {};
    if (!nome || !descricao || !preco || !categoria || !tipo || !tamanho || !disponibilidade || !ingredientes || !preparo || !alergenicos || !preparoDetalhado) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    if( typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({ message: 'Preço inválido.' });
    }
    const produtos = createProduto(nome, descricao, preco, categoria, tipo, tamanho, disponibilidade, ingredientes, preparo, alergenicos, preparoDetalhado, imagem);
    if (!produtos) {
        return res.status(500).json({ message: 'Erro ao criar produto.' });
    }
   return res.status(201).json(produtos);
}

module.exports = {
    listarProdutos,
    criarProduto
};