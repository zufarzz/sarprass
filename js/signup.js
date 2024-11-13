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

eyeoff.onclick = function(){
    if(password2.type == "password"){
        password2.type = "text";
        eyeoff.src = "img/eye-on.svg";
    }else{
        password2.type = "password"
        eyeoff.src = "img/eye-off.svg";
    }
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

   if (usernameValue === '') {
    setError(username, 'Nama Anda harus diisi');
} else if (usernameValue.length < 4) {
    setError(username, 'Minimal username adalah 4 karakter.');
} else {
    setSuccess(username);
}


    if(emailValue === '') {
        setError(email, 'Email Anda harus diisi');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Alamat Email harus valid');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Kata Sandi Anda harus diisi');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Minimal kata sandi adalah 8 karakter.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Konfirmasi Kata Sandi');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Kata sandi tidak ditemukan!");
    } else {
        setSuccess(password2);
    }

};
