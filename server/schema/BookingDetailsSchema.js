const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookings = new mongoose.Schema(
    {
        _id: {
            type: ObjectId(),
            required: true,
        },
        booking_id: {
            type: ObjectId,
			ref: 'BookingSchema',
            required: true,
        },
        item_id: {
            type: ObjectId,
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

