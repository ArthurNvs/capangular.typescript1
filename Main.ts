import { Carrinho } from "./Carrinho";
import { Cartao } from "./Cartao";
import { Cliente } from "./Cliente";
import { Compra } from "./Compra";
import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";
import { Transportadora } from "./Transportadora";

// produtos
var produto1: Produto;
var produto2: Produto;
var produto3: Produto;

// cliente
var endereco: Endereco;
var cartao: Cartao;
var cliente: Cliente;

// pedido
var transportadora: Transportadora;
var carrinho: Carrinho;
var pedido: Pedido;
var compra: Compra;

transportadora = {
    nome: 'LogBrasil'
}

//implementação dados
endereco = {
    rua: 'Rua 5',
    cep: 8765432,
    casa: 4,
    numero: 0

}

cartao = {
    numeroCartao: 9876543456
}

// implementação produtos
produto1 = {
    nome: 'abacaxi',
    preco: 4
}

produto2 = {
    nome: 'banana',
    preco: 2
}

produto3 = {
    nome: 'melancia',
    preco: 10
}

//implementação pedido 
carrinho = new Carrinho();
carrinho.addProduto(produto1);
carrinho.addProduto(produto2);
carrinho.addProduto(produto3);

//implementação cliente
cliente = new Cliente("João Gomes Almeida", carrinho, endereco, cartao);

pedido = new Pedido(17561921, "07/12/2020", true, 0.08, cliente, carrinho.produtos, carrinho.valorTotal, endereco);

//implementação da compra
compra = new Compra(pedido, true, cartao.numeroCartao);

if(compra.compraCredito)
    compra.compraCredito;

console.log(compra.valor);
console.log(compra.tipoCompra);