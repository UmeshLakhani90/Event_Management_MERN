const Organizer = require('../models/organizer');

// Add a new organizer
const add = async (req, res) => {
    try {
        const newOrganizer = new Organizer(req.body);
        await newOrganizer.save();
        res.status(201).json(newOrganizer);
    } catch
    (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Get all organizers
const get_all = async (req, res) => {
    try {
        const organizers = await Organizer.find();
        res.json(organizers);
    } catch (err) {
        res.status(500).json({
            error:
                err.message
        });
    }
}

// Get a specific organizer
const get_by_id = async (req, res) => {
    try {
        const organizer = await Organizer.findById(req.params.id);
        if (!organizer) {
            return res.status(404).json({ error: 'Organizer not found' });
        }
        res.json(organizer);
    } catch
    (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a organizer
const update = async (req, res) => {
    try {
        const organizer = await Organizer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!organizer) {
            return res.status(404).json({
                error: 'Organizer not found'
            });
        }
        res.json(organizer);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Delete a organizer
const delete_by_id = async (req, res) => {
    try {
        const organizer = await Organizer.findByIdAndDelete(req.params.id);
        if (!organizer) {
            return res.status(404).json({
                error: 'Organizer not found'
            });
        }
        res.json({
            message: 'Organizer deleted'
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