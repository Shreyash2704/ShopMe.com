import React from 'react'
import './style.css'

export default function Admin_Auth() {
    return (
        <div className='parent bg-dark'> 
            <div class="cover-container text-white bg-dark d-flex w-100 h-100 p-5 mt-5 mx-auto flex-column">
                <main class="px-3 my-5">
                    <div className='text-center  mb-5'>
                        <h1>Want to sell your products online?</h1>
                        <h2>Want to take your business online?</h2>
                    </div>
                    
                    <p class="lead">Now is the oppurtunity to do all of it. <br></br>
                                   What you have to do is just Create a business account add all your contact details. <br></br>
                                   Once all the required details are filled, Just go to addProduct page and add all the product you want to Sell Online. </p>
                    <p class="lead">
                    <a href="/admin_login" class="btn btn-lg btn-primary  ">Create a business account now</a>
                    </p>
                </main>
                
                <footer class="mt-5 text-white-50">
                    <p>ShopMe.com </p>
                    <p>Shreyash Matele</p>
                </footer>
                </div>
        </div>
    )
}
