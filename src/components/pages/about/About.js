import React from 'react'
import Navbars from '../Navbar'
export default function About() {
    return (
        <div>
            <Navbars />
            <div class="jumbotron container mt-3 p-5 bg-light">
                <h1 class="display-4">About Shop Me.COM</h1>
                <hr class="my-4"/>
                <p>This Website is a E-Commerce Website Application developed using MERN Stack Framework by @Shreyash Matele.</p>
                <p className='text-muted'>Note :[Some of the functionalities are under development.(like payment ,track order functionalities etc.)] </p>
                <p>The Application has various functionalities :
                    <ul>
                        <br/><p>Admin Functionality</p>
                        <li>Can Upload your own product on Site using Admin login credentials.</li>
                        <li>Can Edit, Delete products uploaded on Site.</li>
                        <li>Sample Login credentials: <b>username:shreyash@gmail.com, password: Shreyash@2704</b></li>
                        <li><a href="/admin_login">Click here to login as customer.</a></li>
                        <hr/>
                        <p>Customer Functionality</p>
                        <li>Can buy products using Customer login credentials.</li>
                        <li>Can add multiple products in Carts.</li>
                        <li>Sample Login credentials: <b>username:demo@gmail.com, password: demo@123</b></li>
                        <li><a href="/login">Click here to login as customer.</a></li>
                        
                    </ul>
                </p>
                <hr/>
                <h3>How to Upload products?</h3>
                <p>Follow the following Steps.
                    <ul>
                        <li>Click on <b>profile</b> in navigation.</li>
                        <li>The Go to <b>Your Products</b></li>
                        <li>Then Click on <b>Want to add Products?</b> Button</li>
                        <li>Pop up will appear. Fill all the details ad click Submit.</li>
                    </ul>
                </p>

            </div>
        </div>
    )
}
