const form = document.querySelector('form');

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const idcodeInput = document.querySelector('#idcode');

const usernameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const idcodeError = document.querySelector('#idcodeError');


const regexObj = {
    usernameRe: /^\w{3,20}$/,
    emailRe: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
    idcodeRe: /^[1-8]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{4}$/,
}

function showError(errorElement, message) {
    errorElement.innerText = message;
}

function clearError(errorElement) {
    errorElement.innerText = '';
}

function validateUsername() {
    const value = usernameInput.value.trim();

    if (value === '') {
        showError(usernameError, 'Username is required!');
        return false;
    }

    if (value.length < 3 || value.length > 20) {
        showError(usernameError, 'Username must be from 3 to 20 characters long.');
        return false;
    }

    if (!regexObj.usernameRe.test(value)) {
        showError(usernameError, 'Only A-Za-z0-9_ symbols are alowed.');
        return false;
    }


    clearError(usernameError);
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();

    if (value === '') {
        showError(emailError, 'Must enter email');
        return false;
    }

    if (!regexObj.emailRe.test(value)) {
        showError(emailError, 'Email is not valid.');
        return false;
    }

    clearError(emailError);
    return true;
}

function validateIdCode() {

    const value = idcodeInput.value.trim();

    const chk1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const chk2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

    function validate(weight) {
        let result = 0;
        for (let i = 0; i < 10; i++) {
            result += Number(value[i]) * weight[i];
        }
        return result % 11;
    }

    if (value === '') {
        showError(idcodeError, 'Must enter isikukood.');
        return false;
    }

    if (!regexObj.idcodeRe.test(value)) {
        showError(idcodeError, 'Id code has illegal characters.');
        return false;
    }

    if (validate(chk1) === 10) {
        if (validate(chk2) !== Number(value[10])) {
            showError(idcodeError, 'Id code is not valid.2');
            return false;
        }
    } else if (validate(chk1) !== Number(value[10])) {
        showError(idcodeError, 'Id code is not valid.1');
        return false;
    }

    clearError(idcodeError);
    return true;
}


form.addEventListener('submit', event => {
    event.preventDefault();
    
    const usernameOk = validateUsername();
    const emailOk = validateEmail();
    const idcodeOk = validateIdCode();

    if (usernameOk && emailOk && idcodeOk) {
        form.submit();
    }
})