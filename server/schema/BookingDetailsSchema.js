const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookings = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        booking_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'BookingSchema',
            required: true,
        },
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'MenuItemSchema',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const BookingDetailsSchema = mongoose.model('BookingDetails', bookings);

module.exports = BookingDetailsSchema;

