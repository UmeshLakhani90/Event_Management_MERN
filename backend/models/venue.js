const mongoose = require("mongoose");

const VenueSchema = new mongoose.Schema({
    name: { type: String, require: true },
    location: { 
        address: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String },
        country: { type: String, require: true }
    },
    capacity: { type: Number, require: true },
    contact: { 
        phone: { type: String },
        email: { type: String }
    }
});

VenueSchema.set('timestamps', {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('Venue', VenueSchema);