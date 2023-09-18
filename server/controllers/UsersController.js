
const modal = require('../models/Users');
const saltRounds = 10; // Number of salt rounds (higher is more secure)
const bcrypt=require ("bcrypt")
const User = require('../models/Users');

async function SaveUser(req, res){
    try {
      const { first_name, last_name, email, password, age } = req.body;
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create a new user
      const user = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        age,
      });
  
      // Save the user to the database
      await user.save();
  
      res.status(201).json({message:'success',data:user});
    } catch (error) {
 
      res.status(500).json({message:error});
    }
  }
async function authenticateUser(req, res, next) {
    try {
      const { email, password } = req.body;
  
      // Find the user by their email
      const user = await modal.findOne({ email });
    
      // if (!user) {
      //   return res.status(401).json({ message: "Authentication failed" });
      // }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
    
    //   const passwordMatch =  user.password
  
      if (passwordMatch ) {
       
        req.user = user; // Attach the user object to the request
        res.status(201).json({message:'success',data:user});
        next(); // Continue to the next middleware or route
      } 
    } catch (error) {
      console.error("Error during authentication:", error);
      res.status(500).json({ message:"Error during authentication"+error });
    }
  }
//Get All user
async function getAllUser(res) {

    try{
      var user =await modal.find();;
  res.json(  {message: "done", data: {user }});
  }catch(err){
    res.status(500).json({message: 'can not  find any  todo' });
  
  }
  }
module.exports = { SaveUser,getAllUser,authenticateUser };
