const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");
const form = document.querySelector(".form");


form.addEventListener("submit", (event)=> {
    event.preventDefault();
    checkEmpty([username, email, password, confirmPassword]);
    checkEmail(email);
    checkPasswordLength(password,8);
    checkPasswordLength(confirmPassword,8);
    checkPasswordSimilarity(confirmPassword);
})





const showError = (input, message) => {
    let parentElement = input.parentElement;
    parentElement.classList.remove("success");
    parentElement.classList.add("error");
    const small = parentElement.querySelector(".error-container small");
    const iconSuccess = parentElement.querySelector(".fa-check");
    const iconError = parentElement.querySelector(".fa-close");
    iconError.style.visibility = "visible";
    iconSuccess.style.visibility = "hidden";
    small.style.display = "inline"
    small.innerText = message;

    parentElement.style.marginTop = "3px"; 
    const btn = document.querySelector(".btn");
    btn.style.marginTop = "3px";
}
const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList.remove("error");
    parentElement.classList.add("success");
    const iconSuccess = parentElement.querySelector(".fa-check");
    const iconError = parentElement.querySelector(".fa-close");
    iconError.style.visibility = "hidden";
    iconSuccess.style.visibility = "visible";

    const small = parentElement.querySelector(".error-container small");
    small.style.display = "none";
    parentElement.style.margin = "20px 0 20px"
}



const checkEmpty = (elements) => {
    elements.forEach( (element) => {
        if(element.value === '') {
            
            showError(element, "Input is must");
        }
        else {
            
            showSuccess(element)
        }
    });
}

const checkEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(email.value)){
        showSuccess(email);
    }
    else {
        showError(email, "Invalid Email");
    }
}

const checkPasswordLength = (input, min) => {
    if(input.value.length < min){
        showError(input, `Password must be atleast ${min} characters`)
    }
    else {
        showSuccess(input)
    }
}

const checkPasswordSimilarity = (input) => {
    if(confirmPassword.value !== password.value){
        showError(input, `Password must be simillar`);
    }
}


