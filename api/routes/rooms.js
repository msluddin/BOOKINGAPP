import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//Create 
router.post("/:hotelid", verifyAdmin, createRoom)

//Update
router.put("/:id", verifyAdmin, updateRoom)
router.put("/availability/:id", updateRoomAvailability)

//DELETE 
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

//GET Method 
router.get("/:id", getRoom)

//GET All Method 
router.get("/", getRooms)

export default router