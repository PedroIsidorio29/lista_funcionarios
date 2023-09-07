import { Funcionario } from "./funcionario.js";

export class Gerente extends Funcionario {
    departamento;

    constructor(_departamento, { _nome, _idade, _cargo }) {
        super(_nome, _idade, _cargo)
        this.departamento = _departamento
    }

    gerenciar() {
        return `Gerencio o departameto de ${this.departamento}`
    }
}