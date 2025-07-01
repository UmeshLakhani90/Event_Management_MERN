const Ticket = require('../models/ticket');

// Add a new ticket
const add = async (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch
    (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Get all tickets
const get_all = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({
            error:
                err.message
        });
    }
}

// Get a specific ticket
const get_by_id = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.json(ticket);
    } catch
    (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a ticket
const update = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ticket) {
            return res.status(404).json({
                error: 'Ticket not found'
            });
        }
        res.json(ticket);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Delete a ticket
const delete_by_id = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).json({
                error: 'Ticket not found'
            });
        }
        res.json({
            message: 'Ticket deleted'
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