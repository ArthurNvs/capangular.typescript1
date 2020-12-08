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
cliente = new Cliente_1.Cliente({
    nomeCompleto: "João Silva",
    carrinho: carrinho,
    endereco: endereco,
    cartao: cartao
});
pedido = new Pedido_1.Pedido({
    numero: 754274,
    data: "07/12/2020",
    tarifa: true,
    imposto: 0.08,
    cliente: cliente,
    produtos: carrinho.produtos,
    valor: carrinho.valorTotal,
    endereco: endereco
});
//implementação da compra
compra = new Compra_1.Compra({
    pedido: pedido,
    pagamentoCredito: true,
    cartao: cartao,
    numeroCartao: cartao.numeroCartao,
    imposto: pedido.imposto,
    valor: pedido.valor
});
console.log(compra.valor);
console.log(carrinho.valorTotal);
console.log(pedido.valor);
