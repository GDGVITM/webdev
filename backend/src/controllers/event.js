import EventAct from "../model/crud.model.js";

export const createEvent = async (req, res) => {
    try {
        const event = new EventAct(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getEvents = async (req, res) => {
    try {
        const events = await EventAct.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getEventById = async (req, res) => {
    try {
        const event = await EventAct.findById(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateEvent = async (req, res) => {
    try {
        const event = await EventAct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const patchEvent = async (req, res) => {
    try {
        const event = await EventAct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const event = await EventAct.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
