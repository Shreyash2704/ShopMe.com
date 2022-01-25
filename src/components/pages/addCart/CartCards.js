import axios from 'axios'
import React,{useState} from 'react'

export default function CartCards(props) {
    
    const [businessName, setbusinessName] = useState("")
    const getAdminName = async() =>{
        const admin_id = props.owner_id
        const admin = await axios.get(`https://ecom-website-001.herokuapp.com/auth/admin/${admin_id}`)
        const response = admin.data.business_name
        setbusinessName(response)
    }
    function refreshPage() {
        window.location.reload();
      }
    const removeProduct = async() =>{
        const data = {
            customer_id : localStorage.getItem('id'),
            product_id : props.product_id
        }
        const removeData = await axios.post("https://ecom-website-001.herokuapp.com/add_cart/removeProduct",data)
        const response = removeData.data
        refreshPage()
    }
    getAdminName()
    return (
        <div className="card mb-1">
            <div className='row'>
                <div className='col-4  col-sm-4 col-md-4 col-lg-2'>
                    <img className="img-fluid p-1 p-sm-4 " alt="300x300" src={props.image} />
                </div>
                <div className="col-4 offset-md-2 card-body">
                    <blockquote className="blockquote mb-0">
                    <p className='text-muted fs-6'>{businessName}</p>
                    <p className=''>{props.product} </p>
                    <footer className="blockquote-footer fs-6"><cite title="Source Title">{props.category}</cite></footer>
                    </blockquote>
                </div>
                <div className='col-3 col-sm-2  text-center'>
                    <p className='fs-6'>Price</p>
                <p className='fs-6'>{props.price}</p>
                <button className='btn btn-danger' onClick={removeProduct}><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
        
    )
}
