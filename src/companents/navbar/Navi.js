import React, { useState, useEffect  } from 'react';
import {Navbar,NavbarBrand,ListGroup,ListGroupItem,Card, CardBody,Button, CardTitle, CardText} from 'reactstrap';
import './Navbar.css';

function Navi() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
        .then(response => response.json())
        .then(data => setRooms(data))
        .catch(error => console.error("Hata:", error));
}, []);
  return (
    <div className='main-div'>
      <Navbar className='navbar'>
        <NavbarBrand href="/">Shizzo Chat</NavbarBrand>
        </Navbar>
        <ListGroup>
            {rooms.map(room=>(
                <ListGroupItem key={room.RoomID} className='list-group-item'>
                    <Card>
                            <CardTitle tag="h6">{room.RoomName}</CardTitle>
                            <CardText>Katılımcı Sayısı: {room.MemberCount}</CardText>
                            <Button style={{margin:2}} size='sm'>Odaya Katıl</Button>
                    </Card>
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
  );
}

export default Navi;
