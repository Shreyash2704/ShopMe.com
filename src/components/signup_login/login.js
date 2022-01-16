import React,{useState,useEffect} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import Auth_Navbar from './Auth_Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    
    const navigate = useNavigate()
    const initialState = {
        email : "",
        password : ""
    }
    const [user, setuser] = useState(initialState)
    const [error, seterror] = useState("")

    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setuser({...user,[name]:value})
        seterror("")
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    
    const validate = async() =>{
          if(user.email !== "" && user.password !== ""){
              const uri = "https://ecom-website-001.herokuapp.com/auth/"
              const loggedInUser = await axios.post(uri,user)
              const response = loggedInUser.data.message
              if(loggedInUser.data.auth){
                  localStorage.setItem("token",loggedInUser.data.token)
                  localStorage.setItem("id",loggedInUser.data.id)
                  
                  navigate('/')
              }
              else{
                  seterror(response)
              }
          }
          else{
              seterror("Fill in all the details.")
          }
    }

    useEffect(() => {
        
        
    }, [])
    return (
        
        <div>
                <Auth_Navbar />
                <div class="mb-3 rounded-3">
                    <div class="container p-5 bg-light">
                    <div className='text-center'>
                        <p className='fs-2'>Log In</p><hr></hr>
                        </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Confirmed password" />
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

                        <Button variant="primary" onClick={validate} type="submit">
                            Log In
                        </Button>
                    </Form>
                    </div>
                </div>
                
                                    
        
        </div>
    )
}
