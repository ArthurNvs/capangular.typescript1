export class Endereco{
    rua: string;
    cep: number;
    casa: number;
    numero: number;

    constructor(rua: string, cep: number, casa: number, numero: number) {
        this.numero = numero;
        this.casa = casa;
        this.cep = cep;
        this.rua = rua;

    }
}