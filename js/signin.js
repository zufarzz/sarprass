let eyeicon = document.getElementById("eyeicon");
let eyeoff = document.getElementById("eyeoff");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "img/eye-on.svg";
    }else{
        password.type = "password"
        eyeicon.src = "img/eye-off.svg";
    }
}


const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    

    if(emailValue === '') {
        setError(email, 'Anda belum mengisi nama!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Alamat Email harus valid');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Anda belum mengisi NISN/NIP');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Minimal kata sandi adalah 8 karakter.')
    } else {
        setSuccess(password);
    }

};
