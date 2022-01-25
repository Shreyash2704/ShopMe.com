import axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { Button } from 'react-bootstrap'
import Navbars from '../Navbar'
import CartCards from './CartCards'
import './cart.css'

export default function AddCart() {

    const [CartData, setCartData] = useState([])
    const [TotalPrice, setTotalPrice] = useState(0)
    const loadData = async() =>{
         const customer_id = localStorage.getItem('id')
         const data = await axios.get(`https://ecom-website-001.herokuapp.com/add_cart/${customer_id}`)
         setTotalPrice(data.data.total_price)
         setCartData(data.data.data)
    }
    
    
    
    
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div >
            <Navbars />
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container ">
                    <h1 className="display-4 mb-4">Shopping Cart</h1>
                    { CartData !== [] ?(
                        CartData.map((product) =>{
                            const { _id,product_name,product_price,product_category,product_image,product_owner_id} = product
                            return(
                                    <><CartCards product_id={_id} product={product_name} image={product_image} price={product_price} category={product_category} owner_id={product_owner_id}/></>)
                                  })
                            ):("")
                    }
                    
                    <hr></hr>
                    {TotalPrice !== 0 ? (<>
                        <div className='price '>
                            <p className='fs-3 px-5 '>Subtotal : ${TotalPrice}</p>
                        </div>
                        <div class="jumbotron container p-5 bg-light">
                            <h1 class="display-4">Proceed To Buy</h1>
                            <hr class="my-4"/>
                            <p>Some details.</p>
                            <p class="lead">
                                <a class="btn btn-primary btn-lg" href="#" role="button">Pay ${TotalPrice} Now </a>
                            </p>
                        </div>
                        </>
                        )
                        :(<>
                        <div class="jumbotron container p-5 bg-light">
                            <h1 class="display-4">Cart is Empty!</h1>
                            <hr class="my-4"/>
                            <p>Go Shop something.</p>
                            <a href="/product">click here to buy.</a>
                        </div>
                        </>)}

                  
                </div>

                
            </div>
            
            
        </div>
    )
}
