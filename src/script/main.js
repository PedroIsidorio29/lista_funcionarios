import { Gerente } from "./modules/gerente.js";
import { Desenvolvedor } from "./modules/desenvolvedor.js";
import { Validation } from "./data/validacao.js";

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const toggle = document.querySelector('#foo');

submit.addEventListener('click', (e) => {
    const validator = new Validation(toggle.checked)
    e.preventDefault();
    validator.validate(form);
    if (validator.valid) 
    setFuncionarioList(validator);
});

function setFuncionarioList(valid) {
    const funcionario = {
        _nome: nome.value,
        _idade: idade.value,
        _cargo: cargo.value
    }

    const apresentarBtn = document.createElement('button')
    const apresentarTxt = document.createTextNode('Se Apresente')
    const trabalharBtn = document.createElement('button')
    const trabalharTxt = document.createTextNode('Trabalhar')
    const acaoClassBtn = document.createElement('button')
    const acaoClassTxt = document.createTextNode('Ação')

    apresentarBtn.appendChild(apresentarTxt)
    trabalharBtn.appendChild(trabalharTxt)
    acaoClassBtn.appendChild(acaoClassTxt)

    const table = document.getElementById("tabela");
    const newRow = table.insertRow()

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);


    if (valid.isGerente) {
        const gerente = new Gerente(departamento.value, { ...funcionario })

        trabalharBtn.addEventListener('click', () => window.alert(gerente.trabalhar()))
        apresentarBtn.addEventListener('click', () => window.alert(gerente.seApresentar()))
        acaoClassBtn.addEventListener('click', () => window.alert(gerente.gerenciar()))

        cell1.innerHTML = gerente.nome;
        cell2.innerHTML = gerente.idade;
        cell3.innerHTML = gerente.cargo;
        cell5.innerHTML = gerente.departamento;
        cell6.appendChild(apresentarBtn);
        cell6.appendChild(trabalharBtn);
        cell6.appendChild(acaoClassBtn);
    }
    else {
        const dev = new Desenvolvedor(linguagem.value, { ...funcionario })

        trabalharBtn.addEventListener('click', () => window.alert(dev.trabalhar()))
        apresentarBtn.addEventListener('click', () => window.alert(dev.seApresentar()))
        acaoClassBtn.addEventListener('click', () => window.alert(dev.programar()))

        cell1.innerHTML = dev.nome;
        cell2.innerHTML = dev.idade;
        cell3.innerHTML = dev.cargo;
        cell4.innerHTML = dev.linguagem;
        cell6.appendChild(apresentarBtn);
        cell6.appendChild(trabalharBtn);
        cell6.appendChild(acaoClassBtn);
    }

    const input = document.querySelectorAll('form input');
    input.forEach(i => i.value = '')
}

toggle.addEventListener('click', () => {
    const label = document.querySelector("#funcionario_label")
    const gerenteInput = document.querySelector("#gerente-input")
    const desenvolvedorInput = document.querySelector("#desenvolvedor-input")
    const departamento = document.getElementById("departamento")
    const linguagem = document.getElementById("linguagem")

    if (toggle.checked) {
        label.textContent = 'Gerente';
        gerenteInput.style.display = 'block'
        desenvolvedorInput.style.display = 'none'
        departamento.value = ''
        const dev = desenvolvedorInput.getElementsByTagName('p')
        if (dev.length)
            dev[0].remove()
    }
    else {
        label.textContent = 'Desenvolvedor';
        gerenteInput.style.display = 'none'
        desenvolvedorInput.style.display = 'block'
        linguagem.value = ''
        const gerente = gerenteInput.getElementsByTagName('p')
        if (gerente.length)
            gerente[0].remove()
    }
});