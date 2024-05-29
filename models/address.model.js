const mongoose = require("mongoose");

const AddressSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }   
    mobile: {
        type: String,
        required: true,
    },
});

const Address = mongoose.model("address", AddressSchema);

module.exports = Address;   