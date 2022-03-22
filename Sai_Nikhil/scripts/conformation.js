let random=document.getElementById("orderId");
let value=Math.ceil((Math.random()*6)*10000);
random.textContent=`OrderId:${value}`;