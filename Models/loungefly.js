const mongoose = require("mongoose");
const{Schema} = mongoose;

const loungeflySchema = new Schema (
    {
        Name: String,
        backpack:String,
        crossbody:String,
    },
    {timestamps: true}
);

module.exports = mongoose.model("Loungefly". loungeflySchema);