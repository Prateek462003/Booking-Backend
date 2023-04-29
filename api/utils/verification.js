const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (req, res, next)=>{
    const token = req.cookie.access_token;
    if(!token){
        return next(createError("404", 'You are not Authenticated'));
    }
    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err){
            next(createError(500, "Invalid Token"));
        }
        req.user = user;
        next();
    });

} 

const verifyUser = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
            res.send("Hello User you are logged in");
        }else{
            next(createError(403, "You Are not Authorised"));
        }
    });
}


const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            next(createError(403, "You Are not Authorised"));
        }
    });
}


module.exports = {verifyToken, verifyUser, verifyAdmin}