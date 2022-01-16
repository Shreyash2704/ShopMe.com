import React from 'react'
import { Navigate } from 'react-router-dom'
export default function Logout() {
    if(localStorage.getItem("id") === null){
        return (<Navigate to="/login" />)
    }
    else{
        localStorage.clear()
        return (<Navigate to="/login" />)
        
    }
    
}
