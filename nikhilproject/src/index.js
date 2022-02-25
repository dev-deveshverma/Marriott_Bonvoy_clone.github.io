const express= require("express");
const connect=require("./config/db")
require("dotenv").config();
const hotelController=require("./controller/hotel.controller");
app=express();
app.use(express.json());
app.use("/findhotels",hotelController);
app.listen(process.env.PORT || 5000,async ()=>{
    try{
        await connect();
        console.log("listening to port 2345")
    }
    catch(e){
        console.log(e.message);
    }
    
})