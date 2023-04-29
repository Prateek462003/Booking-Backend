const userModel = require("../models/Auth.js");
const bcrypt = require("bcrypt");
const createError = require("../utils/error.js");
const jwt = require("jsonwebtoken");

const register = async(req, res, next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        await newUsr.save();
        res.status(200).send("Neew User Has been created");
    }catch(err){
        next(err);
    }
}

const login = async(req,res,next)=>{
    try{
        const user = await userModel.findOne({username:req.body.username});
        if(!user){
            return next(createError(404, "Invalid Login Details"));
        }
        else if(!bcrypt.compareSync(req.body.password, user.password)){
            return next(createError(404, "Invalid Login Details"));
        }
        else{
            const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT);
            const {password, isAdmin, ...other} = user._doc
            res.cookie("access_token", token, {
                httpOnly:true
            }).status(200).json(other);
        }
    }catch(err){
        // console.log(err);
        next(err);
    }
}

module.exports = {register, login};