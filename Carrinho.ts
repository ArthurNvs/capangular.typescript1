import { Produto } from "./Produto";

export class Carrinho {
    produtos: Produto[] = [];
    valorTotal = 0;

    constructor(){}

    public addProduto(produto: Produto):void {
        this.produtos.concat(produto);
        this.valorTotal += produto.preco;
    }

}

export interface ICarrinho {
    produtos: Produto[],
    valorTotal: number
}