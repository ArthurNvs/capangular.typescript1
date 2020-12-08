import { Carrinho } from "./Carrinho";
import { Cartao } from "./Cartao";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";

export class Cliente {
    nomeCompleto: string;
    carrinho: Carrinho;
    endereco: Endereco;
    cartao: Cartao;
    
    constructor(nomeCompleto: string, carrinho: Carrinho, endereco: Endereco, cartao: Cartao) {
        this.nomeCompleto = nomeCompleto; 
        this.carrinho = carrinho;
        this.endereco = endereco;
        this.cartao = cartao;
    }

}