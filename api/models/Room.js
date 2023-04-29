const mongoose = require("mongoose");
const {Schema} = mongoose;

const roomSchema = new Schema({
    tittle:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:[{
        numbers:Number,
        unavailableDates:{type:[Date]}
    }]
    },
    {timestamps:true}
);

module.exports = mongoose.model("roomModel",roomSchema);