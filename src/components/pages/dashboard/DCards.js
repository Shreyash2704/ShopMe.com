import React from 'react'
import { Card,Button } from 'react-bootstrap'

export default function DCards(props) {
    return (
        <div>
           <Card style={{width:"25rem"}}>
                    <Card.Img variant="top" src="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>@{props.id}</Card.Text>
                        <Card.Text><i class="fa fa-phone mr-2" aria-hidden="true"></i> : {props.phone}</Card.Text>
                        <Card.Text><i class="fa fa-envelope" aria-hidden="true"></i> : {props.email}</Card.Text>
                    </Card.Body>
                </Card>
        </div>
    )
}
