const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    googleId: String,
    email: String,
    name: String

});


mongoose.model('users', userSchema);

