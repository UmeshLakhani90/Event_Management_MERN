const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true, unique: true },
    organiser_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    venue_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue', require: true },
    date: { type: Date, require: true },
    time: { type: String, require: true },
    tickets_available: { type: Number, require: true },
    tickets_price: { type: Number, require: true },
    categories: { type: String, enum: ['Music', 'Tech', 'Sports'], default: '' }
});

EventSchema.set('timestamps', {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('Event', EventSchema);