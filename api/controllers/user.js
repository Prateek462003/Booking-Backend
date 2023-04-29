const userModel = require("../models/Auth.js");

const updateUser = async(req, res, next)=>{
    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
        res.status(200).json(updatedUser);
    }catch(err){
        // res.status(500)
        next(err);
    }     
}

const deleteUser = async(req, res, next)=>{
    try{
        const updatedUser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User Has been deleted");
    }catch(err){
        // res.status(500)
        next(err);
    }    
}

const getUser = async(req, res, next)=>{
    try{
        const user = await userModel.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
        // res.status(500)
    }    
}

const getAllUsers = async(req, res, next)=>{
    try{
        const users= await userModel.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
module.exports = {updateUser, deleteUser, getUser, getAllUsers}
