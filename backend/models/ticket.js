const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', require: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    purchase_date: { type: Date, default: Date.now },
    quantity: { type: Number, require: true },
    total_amount: { type: Number, require: true }
});

TicketSchema.set('timestamps', {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('Ticket', TicketSchema);