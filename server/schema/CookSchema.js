const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const cooks = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'UserSchema',
            required: true,
        },
        specialties: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date_joined: {
            type: Date,
            required: true,
        },
        application_status: {
            type: String,
            enum : ['pending','approved', 'declined'],
            default: 'pending',
            required: true,
        },
        cook_average_rating: {
            type: Float,
            required: true,
        }, //The average of all ratings for a given cook
        cook_total_rating: {
            type: Int,
            required: true,
        }, //The total number of ratings a given cook has received
    },
    { timestamps: true }
);

const CookSchema = mongoose.model('Cook', cooks);

module.exports = CookSchema;













