import React from 'react'
import { Card,Button } from 'react-bootstrap'

export default function DCards(props) {
    return (
        <div>
           <Card style={{width:"25rem"}}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Dx8VJrVryquotgjF5F3FnwHaF6?pid=ImgDet&w=820&h=655&rs=1" />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>@{props.id}</Card.Text>
                        <Card.Text><i class="fa fa-cart-plus" aria-hidden="true"></i> : {props.business_name}</Card.Text>
                        <Card.Text><i class="fa fa-phone mr-2" aria-hidden="true"></i>  : {props.business_contact}</Card.Text>
                        <Card.Text><i class="fa fa-phone mr-2" aria-hidden="true"></i>  : {props.personal_contact}</Card.Text>
                        <Card.Text><i class="fa fa-envelope" aria-hidden="true"></i> : {props.email}</Card.Text>
                        <Card.Text><i class="fa fa-address-card" aria-hidden="true"></i> : {props.personal_address}</Card.Text>
                        <Card.Text><i class="fa fa-building" aria-hidden="true"></i> : {props.business_address}</Card.Text>
                        <Card.Text><i class="fa fa-calendar" aria-hidden="true"></i> : {props.dob}</Card.Text>
                        <Card.Text><i class="fa fa-id-card" aria-hidden="true"></i> : {props.adhaar_number}</Card.Text>
                        
                    </Card.Body>
                </Card>
        </div>
    )
}
