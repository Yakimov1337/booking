const { Schema, model } = require('mongoose');

const schema = new Schema ({
    //TODO adapt parameters to project requirements
    username: { type: String, required: true, minlength: 3},
    hashedPassword: { type: String, required: true}
})