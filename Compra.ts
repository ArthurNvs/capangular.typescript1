import { Cartao } from "./Cartao";
import { Pedido } from "./Pedido";

export class Compra {
    pedido: Pedido;
    pagamentoCredito: boolean;
    cartao: Cartao;
    numeroCartao: number;

    imposto = 0.08;
    valor = 0;

    constructor(compra: ICompra) {
        this.pedido = compra.pedido;
        this.pagamentoCredito = compra.pagamentoCredito;
        this.numeroCartao = compra.numeroCartao;

        if (compra.pagamentoCredito){
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
}

export interface ICompra {
    pedido: Pedido,
    pagamentoCredito: boolean,
    cartao: Cartao,
    numeroCartao: number,
    imposto: number,
    valor: number
}