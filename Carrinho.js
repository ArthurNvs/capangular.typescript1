"use strict";
exports.__esModule = true;
exports.Carrinho = void 0;
var Carrinho = /** @class */ (function () {
    function Carrinho() {
        this.produtos = [];
        this.valorTotal = 0;
    }
    Carrinho.prototype.addProduto = function (produto) {
        this.produtos.concat(produto);
        this.valorTotal += produto.preco;
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
