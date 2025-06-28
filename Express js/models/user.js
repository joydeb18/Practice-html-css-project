const mongoose = require('mongoose');


//Define the user Schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;