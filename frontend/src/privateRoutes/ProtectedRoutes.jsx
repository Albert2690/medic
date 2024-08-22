import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';




function ProtectedRoutes() {
    const token = Cookies.get('refresh_token');
    console.log('hello jwt')
    console.log(token,'token');
    if(!token){
        toast.error('Please Login')
      return < Navigate to={'/login'} replace/> 
    }
        return <Outlet/>
    

    

 
}

export default ProtectedRoutes