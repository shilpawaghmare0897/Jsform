var nameerror= document.getElementById('Name_error');
var emailerror= document.getElementById('Email_error');
var phoneerror= document.getElementById('Phone_error');

function validateName(){
    var name=document.getElementById('name').value;

    if(name.length == 0){
        nameerror.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='Name must contain minimum two words';
        return false;
    }

    nameerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}


function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailerror.innerHTML='Email is required.';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='Invalid Email.';
        return false;
    }
    emailerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

    
    
}


function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneerror.innerHTML='Phone no is required.';
        return false;
    }
    if(phone.length !== 10){
        phoneerror.innerHTML='Phone no should be 10 digits.';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML='Only digits Please.';
        return false;
    }
    phoneerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}

