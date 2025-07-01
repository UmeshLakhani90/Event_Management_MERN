const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, enum: ['attendee', 'organizer', 'admin'], default: 'attendee' }
});

UserSchema.set('timestamps', {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('User', UserSchema);