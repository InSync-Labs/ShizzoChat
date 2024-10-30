import React, { useState } from 'react';
import {Navbar,NavbarBrand,ListGroup,ListGroupItem,Card, CardBody,Button, CardTitle, CardText} from 'reactstrap';
import './Navbar.css';

var rooms =[
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:2, name:"Agent Odası", uyeler:10}

];

function Navi() {
  return (
    <div className='main-div'>
      <Navbar className='navbar'>
        <NavbarBrand href="/">Shizzo Chat</NavbarBrand>
        </Navbar>
        <ListGroup>
            {rooms.map(room=>(
                <ListGroupItem key={room.id} className='list-group-item'>
                    <Card>
                            <CardTitle tag="h6">{room.name}</CardTitle>
                            <CardText>Katılımcı Sayısı: {room.uyeler}</CardText>
                            <Button style={{margin:2}} size='sm'>Odaya Katıl</Button>
                    </Card>
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
  );
}

export default Navi;
