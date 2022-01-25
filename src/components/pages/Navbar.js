import React from 'react'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
export default function Navbars() {

    return (
        <div className=''>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Shop Me.Com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="  ms-auto mb-2 mb-lg-0">
                       {localStorage.getItem('token') === null ? (<Nav.Link href="/login">Customer Login</Nav.Link>):("")}

                        <Nav.Link href="/product">Products</Nav.Link>
                        


                        {localStorage.getItem('token') !== null ?(""):(<Nav.Link href="/admin_login">Admin Login</Nav.Link>)}

                        {localStorage.getItem("token") !== null ?(<NavDropdown title="Profile"  id="basic-nav-dropdown">
                            <NavDropdown.Item href="/dashboard">DashBoard</NavDropdown.Item>
                            { localStorage.getItem('admin') === "true" ? (<NavDropdown.Item href="/admin/addProduct">Your Products</NavDropdown.Item>) : ("") }
                            { localStorage.getItem('token') === null  ?(""):(<NavDropdown.Item href="/addCart" >Cart</NavDropdown.Item>)}
                            { localStorage.getItem('token') === null ? (""):(<NavDropdown.Item href="/logout" >Logout</NavDropdown.Item>)}
                            <NavDropdown.Divider />
                        
                        </NavDropdown>):("")}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
