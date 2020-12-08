"use strict";
exports.__esModule = true;
var Carrinho_1 = require("./Carrinho");
var Cliente_1 = require("./Cliente");
var Compra_1 = require("./Compra");
var Pedido_1 = require("./Pedido");
// produtos
var produto1;
var produto2;
var produto3;
// cliente
var endereco;
var cartao;
var cliente;
// pedido
var transportadora;
var carrinho;
var pedido;
var compra;
transportadora = {
    nome: 'LogBrasil'
};
//implementação dados
endereco = {
    rua: 'Rua 5',
    cep: 8765432,
    casa: 4,
    numero: 0
};
cartao = {
    numeroCartao: 9876543456
};
// implementação produtos
produto1 = {
    nome: 'abacaxi',
    preco: 4
};
produto2 = {
    nome: 'banana',
    preco: 2
};
produto3 = {
    nome: 'melancia',
    preco: 10
};
//implementação pedido 
carrinho = new Carrinho_1.Carrinho();
carrinho.addProduto(produto1);
carrinho.addProduto(produto2);
carrinho.addProduto(produto3);
//implementação cliente
cliente = new Cliente_1.Cliente("João Gomes Almeida", carrinho, endereco, cartao);
pedido = new Pedido_1.Pedido(17561921, "07/12/2020", true, 0.08, cliente, carrinho.produtos, carrinho.valorTotal, endereco);
//implementação da compra
compra = new Compra_1.Compra(pedido, true, cartao.numeroCartao);
if (compra.compraCredito)
    compra.compraCredito;
console.log(compra.valor);
console.log(compra.tipoCompra);
