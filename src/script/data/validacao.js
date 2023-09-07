const rex = /[a-zA-Z\u00C0-\u00FF ]+/i

export class Validation {
    valid;
    validations;

    constructor(_isGerente) {
        this.validations = [
            "data-required",
            "data-notNumber",
            "data-isNumber",
            "data-minValue",
            "data-maxValue",
        ];
        this.valid = true;
        this.isGerente = _isGerente
    }

    validate(form) {
        const validacoes_atuais = document.querySelectorAll('form .error-validation');
        if (validacoes_atuais.length) this.limpar_validations(validacoes_atuais)

        const inputsArray = [...form.getElementsByTagName('input')];

        inputsArray.forEach((input) => {
            this.validations.forEach((val) => {
                const attributeVal = input.getAttribute(val)

                if (attributeVal != null) {
                    const method = val.replace('data-', '')

                    if (input.name !== "departamento" && input.name !== "linguagem")
                        this[method](input, attributeVal)

                    if (input.name === "departamento" && this.isGerente)
                        this[method](input, attributeVal)

                    if (input.name === "linguagem" && !this.isGerente)
                        this[method](input, attributeVal)
                }
            })
        })
    }


    required(input) {
        if (input.value !== '') return
        this.setError(input, `Este campo é obrigatório`)
    }

    notNumber(input) {
        if (rex.test(input.value)) return
        this.setError(input, `Este campo não aceita números nem caracteres especiais`)
    }

    isNumber(input) {
        if (!rex.test(input.value)) return
        this.setError(input, `Este campo aceita somente números`)
    }

    minValue(input, qnt) {
        if (input.value >= qnt) return
        this.setError(input, `A idade deve ser no minimo de ${qnt}`)
    }

    maxValue(input, qnt) {
        if (input.value <= qnt) return
        this.setError(input, `A idade deve ser no maximo de ${qnt}, tá na hora de aposentar!`)
    }

    setError(input, msg) {
        const errosQty = input.parentNode.querySelector('.error-validation');
        if (errosQty === null) {
            const tamplate = document.querySelector('.error-validation').cloneNode(true);
            tamplate.textContent = msg;
            const inputParent = input.parentNode;
            tamplate.classList.remove('tamplate');
            inputParent.appendChild(tamplate);
            this.valid = false
        }
    }

    limpar_validations(validation) {
        validation.forEach(el => el.remove());
    }
}