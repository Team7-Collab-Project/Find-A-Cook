const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookings = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
            required: true,
        },
        cook: {
          type: mongoose.Schema.Types.ObjectId,
    ref: 'Cook',
          required: true,
      },
        items: [
            {
              name: String,
              quantity: Number,
              price: Number
            }
          ],
          total: {
            type: Number,
            required: true
          },
          bookingDate: {
            type: Date,
            default: Date.now,
            required: true
          },
          status: {
            type: String,
            enum: ['Pending', 'Accepted', 'Declined'],
            default: 'Pending'
          },
    },
    { timestamps: true }
);

const BookingSchema = mongoose.model('Booking', bookings);

module.exports = BookingSchema;



