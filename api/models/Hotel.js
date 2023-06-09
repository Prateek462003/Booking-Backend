const mongoose = require("mongoose");
const {Schema} = mongoose;

const HotelSchema = new Schema({
    name:{
        type:String,
        required:true
    },
   
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    tittle:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("HotelModel",HotelSchema);