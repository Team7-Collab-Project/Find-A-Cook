const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const emailVerification = new mongoose.Schema(
    {
        _id: {
            type: ObjectId(),
            required: true,
        },
        user_id: {
            type: ObjectId,
			ref: 'UserSchema',
            required: true,
        },
        user_email: {
            type: ObjectId,
			ref: 'UserSchema',
            required: true,
        },
        verification_code: {
            type: String,
            required: true,
        },
        expiry_date: {
            type: Date,
            required: true,
        },
        is_verified: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

const EmailVerification = mongoose.model('EmailVerification', emailVerification);

module.exports = EmailVerification;



