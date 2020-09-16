const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true,
       min: 6,
       max: 15
   },
    password: {
       type: String,
        required: true,
    },
    role: {
       type: String,
        enum: ['user', 'admin'],
        required: true
    },
    todos : [{type: mongoose.Schema.ObjectId, ref: 'Todo'}]
});

module.exports = mongoose.model('User',UserSchema);
