import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";

export class Pedido {

    numero: number;
    data: string;
    tarifa: boolean;
    imposto: number;
    endereco: Endereco;

    cliente: Cliente;
    produtos: Produto[] = [];

    valor = 0;
    
    constructor(pedido: IPedido){
        this.numero = pedido.numero;
        this.data = pedido.data;
        this.tarifa = pedido.tarifa;
        this.imposto = pedido.imposto;
        this.cliente = pedido.cliente;
        this.produtos = pedido.produtos;
        this.valor = pedido.valor;
        this.endereco = pedido.endereco;
    }

}

export interface IPedido {
    numero: number, 
    data: string, 
    tarifa: boolean, 
    imposto: number, 
    cliente: Cliente, 
    produtos: Produto[], 
    valor: number, 
    endereco: Endereco
 } 
        
