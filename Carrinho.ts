import { Compra } from "./Compra";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class Carrinho {
    produtos: Produto[] = [];
    valorTotal: number;

    constructor(){}

    public addProduto(produto: Produto):void {
        this.produtos.concat(produto);
        this.valorTotal += produto.preco;
    }

}