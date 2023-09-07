import { Funcionario } from "./funcionario.js";

export class Desenvolvedor extends Funcionario {
    linguagem;

    constructor(_linguagem, { _nome, _idade, _cargo }) {
        super(_nome, _idade, _cargo)
        this.linguagem = _linguagem
    }

    programar() {
        return `Eu programo em ${this.linguagem}.`
    }
}
