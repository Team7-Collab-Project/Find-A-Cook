const Booking = require('../schema/BookingSchema');

exports.create = async (req, res) => {
    console.log('req.body: ', req.body);

    const {user, cook, customerEmail, deliveryAddress, items, total, bookingDate, status} = req.body;

    try{
        let newBooking = new Booking();
        newBooking.user = user;
        newBooking.cook = cook;
        newBooking.customerEmail = customerEmail;
        newBooking.deliveryAddress = deliveryAddress;
        newBooking.items = items;
        newBooking.total = total;
        newBooking.bookingDate = bookingDate;
        newBooking.status = status;

        
        await newBooking.save();

        res.status(200).json({
            successMessage: `A new booking for ${user} has been created :)`,
            newBooking,
        });
    } catch (err) {
        console.log('Error Creating a New Booking: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }

};