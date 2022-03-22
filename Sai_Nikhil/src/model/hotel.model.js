const mongoose= require("mongoose");
const hotelSchema=new mongoose.Schema({
    "place_name":{type:String,required:true},
      "hotel_address": {type:String,required:true},
      "price": {type:Number,required:true},
      "contact":{type:String,required:true},
      "hotel_name":{type:String,required:true}, 
      "main_image": {type:String,required:true},
      "brand_name": {type:String,required:true},
      "filter_name": {type:String,required:true},
      "room": [{type:String,required:true}],
})

module.exports=mongoose.model("hotel",hotelSchema);