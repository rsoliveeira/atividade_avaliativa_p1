const {readProdutos, writeProdutos} = require('../models/produtoModel');

const listarProdutos = (req, res) => {	
    try {
        const produtos = readProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar produtos', error: error.message });
    }
}

const criarProduto = (req, res) => {
    try {
        const produtos = readProdutos();
        const novoProduto = req.body;
        
        // Validação simples
        if (!novoProduto.nome || !novoProduto.preco) {
            return res.status(400).json({ message: 'Nome e preço são obrigatórios' });
        }

        // Adiciona o novo produto
        produtos.push(novoProduto);
        writeProdutos(produtos);
        
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
    }
}

module.exports = {
    listarProdutos,
    criarProduto
};