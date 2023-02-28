const mongoose = require('mongoose');

const categories = new mongoose.Schema(
    {
<<<<<<< HEAD
<<<<<<< HEAD
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
=======
=======
>>>>>>> c7467d075cb1372ecbe6148adf9de982635ba938
        // _id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        // },
<<<<<<< HEAD
>>>>>>> 19105-menu-item-creation
=======
>>>>>>> c7467d075cb1372ecbe6148adf9de982635ba938
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