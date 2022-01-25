import React,{ useState } from "react";
import { Modal,Button,InputGroup,FormControl } from 'react-bootstrap'
import axios from 'axios'
function MyVerticallyCenteredModal(props) {
  const initialState = {
    product : "",
    price : "",
    category : "",
    image : "",
    description : ""
    }
  const handleInputChange = (e) =>{
    const {name,value} = e.target
    setproducts({...products,[name]:value})
  }
  const [products, setproducts] = useState(initialState)
  
  function refreshPage() {
    window.location.reload();
  }

  const onSubmitClick = async() =>{
    if(products.product_name !== "" && products.product_price !== "" && products.product_category !== "" && products.product_description !== "" && products.product_image !== "" ){
      const uri = "https://ecom-website-001.herokuapp.com/product/"  
      const owner_id = localStorage.getItem("id")
      try{
        const Products = {
          owner_id : owner_id,
          product : products.product,
          price : products.price,
          category : products.category,
          description : products.description,
          image : products.image

        }
        const savedProductData = await axios.post(uri,Products)
        const response = savedProductData.data
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
  
  export default function Modals(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" style={{}} onClick={() => setModalShow(true)}>
         Want to add product?
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          
        />
      </>
    );
  }
  
  