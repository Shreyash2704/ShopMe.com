import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import EditModals from './EditModal'
export default function Cards(props) {

    function refreshPage() {
        window.location.reload();
      }
      const [business_name, setbusiness_name] = useState("")
      const [owner, setowner] = useState("")
      const adminData = async() =>{
          const owner_id = props.owner_id
          const owner_data = await axios.get(`https://ecom-website-001.herokuapp.com/auth/admin/${owner_id}`)
          setbusiness_name(owner_data.data.business_name)
          setowner(owner_data.data.name)
  
      }
      useEffect(() => {
          adminData()
      }, [])
    const deleteData = async() =>{
         const p_id = props.p_id
         try{
             const deleteProduct = await axios.delete(`https://ecom-website-001.herokuapp.com/product/delete/${p_id}`)
             const response = deleteProduct.data
             refreshPage()
         }
         catch(err){
             console.log(err)
         }
    }
    return (
        <div className='col-sm-12 col-md-6 col-xl-4 content-parent'>
            <div id={`${props.p_id}`} className="card mt-3" style={{width : "18rem"}}>
                <img style={{ width:"80%",margin:"10%", height:"auto"}} src={props.image} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">{props.category}</div>
                    <a class="text-decoration-none link-dark" href={`/details/${props.p_id}`}><p className='fs-4'>{props.p_name}</p></a>
                    <p className="card-text text-muted">{props.price}</p>
                    {/*<button style={{display: props.editing === "true" ? "":"none" }} onClick={EditData} className='btn btn-primary'>Edit</button>*/}
                    {props.editing === "true" ?
                     (<EditModals p_id={props.p_id} p_name={props.p_name} price={props.price} category={props.category} image={props.image} desc={props.desc}/>) 
                     :
                      ("")}
                    {props.deleting === "true" ? 
                     (<Button onClick={deleteData}>delete</Button>):("")

                    }
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
