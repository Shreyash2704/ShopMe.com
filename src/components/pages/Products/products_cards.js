import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cards from '../../cards/cards'

export default function Products_cards(props) {
    
    const products = props.Products
   
    const renderProductS = products.map((product) =>{
        const {id,product_name,product_price,product_category,product_image,product_description} = product 
        return(
            <>
            <Cards p_name={product_name} price={product_price} category={product_category} image={product_image}/>
            </>
    )
    })
    return (
        <div>
            {renderProductS}
        </div>
    )
}
