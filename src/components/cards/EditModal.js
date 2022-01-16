import React,{ useState } from "react";
import { Modal,Button,InputGroup,FormControl } from 'react-bootstrap'
import axios from 'axios'
function MyVerticallyCenteredModal(props) {
  const initialState = {
    product : props.p_name,
    price : props.price,
    category : props.category,
    image : props.image,
    description : props.desc
    }

    function refreshPage() {
        window.location.reload();
      }

  const handleInputChange = (e) =>{
    const {name,value} = e.target
    setproducts({...products,[name]:value})
  }
  const [products, setproducts] = useState(initialState)
 
  const onSubmitClick = async() =>{
    if(products.product_name !== "" && products.product_price !== "" && products.product_category !== "" && products.product_description !== "" && products.product_image !== "" ){
      const uri = `http://localhost:8000/product/update/${props.p_id}`
      //const owner_id = localStorage.getItem("id")
      try{
        const Products = {
            product_name : products.product,
            product_price : products.price,
            product_category : products.category,
            product_description : products.description,
            product_image : products.image

        }
        console.log(Products)
        const UpdatedProductData = await axios.patch(uri,Products)
        const response = UpdatedProductData.data
        props.onHide()
        refreshPage()
      }
      catch(err){
        console.log("Error : ",err)
      }
    }
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Products
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light container">
          <h4 className="fs-4">Fill in the details</h4>
           <InputGroup className="mb-3">
                <FormControl
                name = "product"
                value = {products.product}
                placeholder="Product Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                name = "price"
                value = {products.price}
                placeholder="Price"
                aria-label="Price"
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                name = "category"
                value = {products.category}
                placeholder="Category"
                aria-label="Category"
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                name = "image"
                value = {products.image}
                placeholder="Image url"
                aria-label="Image"
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                name = "description"
                value = {products.description}
                placeholder="Description"
                aria-label="Description"
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onSubmitClick} >Submit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function EditModals(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" class="" style={{}} onClick={() => setModalShow(true)}>
         Update Product
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          p_id={props.p_id} p_name={props.p_name} price={props.price} category={props.category} image={props.image} desc={props.desc}
          
        />
      </>
    );
  }
  
  