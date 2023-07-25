const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const error = document.getElementById("error");
const form = document.getElementById("myform");

form.addEventListener('submit', (e) =>{
    let message =[]
    if(password.value !== confirmPassword.value){
        message.push('password do not match');
    }
    if(message.length > 0){
        e.preventDefault()
        error.innerText =message.join(', ');
    }
})

