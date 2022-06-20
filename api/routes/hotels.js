import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js"
import Hotel from "../models/Hotel.js"
import {createError} from "../utils/error.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

//Create 
router.post("/", verifyAdmin, createHotel)

//Update
router.put("/:id", verifyAdmin, updateHotel)

//DELETE 
router.delete("/:id", verifyAdmin, deleteHotel)

//GET Method 
router.get("/find/:id", getHotel)

//GET All Method 
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)


export default router