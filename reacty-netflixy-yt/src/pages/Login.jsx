import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

function Login() {
 const [rememberLogin,setRememberLogin]=useState(true)
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   const {user,logIn}=UserAuth();
   const navigate=useNavigate();
 
const handleFormSubmit = async (e) => {
  e.preventDefault();
  console.log("email", email);
  console.log("password", password);

  try {
    await logIn(email, password);
    navigate('/');
  } catch (error) {
    console.log('err', error);
  }
};
   return (
    <>
    <div className='w-full h-screen' >
 
    <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg" alt="///" />
    <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
    <div className='fixed w-full px-4 py-24 z-20' >
    <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg' >
    <div className='max-w-[320px] mx-auto py-16'>
       <h1 className='text-3xl font-nsans-Bold' >Login</h1>
 
       <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4' action="">
         <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='current password' autoComplete='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
 
          <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>Login</button>
          <div className='flex justify-between items-center text-gray-600' >
 
           <p>
             <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e)=>setRememberLogin(!rememberLogin)}  />
             Remember me
           </p>
           <p>Need Help</p>
          </div>
          <p className='my-4' >
           <span className='text-gray-600 mr-2' >New to Netflix?</span>
           <Link to="/Login" >Sign Up</Link>
          </p>
       </form>
     </div>
    </div>
 
    </div>
    </div >
    </>
   )
}

export default Login
