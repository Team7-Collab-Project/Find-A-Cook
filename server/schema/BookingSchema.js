const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookings = new mongoose.Schema(
    {
        _id: {
            type: ObjectId(),
            required: true,
        },
        user_id: {
            type: ObjectId,
			ref: 'UserId',
            required: true,
        },
        user_last_name: {
            type: String,
            required: true, //COOK REF
        },
        order_date_time: {
            type: Date,
            required: true,
        },
        total_price: {
            type: Float,
            required: true,
        },
        customer_cook_rating: {
            type: String, 
            required: true, //REVIEW REF
        },
        address_id: {
            type: ObjectId,
			ref: 'AddressSchema',
            required: true,
        },
    },
    { timestamps: true }
);

const BookingSchema = mongoose.model('Booking', bookings);

module.exports = BookingSchema;



