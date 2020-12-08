import { Cartao } from "./Cartao";
import { Pedido } from "./Pedido";

export class Compra {
    pedido: Pedido;
    pagamentoCredito: boolean;
    cartao: Cartao;
    numeroCartao: number;

    imposto = 0.08;
    valor = 0;

    constructor(pedido: Pedido, pagamentoCredito: boolean, numeroCartao: number) {
        this.pedido = pedido;
        this.pagamentoCredito = pagamentoCredito;
        this.numeroCartao = numeroCartao;

        if (pagamentoCredito){
            let imposto = this.pedido.valor * this.pedido.imposto;
            this.valor = this.pedido.valor + imposto;

            if (this.pedido.tarifa) {
                let tarifa = this.valor * 0.15;
                this.valor += tarifa;
            }

        } else {
            this.valor = this.pedido.valor * this.pedido.imposto;
        }
    }

    // compraCredito():void {
    //     this.numeroCartao = this.cartao.numeroCartao;
    //     this.valor += this.pedido.valor * this.pedido.imposto;

    //     if (this.pedido.tarifa) {
    //         let tarifa = this.valor * 0.15;
    //         this.valor += tarifa;
    //     }
    // }

    // compraBoleto():void {
    //     this.valor = this.pedido.valor * this.pedido.imposto;
    // }
}