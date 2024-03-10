// ---> Run Command  node server.js, npm start

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');   
const app = express();
const userModel = require('./Models/Users');

app.use(cors);

// ---> Request and Responces Will bbe converted to JSON Formate
app.use(express.json());


// ---> API to access Database

app.post("/createUsers", async (req,res)=> {

    const { name, email, age } = req.body;

    try {
        const newUser = await userModel.create({ name, email, age });
        console.log(newUser);
        res.json({ message: "User created successfully!", data: newUser });
      } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Error creating user" }); // Send error response
      }
})

// ---> Start the Server
app.listen(3001,()=>{
    console.log("Server is Running")
})

// ---> Connection to Database < Connrcting to CRUD >
mongoose.connect('mongodb+srv://bhargavptibadiyatbp:rI1KX34R34QMZrWJ@bhargav.g1rbldy.mongodb.net/CRUD');