var login=true;    
loggedIn=(login)=>{
if(login==true){
    otp();
}
else{
    alert("Please login to continue");
}
}
function otp(){
  setTimeout(()=>{
      window.location.href="otp.html";
  },3000);
}
let hoteladdress=document.getElementById("address2")
address2.textContent="working";
let hotelname=document.getElementById("hotelname");
hotelname.textContent="Hotel Name"
let phone1=document.getElementById("phone1");
phone1.textContent="153484";
let roomimg=document.getElementById("roomimg");
roomimg.src="https://cache.marriott.com/marriottassets/marriott/MAACY/maacy-king-0039-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=780:*";
let aboutroom=document.getElementById("aboutroom");
aboutroom.textContent="1 King Bed, Guest Room"
let checkin=document.getElementById("checkin");
checkin.textContent="Check-in: today";
let checkout=document.getElementById("checkout");
checkout.textContent="Check-out: tommorow"
let countrooms=document.getElementById("countrooms");
countrooms.textContent="Rooms: 1";
let totalguests=document.getElementById("totalguests");
totalguests.textContent="Guests: 1"

const startingMinutes=15;
let time= startingMinutes*60;
const countdown=document.getElementById("countdown");
setInterval(updateCountdown,1000);
function updateCountdown(){
    const minutes =Math.floor(time/60);
    let seconds=time%60;
    seconds=seconds<10 ? '0' +seconds :seconds;
    countdown.innerHTML=`${minutes}:${seconds}`
    time--;
}
let proceedpay=document.getElementById("proceedpay");
proceedpay.textContent="0000INR"