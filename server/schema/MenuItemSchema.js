// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema;

// const menus = new mongoose.Schema(
//     {
//         filename: {
//             type: String,
//             required: true,
//         },
//         // user_id: {
//         //     type: mongoose.Schema.Types.ObjectId,
// 		// 	ref: 'UserSchema',
//         //     required: true,
//         // },
//         item_name: {
//             type: String,
//             required: true,
//         },
//         product_description: {
//             type: String,
//             required: true,
//         },
//         price: {
//             type: Number,
//             required: true,
//         },
//         category: {
//             type: ObjectId,
//             ref: 'Category',
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

// const MenuItemSchema = mongoose.model('MenuItem', menus);
// menus.index({ item_name: 'text'});


// module.exports = MenuItemSchema;
