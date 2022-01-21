const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: { type: String, required: [true, 'your email is required to continue'], unique: true },
        password: { type: String, required: [true, 'your password is required to continue'] }
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    console.log(this.password);
    try {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    } catch (e) {
        throw Error('could not hash password');
    }
})

module.exports = mongoose.model("User", userSchema);