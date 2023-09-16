const express=require ('express');
const router =express.Router()
const {SaveUser,getAllUser,authenticateUser}=require ('../controllers/UsersController')

// Save User
// router.post("/",(req,res)=>{
//     const user =req.body
//     console.log(user);
//     SaveUser(res,user)
// })
router.post("/",SaveUser,(req,res)=>{
 
})

// signin
router.post("/",authenticateUser,(req,res)=>{
})

// getAll users

router.get("/",(req,res)=>{
    getAllUser(res)
})



module.exports = router;