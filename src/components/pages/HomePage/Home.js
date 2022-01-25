import React,{useState,useEffect} from 'react'
import Navbars from '../Navbar'
import axios from 'axios'
import TrendingCards from './TrendingCards'
export default function Home() {

    const [products, setproducts] = useState([])
    console.log(products)
    const LoadData = async() =>{
          const data = await axios.get('https://ecom-website-001.herokuapp.com/product/3')
          .catch(err =>{
              console.log("Error Occured : ",err)
          })
          setproducts(data.data)
          
    }
    
    useEffect(() => {
        LoadData()
        
    }, [])
    return (
        <div>
            <Navbars />
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Shop Me.COM</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Find your all desired products at most reasonable price!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/product">Get Started</a>
                                    <a class="btn btn-outline-light btn-lg px-4" href="/about">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="https://th.bing.com/th/id/R.d9809af79fdd5cad91dc65b47dee9ca5?rik=2%2flNxRf14q1xqQ&riu=http%3a%2f%2fsmallbizgrowth.net%2fwp-content%2fuploads%2f2018%2f06%2f20180607033046-79.jpg&ehk=YftgSqq1kDsVKR6IcwwFqlX26nhhwH9i9rJkcIFfWw0%3d&risl=&pid=ImgRaw&r=0" alt="..." /></div>
                    </div>
                </div>
            </header>

            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">All Branded and Quality Products</h2>
                                <p class="lead fw-normal text-muted mb-5">Our Sites has all categories of products.Electronics, Fashion ,Sports Shoes, Stylist Watches etc.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <h1 className='mb-2'>Top Trending</h1><hr/>
                        {products !== [] ? (
                            products.map((product) =>{
                                return(<TrendingCards _id={product._id} id={product.product_owner_id} product_name={product.product_name} image={product.product_image} description={product.product_description} category={product.product_category} />)
                            })
                        ) : ("")}
                        
                        
                    </div>
                    
                    
                </div>
            </section>
        </div>
    )
}
