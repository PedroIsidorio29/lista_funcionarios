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
    if (validator.valid) setFuncionarioList(validator);
});

function setFuncionarioList(valid) {
    const inputsArray = [...form.getElementsByTagName('input')];

    const funcionario = { nome, idade, cargo }

    inputsArray.forEach((i) => {
        console.log(i.name)
        console.log(i.value)
    })
    // if (valid.isGerente)
    //     console.log('asda')
    // const asd = new Gerente()
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