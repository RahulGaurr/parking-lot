const mongoose = require("mongoose")

const data = new mongoose.Schema({
    vehicalname: {
        type: String,
        minlength: 2
    },
    vehicalnumber: {
        type: String,
        minlength: 9,
        maxlength: 17
    },
    vehicalowner: {
        type: String,
        minlength: 3
    },
    vehicaltype: {
        type: String,
        minlength: 3,
        maxlength: 10
    }
})

module.exports = mongoose.model("parking", data)