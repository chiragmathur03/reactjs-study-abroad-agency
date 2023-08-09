// mongodb connection and schema for contact us page

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/headstart", { useNewUrlParser: true, useUnifiedTopology: true })
    // mongodb+srv://thetriomakers:h3ZN4Hz4e0EK79UN@cluster0.x7dvfjw.mongodb.net/
    // mongodb://localhost:27017
    .then(() => {
        console.log("Connected");
    }).catch(() => {
        console.log("Failed");
    })

const newSchema = new mongoose.Schema({  //define document
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

const collection = mongoose.model("contactus", newSchema)
module.exports = collection
