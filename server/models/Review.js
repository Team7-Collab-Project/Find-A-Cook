const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const reviews = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        }, //the id assigned to a rating
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'UserSchema',
            required: true,
        }, //the id of the user who is creating the rating
        cook_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'CookSchema',
            required: true,
        }, //The id of the cook who is receiving the rating
        rating_value: {
            type: Number,
            required: true,
        }, //The rating value (1-10)
        review_title: {
            type: String,
            required: true,
        }, //The title of the review
        review_body: {
            type: String,
            required: true,
        }, //The body of the review
        date: {
            type: Date,
            required: true,
        }, //The date the review was created or last edited
        img:{
            type: String,
        }
    },
    { timestamps: true }
);

const ReviewSchema = mongoose.model('Review', reviews);

module.exports = ReviewSchema;













