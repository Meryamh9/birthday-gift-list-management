// birthdayGiftModel.js
const mongoose = require('mongoose');

const birthdayGiftSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const BirthdayGift = mongoose.model('BirthdayGift', birthdayGiftSchema);

module.exports = BirthdayGift;
