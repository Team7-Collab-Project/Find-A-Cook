const mongoose = require('mongoose');

const categories = new mongoose.Schema(
    {
<<<<<<< HEAD
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
=======
        // _id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        // },
>>>>>>> 19105-menu-item-creation
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