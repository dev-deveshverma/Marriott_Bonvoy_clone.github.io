const express=require("express");
const Hotel=require("../model/hotel.model");
const router=express.Router();




router.get("",async (req,res)=>{
    try{
       console.log("yes")
      const hotels= await Hotel.find().lean().exec(); //data --->for creating page
       return  res.send(hotels);
    }
    catch(e){
       return res.send(e.message)
    }
  
});

router.post("",async (req,res)=>{
    try{
      const hotel= await Hotel.create(req.body);
       return  res.send(hotel);
    }
    catch(e){
       return res.send(e.message)
    }
  
});

router.get("/:place",async (req,res)=>{ //hoteldetails/city   `url${placename}`
    try{
        const hotels= await Hotel.find({place_name:req.params.place}).limit(10).lean().exec();
       return  res.send(hotels);
    }
    catch(e){
       return res.send(e.message)
    }
  
});
module.exports=router;