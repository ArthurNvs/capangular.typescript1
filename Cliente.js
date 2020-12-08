"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(cliente) {
        this.nomeCompleto = cliente.nomeCompleto;
        this.carrinho = cliente.carrinho;
        this.endereco = cliente.endereco;
        this.cartao = cliente.cartao;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
