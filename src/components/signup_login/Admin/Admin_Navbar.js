import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

export default function Auth_Navbar() {
    return (
        <div>
            <Navbar className="mb-3" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Shop Me.Com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/admin_login">Admin Log In</Nav.Link>
                        <Nav.Link href="/admin_signup">Admin Sign Up</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
