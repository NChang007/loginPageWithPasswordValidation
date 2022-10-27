let pass = document.querySelector('#password')
let loBtn = document.querySelector('#submit')
console.log(loBtn);
pass.addEventListener('input', (e) => validate(e))

// this velidates that the password has lower, capital, nums, special characters and 
let passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

function validate(e) {
    console.log(e.target.value);

    let passValue = e.target.value

    if (passValue.match(passVal)) {
        pass.style.border = '2px solid green'
        loginBtn()
    }else {
        pass.style.border = '2px solid red'
    }
}

const loginBtn = () => {
    loBtn.setAttribute('href', '');
    console.log(loBtn);
}