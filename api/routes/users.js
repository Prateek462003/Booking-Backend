const router = require("express").Router();
// const UserModel = require("../models/User.js");
const {updateUser, deleteUser, getUser, getAllUsers} = require("../controllers/user.js");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verification.js");


router.put("/:id",verifyUser, updateUser);
// DELETE
router.delete("/:id",verifyUser, deleteUser);
// READ
router.get("/:id",verifyUser, getUser);
// READ ALL
router.get("/",verifyAdmin, getAllUsers);


module.exports = router;            