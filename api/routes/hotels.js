const router = require("express").Router();
const userModel = require("../models/Hotel.js");
const {createHotel, updateHotel, deleteHotel, getHotel, getAllHotels} = require("../controllers/hotel.js");
const {verifyAdmin} = require("../utils/verification.js");


router.put("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// READ
router.get("/:id", getHotel);
// READ ALL
router.get("/", getAllHotels);


module.exports = router;            
