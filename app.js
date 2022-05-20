const form = document.querySelector('#form');
const usernameInput=document.querySelector('#Username');
const emailInput=document.querySelector('#Email');
const PasswordInput=document.querySelector('#Password');
const confirmPassword =document.querySelector('#Confirm_Password')


form.addEventListener('submit' , (event) => {
    event.preventDefault();

    validateform();

});

function validateform(){
    if(usernameInput.value.trim()==''){
        setError(usernameInput,'Name Required');
    }
    else{
        setSuccess(usernameInput);
    }
    //E-mail
    if(emailInput.value.trim()==''){
        setError(emailInput,'Email Required');
    }
     else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);

     }
    else{
        setError(emailInput,'Provide Valid Email');
       
    }
    //password
    if(PasswordInput.value.trim()==''){
        setError(PasswordInput,'Password Required');
    }
    // else if(CheckPassword(PasswordInput.value)){
    //     setSuccess(PasswordInput);
    // }
    else{
        //setError(PasswordInput,'7-15 characters which  must contain at least one numeric digit and a special character');
        setSuccess(PasswordInput);
    }

    //Confirm Password
    if(confirmPassword.value.trim()==''){
        setError(confirmPassword,'Required');
    } 
    else if(confirmPassword !== PasswordInput){
        setError(confirmPassword,'Password does not match');
    }
    else{
        
        setSuccess(confirmPassword);
    }
    
}

function setError(element,errorMessage){
    const parent=element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    parent.classList.add('error');
    const paragraph= parent.querySelector('p');
    paragraph.textContent = errorMessage;

}

function setSuccess(element){
    const parent=element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success');
}

function isEmailValid(email) 
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

//     function CheckPassword(pass) 
// { 
//     var passw=  /^[A-Za-z]\w{7,14}$/;
//     return passw.test(pass)

// }

    