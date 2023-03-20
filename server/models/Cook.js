const mongoose = require('mongoose');
const MenuCategorySchema = require('./MenuCategory');
const { ObjectId } = mongoose.Schema;

const cooks = new mongoose.Schema(
    {
        cook_email: {
            type: String,
            required: true,
        },
        cook_first_name: {
            type: String,
            required: true,
        },
        cook_last_name: {
            type: String,
            required: true,
        },
        cook_password: {
            type: String,
            required: true,
        },
        specialties: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'

        }],
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
        verified: {
            type: Boolean,
            required: true,
        },
        cook_birthday: {
            type: Date,
            required: true,
        },
        cook_address: {
            type: String,
            required: true,
        },
        profile_picture: {
            type: String,
            required: true,
        },
        cook_bio: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const CookSchema = mongoose.model('Cook', cooks);

module.exports = CookSchema;