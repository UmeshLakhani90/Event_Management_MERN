const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
require("dotenv").config();
const secretKey = process.env.JWT_SECRET || 5000;

// Middleware to authenticate and extract actions
const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Typically sent as "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Store decoded payload (including actions) in request object
        next();
    } catch (err) {
        return res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = {
    authenticate
}