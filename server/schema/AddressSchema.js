const mongoose = require('mongoose');

const address = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        address_door_number: {
            type: String,
            required: true,
        },
        address_line_1: {
            type: String,
            required: true,
        },
        address_line_2: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postcode: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const AddressSchema = mongoose.model('Address', address);

module.exports = AddressSchema;


