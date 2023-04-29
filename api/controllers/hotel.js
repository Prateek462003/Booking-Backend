const HotelModel = require("../models/Hotel.js");

const createHotel = async(req, res, next)=>{
    const newHotel = new HotelModel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err)
    }    
}

const updateHotel = async(req, res, next)=>{
    try{
        const updatedHotel = await HotelModel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }     
}

const deleteHotel = async(req, res, next)=>{
    try{
        await HotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Has been deleted");
    }catch(err){
        next(err);
    }    
}

const getHotel = async(req, res, next)=>{
    try{
        const hotel = await HotelModel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }    
}

const getAllHotels = async(req, res, next)=>{
    try{
        const hotels = await HotelModel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }        
}

module.exports = {createHotel, updateHotel, deleteHotel, getHotel, getAllHotels}
