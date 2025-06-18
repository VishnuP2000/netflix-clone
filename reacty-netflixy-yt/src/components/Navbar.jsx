import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar() {
  const {user,logOut}=UserAuth()
  const navigate=useNavigate()

  const handleLogout=async()=>{
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log('err',error)
    }
  }
  return (
    <div className='absolute w-full p-4 flex item-center justify-between z-50'>
      <Link to='/' >
      <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>
        netflix
        </h1>
      </Link>

      {
        user?.email?(
           <div>
      <Link to='/profile'>
        <button className='capitalize pr-4' >profile</button>
        </Link>
        
        <button onClick={handleLogout} className='capitalize bg-red-600 px-6 py-2 rounded' > logout</button>
       
      </div>
        ):
      (
         <div>
      <Link to='/Login'>
        <button className='capitalize pr-4' >Login</button>
        </Link>
        <Link to='/Signup'>
        <button className='capitalize bg-red-600 px-6 py-2 rounded' >Sign up</button>
        </Link>
      </div>
      )
      }
      
     
    </div>
  )
}

export default Navbar
