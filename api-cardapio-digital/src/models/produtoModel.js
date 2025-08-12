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

module.exports = {readProdutos, writeProdutos}