"use strict";
exports.__esModule = true;
exports.Compra = void 0;
var Compra = /** @class */ (function () {
    function Compra(compra) {
        this.imposto = 0.08;
        this.valor = 0;
        this.pedido = compra.pedido;
        this.pagamentoCredito = compra.pagamentoCredito;
        this.numeroCartao = compra.numeroCartao;
        if (compra.pagamentoCredito) {
            var imposto = this.pedido.valor * this.pedido.imposto;
            this.valor = this.pedido.valor + imposto;
            if (this.pedido.tarifa) {
                var tarifa = this.valor * 0.15;
                this.valor += tarifa;
            }
        }
        else {
            this.valor = this.pedido.valor * this.pedido.imposto;
        }
    }
    return Compra;
}());
exports.Compra = Compra;
