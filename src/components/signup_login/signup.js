import React,{useState} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import Auth_Navbar from './Auth_Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const initialState = {
        username:"",
        email : "",
        phone : "",
        password : "",
        repassword : ""
    }
    const [user, setuser] = useState(initialState)
    const [error, seterror] = useState("")
    const [sucess, setsucess] = useState("")

    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setuser({...user,[name]:value})
        seterror("")
    }

    const confirmedPass = () =>{
       
        if(user.password === user.repassword){
            return true
        }
        else{
            return false
        }
        
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    const signup = async() =>{
        seterror("")
        setsucess("")
        if(user.username !== "" && user.email !== "" && user.password !== "" && user.repassword !==""){
            if(confirmedPass()){
                //api call
                const data = {
                    name : user.username,
                    email : user.email,
                    phone : user.phone,
                    password : user.password
                }
                const url = "https://ecom-website-001.herokuapp.com/auth/signup/"
                const savedUser = await axios.post(url,data)
                const response = savedUser.data.message
                console.log(response)
                setuser(initialState)
                if(savedUser.data.saved === true){
                     setsucess(response)
                     navigate('/login')
                }
                else{
                    seterror(response)
                }
            }
            else{
                seterror("Please re-write correct password. ")
            }
        }
        else{
            seterror('Please fill all the inputs.')
        }
    }
    return (
        <div>
                <Auth_Navbar />
                <div class="mb-3 rounded-3">
                    <div class="container p-5 bg-light">
                        <div className='text-center'>
                        <p className='fs-2'>Sign Up</p><hr></hr>
                        </div>

                        {sucess !== "" ? (
                            <Form.Group className="mb-3 text-center" controlId="error">
                                <Form.Text>
                                    <Alert  variant="success">
                                        {sucess}
                                    </Alert>
                                </Form.Text>
                             </Form.Group>
                        ) : ""}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone_number">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" name="phone" value={user.phone} onChange={handleInputChange} placeholder="Contact Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="passord">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="repassord">
                            <Form.Label>Re-Password</Form.Label>
                            <Form.Control type="password" name="repassword" value={user.repassword} onChange={handleInputChange} placeholder="Rewrite Password" />
                        </Form.Group>
                        {error !== "" ? (
                            <Form.Group className="mb-3" controlId="error">
                                <Form.Text>
                                    <Alert  variant="danger">
                                        {error}
                                    </Alert>
                                </Form.Text>
                             </Form.Group>
                        ) : ""}
                        

                        <Button variant="primary" onClick={signup} type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    </div>
                </div>
                
                                    
        
        </div>
    )
}
