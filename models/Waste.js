const mongoose = require('mongoose');

const WasteSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        legajo: { type: Number, required: true },
        type: { type: String, required: true },
        quantity: { type: Number, required: true },
        sector: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Waste', WasteSchema); 