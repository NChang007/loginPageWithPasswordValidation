let pass = document.querySelector('#password')
let loBtn = document.querySelector()
pass.addEventListener('input', (e) => validate(e))

let passIsGood = false
let passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
function validate(e) {
    console.log(e.target.value);
    let passValue = e.target.value
    if (passValue.match(passVal)) {
        pass.style.border = '2px solid green'
        passIsGood = true
    }else if(passValue = ""){
        passIsGood = false
    }else {
        pass.style.border = '2px solid red'
        pass.style.focus.border = "2px solid red"
        passIsGood= false
    }
}

const login = () => {
    loBtn.classList.remove('deactivated')
}