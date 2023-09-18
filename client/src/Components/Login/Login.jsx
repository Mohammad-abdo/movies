import React, { useState } from 'react'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const [user,setUser]=useState({
email:'',
password:''
  })
const navigate=useNavigate()
  const [error,setError]=useState('')
  const [errorList,setErrorList]=useState([])
  const [isloading,setisloading]=useState(false)

  async function sendLoginDataToApi() { 
    let {data } = await axios.post("http://localhost:8000/signin", user);
   if(data.message == "success"){
     setisloading(false)
     navigate('/home')
   }else{
    setisloading(false)
    setError(data.message)
   
   }
  }

    function getUserData(ev){
      let myUser={...user}
      myUser[ev.target.name] = ev.target.value
      setUser(myUser)

    }

  function HandelForm(ev){
    ev.preventDefault()
    setisloading(true)
   const validator=validateLoginForm()
   if(validator.error){
setisloading(false)

setErrorList(validator.error.details)
   }else{

   }
    sendLoginDataToApi()
   
  }
function validateLoginForm(){
 const schema= Joi.object({
 
    email:Joi.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).required(),
    password:Joi.string().required().min(8).max(80),

  })
 return schema.validate(user,{abortEarly:false})
}
  return (
    <div className='container my-5 mx-auto '>
      <h1 className=' my-3'>Login</h1>
      <div className="alert alert-outlone-light text-danger border-none">{error}</div>
     <form  onSubmit={HandelForm} className='border rounded  shadow'>


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

export default Login




