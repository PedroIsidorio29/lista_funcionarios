// import { Gerente } from "./modules/gerente.js";
// import { Desenvolvedor } from "./modules/desenvolvedor.js";
import { Validation } from "./data/validacao.js";

const form = document.getElementById("form");
const submit = document.getElementById("submit");

submit.addEventListener('click', function (e) {
    const validator = new Validation();
    e.preventDefault();
    validator.validate(form);
    
    console.log(validator.valid)
});