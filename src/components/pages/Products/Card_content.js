import React,{ useEffect,useState } from 'react'
import Cards from '../../cards/cards'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { addProduct } from '../../../redux/action/action'
//import Products_cards from './products_cards'

export default function Content() {
    
    const dispatch = useDispatch()
    const [products, setproducts] = useState([])
    
    const LoadData = async() =>{
          const data = await axios.get('https://ecom-website-001.herokuapp.com/product')
          .catch(err =>{
              console.log("Error Occured : ",err)
          })
         
          setproducts(data.data)
          dispatch(addProduct(data))
          
    }
    
    useEffect(() => {
        LoadData()
       
    }, [])
   
    return (
        <>
        <div className='mt-5'>
            <div className='row'>
            {products !== [] ? (
                products.map((product) =>{
                    const {_id,product_name,product_price,product_category,product_image,product_description} = product 
                        return(
                            <>
                            
                            <Cards p_id={_id} p_name={product_name} price={product_price} category={product_category} image={product_image}/>
                            
                            </>
                             )
                    })
                )
                :
                ""
            }
            </div>
        </div>
        </>
        
        
    )
}
