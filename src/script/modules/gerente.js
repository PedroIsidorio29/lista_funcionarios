import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario{
    departamento;

    constructor(_departamento,_nome, _idade, _cargo){
        super(_nome, _idade, _cargo)
        this.departamento=_departamento
    }

    gerenciar(){
        
    }
}