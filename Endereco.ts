export class Endereco{
    rua: string;
    cep: number;
    casa: number;
    numero: number;

    constructor(endereco: IEndereco) {
        this.numero = endereco.numero;
        this.casa = endereco.casa;
        this.cep = endereco.cep;
        this.rua = endereco.rua;

    }
}

export interface IEndereco {
    numero: number,
    casa: number,
    cep: number,
    rua: string
}