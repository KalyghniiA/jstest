const firstInput = document.querySelector("#first-value-input");
const secondInput = document.querySelector("#second-value-input");
const operation = document.querySelector(".calc-form__check-operation-span")
const result = document.querySelector(".input__result");


const checkValidText = function () {
    if (isNaN(this.value)) {
        this.classList.add('input__invalid');
        this.nextElementSibling.textContent = 'Введите число';
        this.nextElementSibling.classList.remove('calc-form__input-modal--hidden');
    } else {
        this.classList.remove('input__invalid');
        this.nextElementSibling.textContent = '';
        this.nextElementSibling.classList.add('calc-form__input-modal--hidden');
    }
}

const generateTextToOperation = (e) => {
    operation.textContent = e.target.textContent;
}

const generateResult = (e) => {
    e.preventDefault()
    if (!isNaN(firstInput.value) && !isNaN(secondInput.value) && operation.textContent !== '') {
        switch (operation.textContent) {
            case "+":
                result.value = Number(firstInput.value) + Number(secondInput.value);
                break;
            case "-":
                result.value = Number(firstInput.value) - Number(secondInput.value);
                break;
            case "*":
                result.value = Number(firstInput.value) * Number(secondInput.value);
                break;
            case "/":
                result.value = Number(firstInput.value) / Number(secondInput.value);
                break;
            default:
                console.log("Неизвестная операция");
        }
    }
}

firstInput.addEventListener("keyup", checkValidText);
secondInput.addEventListener("keyup", checkValidText);
document.addEventListener("keyup", (e) => {
    if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
        operation.textContent = e.key;
    }
})
