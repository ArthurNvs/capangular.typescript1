"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(numero, data, tarifa, imposto, cliente, produtos, valor, endereco) {
        this.produtos = [];
        this.valor = 0;
        this.numero = numero;
        this.data = data;
        this.tarifa = tarifa;
        this.imposto = imposto;
        this.cliente = cliente;
        this.produtos = produtos;
        this.valor = valor;
        this.endereco = endereco;
    }
    return Pedido;
}());
exports.Pedido = Pedido;
