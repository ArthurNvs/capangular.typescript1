import { Carrinho } from "./Carrinho";
import { Cartao } from "./Cartao";
import { Endereco } from "./Endereco";

export class Cliente {
    nomeCompleto: string;
    carrinho: Carrinho;
    endereco: Endereco;
    cartao: Cartao;
    
    constructor(cliente: ICliente) {
        this.nomeCompleto = cliente.nomeCompleto; 
        this.carrinho = cliente.carrinho;
        this.endereco = cliente.endereco;
        this.cartao = cliente.cartao;
    }

}

export interface ICliente {
    nomeCompleto: string,
    carrinho: Carrinho,
    endereco: Endereco,
    cartao: Cartao
}