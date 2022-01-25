import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Navbars from '../Navbar'
import './dashboard.css'
import DCards from './DCards'
import Admin_DCards from './Admin_DCards'
export default function Dashboard() {

    const initialState = {
        

    }
    const [user, setuser] = useState(initialState)
    const [image, setimage] = useState("https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg")
    const token = localStorage.getItem('token')
    console.log(token)
    const getUser = async() =>{
        
        const uri = localStorage.getItem('admin') === "true" ? ("https://ecom-website-001.herokuapp.com/auth/get_admin") : ("https://ecom-website-001.herokuapp.com/auth/user")
        const data = {
            token:token
        }
        const user = await axios.post(uri,data)
        const response = user.data.data
        setuser(response)
        
        
    }
    
    useEffect(() => {
        getUser()
    }, [])
    
    return (
        <div className='bg-light'>
            <Navbars/>
            <div className='bg-light mt-5 parent'>
                <div className='p-5 '>
                    {localStorage.getItem("admin") === "true" ?
                      (<Admin_DCards id={user._id} name={user.name} business_name={user.business_name} business_contact={user.business_contact} personal_contact={user.personal_contact} email={user.email} personal_address={user.personal_address} business_address={user.business_address} dob={user.dob} adhaar_number={user.adhaar_number}/>)
                     :
                      (<DCards id={user._id} name={user.name} email={user.email} phone={user.phone} />)
                    }
                </div>
                
            </div>
            
        </div>
            
    )
}
   
    
    