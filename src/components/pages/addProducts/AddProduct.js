import React,{ useEffect,useState } from 'react'
import Modals from './Modals'
import Navbars from '../Navbar'
import Cards from '../../cards/cards'
import './addproducts.css'
import axios from 'axios'

export default function AddProduct() { 

   
    const [products, setproducts] = useState([])
    const loadProducts = async() =>{
        const admin_id = localStorage.getItem('id')
        const products = await axios.get(`https://ecom-website-001.herokuapp.com/product/admin/${admin_id}`)
        const response = products.data
        setproducts(response)
    }

    useEffect(() => {
        loadProducts()
    }, [])
    return (
        <div>
            <Navbars />
            <div className='modal_element mt-4'>
                <Modals />
            </div>
            
            <div className='container'>
                <div className='row'>
                {products !== [] ? (
                products.map((product) =>{
                    const {_id,product_name,product_price,product_category,product_image,product_description,product_owner_id} = product 
                        return(
                            <>
                            
                            <Cards p_id={_id} p_name={product_name} price={product_price} category={product_category} image={product_image} desc={product_description} owner_id={product_owner_id} editing="true" deleting="true"/>
                            
                            </>
                             )
                    })
                )
                :
                ""
            }
                   
                </div>
            </div>
            
            
        </div>
    )
}
