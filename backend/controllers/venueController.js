const Venue = require('../models/venue');

// Add a new venue
const add = async (req, res) => {
    try {
        const newVenue = new Venue(req.body);
        await newVenue.save();
        res.status(201).json(newVenue);
    } catch
    (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Get all venues
const get_all = async (req, res) => {
    try {
        const venues = await Venue.find();
        res.json(venues);
    } catch (err) {
        res.status(500).json({
            error:
                err.message
        });
    }
}

// Get a specific venue
const get_by_id = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.id);
        if (!venue) {
            return res.status(404).json({ error: 'Venue not found' });
        }
        res.json(venue);
    } catch
    (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a venue
const update = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!venue) {
            return res.status(404).json({
                error: 'Venue not found'
            });
        }
        res.json(venue);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Delete a venue
const delete_by_id = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndDelete(req.params.id);
        if (!venue) {
            return res.status(404).json({
                error: 'Venue not found'
            });
        }
        res.json({
            message: 'Venue deleted'
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