const mongoose = require("mongoose");

const OrganizerSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    organization_name: { type: String, require: true },
    contact: { 
        phone: { type: String },
        email: { type: String, require: true }
    }
});

OrganizerSchema.set('timestamps', {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('Organizer', OrganizerSchema);