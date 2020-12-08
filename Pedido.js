"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(pedido) {
        this.produtos = [];
        this.valor = 0;
        this.numero = pedido.numero;
        this.data = pedido.data;
        this.tarifa = pedido.tarifa;
        this.imposto = pedido.imposto;
        this.cliente = pedido.cliente;
        this.produtos = pedido.produtos;
        this.valor = pedido.valor;
        this.endereco = pedido.endereco;
    }
    return Pedido;
}());
exports.Pedido = Pedido;
