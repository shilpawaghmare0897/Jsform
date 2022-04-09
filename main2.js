document.getElementById("result1").innerHTML=localStorage.getItem("data1");
document.getElementById("result2").innerHTML=localStorage.getItem("data2");


var val = Math.floor(1000 + Math.random() * 9000);  
console.log(val);
function validateOtp(){

    var num=document.getElementById('otp').value;
      

    if(num == val){
        alert("Matched");
        window.open("http://pixel6.co/");
    }
    else{
        alert("Enter valid OTP");
        window.open("http://pixel/");
    }
}
