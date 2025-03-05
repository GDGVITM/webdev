import express from "express";
import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    patchEvent,
    deleteEvent
} from "../controllers/event.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.patch("/:id", patchEvent);
router.delete("/:id", deleteEvent);

export default router;
