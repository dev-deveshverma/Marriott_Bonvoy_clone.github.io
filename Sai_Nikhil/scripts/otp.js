function verifyotp(){
    var value=document.getElementById("number").value;
    if(value==123456){
        alert("Verifying OTP");
        setTimeout(()=>{
            window.location.href="confirmation.html";
        })
    }else{
        alert("Invalid OTP");
    }
}