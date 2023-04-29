const router = require("express").Router();
const {verifyAdmin} = require("../utils/verification.js");
const {createRoom, updateRoom, deleteRoom, getRoom, getAllRooms} = require("../controllers/room.js");

router.put("/", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
// READ
router.get("/:id", getRoom);
// READ ALL
router.get("/", getAllRooms);



module.exports =  router;