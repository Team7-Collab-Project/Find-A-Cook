const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const menus = new mongoose.Schema(
    {
<<<<<<< HEAD
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'UserSchema',
            required: true,
        },
        item_name: {
=======
        // filename: {
        //     type: String,
        //     required: true,
        // },
        // user_id: {
        //     type: mongoose.Schema.Types.ObjectId,
		// 	ref: 'UserSchema',
        //     required: true,
        // },
        item_name: {
            type: String,
            required: true,
        },
        product_description: {
>>>>>>> 19105-menu-item-creation
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
<<<<<<< HEAD
            type: mongoose.Schema.Types.ObjectId,
=======
            type: ObjectId,
>>>>>>> 19105-menu-item-creation
            ref: 'MenuCategorySchema',
            required: true,
        },
    },
    { timestamps: true }
);

const MenuItemSchema = mongoose.model('MenuItem', menus);

module.exports = MenuItemSchema;
<<<<<<< HEAD

=======
>>>>>>> 19105-menu-item-creation
