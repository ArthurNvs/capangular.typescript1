import { Cartao } from "./Cartao";
import { Pedido } from "./Pedido";

export class Compra {
    pedido: Pedido;
    pagamentoCredito: boolean;
    cartao: Cartao;
    numeroCartao: number;
    
    imposto = 0.08;
    valor = 0;
    tipoCompra = "tipo indefinido";

    constructor(pedido: Pedido, pagamentoCredito: boolean, numeroCartao: number) {
        this.pedido = pedido;
        this.pagamentoCredito = pagamentoCredito;
        this.numeroCartao = numeroCartao;
    }

    compraCredito():void {
        this.numeroCartao = this.cartao.numeroCartao;
        this.valor = this.pedido.valor * this.pedido.imposto;
        this.tipoCompra = "crédito";
    }

    compraBoleto():void {
        this.valor = this.pedido.valor * this.pedido.imposto;
        this.tipoCompra = "boleto";
    }
}