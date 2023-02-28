const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ingredients = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        menu_item_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'MenuItemSchema',
            required: true,
        },
    },
    { timestamps: true }
);

const IngredientsSchema = mongoose.model('Ingredient', ingredients);

module.exports = IngredientsSchema;

