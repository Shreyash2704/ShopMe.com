import React,{useState} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import Admin_Navbar from './Admin_Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const initialState = {
        username:"",
        business_name:"",
        email : "",
        personal_address:"",
        business_address:"",
        personal_contact : "",
        business_contact:"",
        dob:"",
        adhaar_number:"",
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
                    business_name:user.business_name,
                    email : user.email,
                    personal_contact : user.personal_contact,
                    business_contact : user.business_contact,
                    personal_address : user.personal_address,
                    business_address : user.business_address,
                    adhaar_number : user.adhaar_number,
                    dob : user.dob,
                    password : user.password
                }
                const url = "https://ecom-website-001.herokuapp.com/auth/admin/signup/"
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
                <Admin_Navbar />
                <div class="mb-3 rounded-3">
                    <div class="container p-5 bg-light">
                        <div className='text-center'>
                        <p className='fs-2'>Admin Sign Up</p><hr></hr>
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

                        <Form.Group className="mb-3" controlId="business_name">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control type="text" name="business_name" value={user.business_name} onChange={handleInputChange} placeholder="Business Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="personal_contact">
                            <Form.Label>Personal Contact</Form.Label>
                            <Form.Control type="text" name="personal_contact" value={user.personal_contact} onChange={handleInputChange} placeholder="Personal Contact" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="business_contact">
                            <Form.Label>Business Contact</Form.Label>
                            <Form.Control type="text" name="business_contact" value={user.business_contact} onChange={handleInputChange} placeholder="Business Contact" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="personal_address">
                            <Form.Label>Personal Address</Form.Label>
                            <Form.Control type="text" name="personal_address" value={user.personal_address} onChange={handleInputChange} placeholder="Personal Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="business_address">
                            <Form.Label>Business Contact</Form.Label>
                            <Form.Control type="text" name="business_address" value={user.business_address} onChange={handleInputChange} placeholder="Business Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dob">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" name="dob" value={user.dob} onChange={handleInputChange} placeholder="Date of Birth" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="adhaar_number">
                            <Form.Label>Adhaar Number</Form.Label>
                            <Form.Control type="text" name="adhaar_number" value={user.adhaar_number} onChange={handleInputChange} placeholder="Adhaar Number" />
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
