import { IPedido } from "./Pedido";

export class Produto {

    nome: string;
    preco: number;

    constructor(produto: IProduto){
        this.nome = produto.nome;
        this.preco = produto.preco;
    }

}

export interface IProduto {
    nome: string,
    preco: number
}