import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function TrendingCards(props) {
    const [business_name, setbusiness_name] = useState("")
    const [owner, setowner] = useState("")
    
    const adminData = async() =>{
        const owner_id = props.id
        const owner_data = await axios.get(`https://ecom-website-001.herokuapp.com/auth/admin/${owner_id}`)
        setbusiness_name(owner_data.data.business_name)
        setowner(owner_data.data.name)

    }
    useEffect(() => {
        adminData()
    }, [])
    return (
        <div class="col-lg-4 mb-5">
            <div class="card h-100 shadow border-0">
                <div> 
                <img class="card-img-top p-5" src={props.image} alt="..." />
                </div>
                
                <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">{props.category}</div>
                    <a class="text-decoration-none link-dark stretched-link" href={`/details/${props._id}`}><h5 class="card-title mb-3">{props.product_name}</h5></a>
                    <p class="card-text mb-0 text-truncate">{props.description}</p>
                </div>
                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                            <div class="small">
                                <div class="fw-bold">{owner}</div>
                                <div class="text-muted">{business_name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
