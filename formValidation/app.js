let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let form = document.querySelector("#form");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkMail(input){
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid");
    }
}


function checkInputLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} You Much Be At Least ${min} Characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} You Much Be less then ${max} Characters`);
    }else{
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Password Is Not Same");
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputLength(username, 3, 20);
    checkInputLength(password, 6, 30);
    checkMail(email);
    passwordMatch(password, confirmPassword);
});
