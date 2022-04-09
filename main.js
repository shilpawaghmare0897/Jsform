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


/*function validatePhone(){
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

    if(!phone.match(/^(()?\d{3}())?(-\s)?\d{3}(-\s)?\d{4}$/)){
        phoneerror.innerHTML='Invaild Format';
        return false;
        
    }
    phoneerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}*/

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)
    );
  };
  
  const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || (key === 8 || key === 9 || key === 13 || key === 46) || 
      (key > 36 && key < 41) ||
      (
        
        (event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
      )
  };
  
  const enforceFormat = (event) => {
    
    if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
    }
  };
  
  const formatToPhone = (event) => {
    if (isModifierKey(event)) {
      return;
    }
  
    
    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 10); 
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
  
    if (input.length > 6) {
      target.value = `(${zip})-${middle}-${last}`;
    } else if (input.length > 3) {
      target.value = `(${zip}) ${middle}`;
    } else if (input.length > 0) {
      target.value = `(${zip}`;
    }
  };
  
  const inputElement = document.getElementById('phone');
  inputElement.addEventListener('keydown', enforceFormat);
  inputElement.addEventListener('keyup', formatToPhone);


function handlesubmit()
{
  var name=document.getElementById('name').value;
  var phone=document.getElementById('phone').value;

  localStorage.setItem("data1", name);
  localStorage.setItem("data2", phone);
  return false;
}

  

