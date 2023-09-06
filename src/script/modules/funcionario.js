
export class Funcionario {
    nome;
    idade;
    cargo;

    constructor(_nome, _idade, _cargo) {
        this.nome = _nome
        this.idade = _idade
        this.cargo = _cargo
    };

    seApresentar() {
        return `Prazer em te conhecer me chamo ${this.nome} tenho ${this.idade} e irei trabalhar no cargo de ${this.cargo}.`
    };
    
    trabalhar() {
        return `Agora irei atuar nos meus afazeres de ${this.cargo}.`
    };
 }