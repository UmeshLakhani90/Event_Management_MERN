const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

// Add a new user
const add = async (req, res) => {
    try {
        const newUser = new User(req.body);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newUser.password, salt);
        newUser.password = hashedPassword;

        await newUser.save();
        res.status(201).json(newUser);
    } catch
    (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Get all users
const get_all = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            error:
                err.message
        });
    }
}

// Get a specific user
const get_by_id = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch
    (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a user
const update = async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

// Delete a user
const delete_by_id = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        res.json({
            message: 'User deleted'
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