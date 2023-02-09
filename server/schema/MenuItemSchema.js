const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const menus = new mongoose.Schema(
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
        item_name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: ObjectId,
            ref: 'MenuCategorySchema',
            required: true,
        },
    },
    { timestamps: true }
);

const MenuItemSchema = mongoose.model('MenuItem', menus);

module.exports = MenuItemSchema;

