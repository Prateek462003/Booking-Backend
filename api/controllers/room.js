const roomModel = require("../models/Room.js");
const hotelModel = require("../models/Hotel.js");

// create a room
const createRoom = async(req, res, )=>{
    const hotelId = req.params.hotelId;
    const newRoom = new roomModel(req.body);
    try{
        const savedRoom = await newRoom.save();
        try{
            await hotelModel.findByIdAndUpdate(hotelId, {$push:{rooms:savedRoom._id}});
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}

const updateRoom = async(req, res, next)=>{
    try{
        const updatedRoom = await roomModel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    }     
}

const deleteRoom = async(req, res, next)=>{
    try{
        await roomModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Has been deleted");
    }catch(err){
        next(err);
    }    
}

const getRoom = async(req, res, next)=>{
    try{
        const room = await roomModel.findById(req.params.id);
        res.status(200).json(room);
    }catch(err){
        // res.status(500)
        next(err);
    }    
}

const getAllRooms = async(req, res, next)=>{
    try{
        const rooms = await roomModel.find();
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    }        
}


module.exports = {createRoom, updateRoom, deleteRoom, getRoom, getAllRooms};