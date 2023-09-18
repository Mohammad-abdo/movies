const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const { conn } = require("./db");
const modal = require('./models/Users');
const UserSchema = require('./routes/UserRouter');
const {SaveUser,getAllUser,authenticateUser}=require ('./controllers/UsersController')
app.use(cors());

// Connect to MongoDB
conn();

// Middleware to parse JSON request bodies
app.use(express.json());

// app.post("/signup", async (req, res) => {
//   try {
//     const data = {
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       password: req.body.password,
//       age: req.body.age,
//     };
    
//     // Assuming "modal" represents your Mongoose model
//     const newUser = await modal.create(data);
// console.log(newUser);
//     res.status(201).json({ message: "User created successfully", data: newUser });
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
app.post("/signup", SaveUser, (req, res) => {
  res.status(200).json({ message: "Authentication successful", date: req.user });
  }
);
app.post("/signin", authenticateUser, (req, res) => {
  res.status(200).json({ message: "Authentication successful", date: req.user });
});

// Use the UserSchema router
app.use("/Users", UserSchema);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
