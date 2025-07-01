const Event = require('../models/event');

// Add a new event
const add = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch
    (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Get all events
const get_all = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({
            error:
                err.message
        });
    }
}

// Get a specific event
const get_by_id = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    } catch
    (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a event
const update = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).json({
                error: 'Event not found'
            });
        }
        res.json(event);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Delete a event
const delete_by_id = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({
                error: 'Event not found'
            });
        }
        res.json({
            message: 'Event deleted'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    add,
    get_all,
    get_by_id,
    update,
    delete_by_id
}