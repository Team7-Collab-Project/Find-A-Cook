const mongoose = require('mongoose');

const categories = new mongoose.Schema(
    {

        // _id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        // },
        category_name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        category_description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const MenuCategorySchema = mongoose.model('Category', categories);

module.exports = MenuCategorySchema;