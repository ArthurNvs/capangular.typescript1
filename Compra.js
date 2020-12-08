"use strict";
exports.__esModule = true;
exports.Compra = void 0;
var Compra = /** @class */ (function () {
    function Compra(pedido, pagamentoCredito, numeroCartao) {
        this.imposto = 0.08;
        this.valor = 0;
        this.tipoCompra = "tipo indefinido";
        this.pedido = pedido;
        this.pagamentoCredito = pagamentoCredito;
        this.numeroCartao = numeroCartao;
    }
    Compra.prototype.compraCredito = function () {
        this.numeroCartao = this.cartao.numeroCartao;
        this.valor = this.pedido.valor * this.pedido.imposto;
        this.tipoCompra = "crédito";
    };
    Compra.prototype.compraBoleto = function () {
        this.valor = this.pedido.valor * this.pedido.imposto;
        this.tipoCompra = "boleto";
    };
    return Compra;
}());
exports.Compra = Compra;
