const mongoose = require("mongoose");

const Chocolate = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    strength: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Chocolate", Chocolate);