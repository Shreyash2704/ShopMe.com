import React, { useEffect,useState } from 'react'
import Navbars from '../Navbar'
import './details.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Alert,Button } from 'react-bootstrap'
export default function Details() {
    const initialState = {
       
    }
    const [products, setproduct] = useState(initialState)
    const [business_name, setbusiness_name] = useState("")
    const [show, setShow] = useState(false);
    const [message, setmessage] = useState("")
    const params = useParams()
    const p_id = params.id
    const loadData = async() =>{
        
        const product = await axios.get(`https://ecom-website-001.herokuapp.com/product/details/${p_id}`)
        .catch(err =>{
            console.log("Error Occured : ",err)
        })
        
        setproduct(product.data.data)
        const owner_id = product.data.data.product_owner_id
        const owner_data = await axios.get(`https://ecom-website-001.herokuapp.com/auth/admin/${owner_id}`)
        
        setbusiness_name(owner_data.data.business_name)
    }

    const addProductToCart = async() =>{
        const data = {
            customer : localStorage.getItem('id'),
            product : p_id
        }
        
        const addProduct = await axios.post('https://ecom-website-001.herokuapp.com/add_cart/',data)
        const response = addProduct.data
        
        setShow(response.cartSaved)
        setmessage(response.message)

    }

    function SucessAlert() {
        
      
        if (message !== "") {
          return (
            <Alert variant={show === true ?('success'):('danger')} onClose={() => setmessage("")} dismissible>
              <Alert.Heading>Product Added to the Cart.</Alert.Heading>
              <p>
              </p>
            </Alert>
          );
        }
        return "";
      }

    useEffect(() => {
        loadData()
        console.log(products)
    }, [p_id])
    console.log(products)
    
    return (
        <div>
            <Navbars />
            <div className='container mt-3 '>
            <SucessAlert />

                <div className='row'>
                    <div className=' col-xl-4 col-lg-4 col-md-6 col-sm-12 content-parent'>
                        <div className='content-child'>
                            <img src={products.product_image} alt=''></img>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-7 col-md-6 col-sm-12 '>
                        <div className='content-child'>
                        <p>{business_name}</p>
                            <p className='fs-2'>{products.product_name}</p>
                            <p className='fs-6 '>{products.product_price}</p>
                            <p className='fs-6 text-muted'>{products.product_category}</p>
                            <p className='fs-4'>{products.product_description}</p>
                            
                            <div className='content-parent col-12'>
                            <button className='btn btn-primary  details-btn' onClick={addProductToCart}><h6>Add to cart</h6></button>
                            
                            </div>
                            
                            <div className='content-parent mt-2'>
                            <button className='btn btn-danger details-btn mb-5' >Buy</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
