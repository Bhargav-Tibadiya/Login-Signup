const mongoose = require('mongoose')

// ---> Defining The Schema & Model for DB

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// ---> inside userModel("") put name of Table and after put scgema for table
const userModel = mongoose.model("users",userSchema);


module.exports = userModel;