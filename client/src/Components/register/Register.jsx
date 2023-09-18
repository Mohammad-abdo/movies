import React, { useState } from 'react'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'
import './Register.css'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
const Register = () => {
  const [user,setUser]=useState({
first_name:'',
last_name:'',
email:'',
password:'',
age:0
  })
const navigate=useNavigate()
  const [error,setError]=useState('')
  const [errorList,setErrorList]=useState([])
  const [isloading,setisloading]=useState(false)

  async function sendRegisterDataToApi() {

    let {data } = await axios.post("http://localhost:8000/signup", user);
   if(data.message == "success"){
    setisloading(false)
    navigate('/login')

   }else{
    setisloading(false)
    console.log(data.message);
    setError(data.message)
   
   }
  }

    function getUserData(ev){
      let myUser={...user}
      // myUser[ev.target.name] = ev.target.value
      myUser[ev.target.name] = ev.target.value
      setUser(myUser)
      console.log(user);
    }

  function HandelForm(ev){
    ev.preventDefault()
    setisloading(true)
   const validator=validateRegisterForm()
   if(validator.error){
setisloading(false)
console.log(validator.error);
setErrorList(validator.error.details)
   }else{

   }
    sendRegisterDataToApi()
   
  }
function validateRegisterForm(){
 const schema= Joi.object({
    first_name:Joi.string().required().min(3).max(30).pattern(/^[A-Z]/),
    last_name:Joi.string().required().min(3).max(30).pattern(/^[A-Z]/),
    email:Joi.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).required(),
    password:Joi.string().required().min(18).max(80),
    age:Joi.number().required().min(3).max(30)
  })
 return schema.validate(user,{abortEarly:false})
}
  return (
    <div className='container my-5 mx-auto '>
      <h1 className=' my-3'>Register</h1>
     <form  onSubmit={HandelForm} className='border rounded  shadow'>

  <div className="form-group d-flex align-items-center justify-content-around my-4 ">
      <label style={{width:"10%",margin:"0 10px"}} htmlFor="first_name">First Name :</label>
      <input onChange={getUserData}  className="form-control border bg_transparent mx-2 " style={{width:"90%"}}type="text" name='first_name'  id='first_name' placeholder='Enter First Name'/>
     </div>

{(errorList.filter((err)=>err.context.label == "first_name")[0]?.message)?
   <div className="alert alert-light p-1 w-50  text-danger  my-1 "style={{margin:"0 154px"}}>
     {errorList.filter((err)=>err.context.label == "first_name")[0]?.message}
     </div>:""}
    
    
     <div className="form-group d-flex align-items-center justify-content-around my-4">
     <label style={{width:"10%",margin:"0 10px"}} htmlFor="last_name">Last Name :</label>
     <input onChange={getUserData}  className="form-control border bg_transparent mx-2 " style={{width:"90%"}}type="text" name='last_name'  id='last_name' placeholder='Enter last name'/>
      
     </div>
     {(errorList.filter((err)=>err.context.label == "last_name")[0]?.message)?
   <div className="alert alert-light p-1 w-50  text-danger  my-1 "style={{margin:"0 154px"}}>
     {errorList.filter((err)=>err.context.label == "last_name")[0]?.message}
     </div>:""}
     <div className="form-group d-flex align-items-center justify-content-around my-4">
     <label style={{width:"10%",margin:"0 10px"}} htmlFor="email"> Email :</label>
     <input onChange={getUserData}  className="form-control border bg_transparent mx-2 " style={{width:"90%"}}type="email" name='email'  id='email' placeholder='Enter email'/>
      
     </div>
     {(errorList.filter((err)=>err.context.label == "email")[0]?.message)?
   <div className="alert alert-light p-1 w-50  text-danger  my-1 "style={{margin:"0 154px"}}>
     {errorList.filter((err)=>err.context.label == "email")[0]?.message}
     </div>:""}
     <div className="form-group d-flex align-items-center justify-content-around my-4">
     <label style={{width:"10%",margin:"0 10px"}} htmlFor="password">Password :</label>
     <input onChange={getUserData}  className="form-control border bg_transparent mx-2 " style={{width:"90%"}}type="password" name='password'  id='password' placeholder='Enter password'/>
      
     </div>

     {(errorList.filter((err)=>err.context.label == "password")[0]?.message)?
   <div className="alert alert-light p-1 w-50  text-danger  my-1 "style={{margin:"0 154px"}}>
     {errorList.filter((err)=>err.context.label == "password")[0]?.message}
     </div>:""}

     <div className="form-group d-flex align-items-center justify-content-around my-4">
     <label style={{width:"10%",margin:"0 10px"}} htmlFor="age">Age :</label>
     <input onChange={getUserData}  className="form-control border bg_transparent mx-2 " style={{width:"90%"}}type="number" name='age'  id='age' placeholder='Enter age'/>
      
     </div>
     {(errorList.filter((err)=>err.context.label == "age")[0]?.message)?
   <div className="alert alert-light p-1 w-50  text-danger  my-1 "style={{margin:"0 154px"}}>
     {errorList.filter((err)=>err.context.label == "age")[0]?.message}
     </div>:""}
     <div className="form-group d-flex  mx-2 my-4">
    <button className="btn btn-outline-light shadow px-5 ">

      {isloading ==true ?<i className="fa fa-spinner fa-spin"></i>:"Supmit"} 

      </button>
      
     </div>
     </form>
     {/* <form action="" ></form> */}
   
 
     
  

    </div>
  )
}

export default Register



