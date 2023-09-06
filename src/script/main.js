import { Gerente } from "./modules/gerente.js";
import { Desenvolvedor } from "./modules/desenvolvedor.js";
import { Validation } from "./data/validacao.js";

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const toggle = document.querySelector('#foo');
var validator;


submit.addEventListener('click', (e) => {
    validator = new Validation(toggle.checked)
    e.preventDefault();
    validator.validate(form);
    if (validator.valid) setFuncionarioList();
});

function setFuncionarioList() {
    const inputsArray = [...form.getElementsByTagName('input')];
    console.log(inputsArray)
    inputsArray.forEach((i) => console.log(i.name))
    const asd = new Gerente()
}

toggle.addEventListener('click', () => {
    const label = document.querySelector("#funcionario_label")
    const gerenteInput = document.querySelector("#gerente-input")
    const desenvolvedorInput = document.querySelector("#desenvolvedor-input")
    
    if (toggle.checked) {
        label.textContent = 'Gerente';
        gerenteInput.style.display = 'block'
        desenvolvedorInput.style.display = 'none'
    }
    else { 
        label.textContent = 'Desenvolvedor';
        gerenteInput.style.display = 'none'
        desenvolvedorInput.style.display = 'block'
     }


});