// import { Gerente } from "./modules/gerente.js";
// import { Desenvolvedor } from "./modules/desenvolvedor.js";
import { Validation } from "./data/validacao.js";

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const toggle = document.getElementById("foo");

submit.addEventListener('click', function (e) {
    const validator = new Validation();
    e.preventDefault();
    validator.validate(form);

    console.log(validator.valid)
    setFuncionarioList()
});

function setFuncionarioList(){

    const inputsArray = [...form.getElementsByTagName('input')];
    console.log(inputsArray)
    inputsArray.forEach((i)=>console.log(i.name))
// const asd = new Gerente({})
}

toggle.addEventListener('click', function (e) {
console.log('aqui')
});