import { Carrinho } from "./Carrinho";
import { Cartao } from "./Cartao";
import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";

export class Pedido {

    numero: number;
    data: string;
    tarifa: boolean;
    imposto: number;
    valor: number;
    endereco: Endereco;

    cliente: Cliente;
    produtos: Produto[] = [];
    
    constructor(numero: number, 
                data: string, 
                tarifa: boolean, 
                imposto: number, 
                cliente: Cliente, 
                produtos: Produto[], 
                valor: number, 
                endereco: Endereco) {
        this.numero = numero;
        this.data = data;
        this.tarifa = tarifa;
        this.imposto = imposto;
        this.cliente = cliente;
        this.produtos = produtos;
        this.valor = valor;
        this.endereco = endereco;

    }

}