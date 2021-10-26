const { Schema, model } = require('mongoose');

const schema = new Schema({
    //TODO adapt parameters to project requirements
    name: { type: String, required: [true, "All fields are required"], minLength: 4 },
    city: { type: String, required: [true, "All fields are required"], minLength: 3 },
    imageUrl: { type: String, required: [true, "All fields are required"] , match: [/^http?/, "Image must be valid URL"]},
    rooms: { type: Number, required: [true, "All fields are required"], min: 1, max: 100 },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = model('Hotel', schema);