import React, {  } from "react";
import {
  Navbar,
  NavbarBrand,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  Button,
} from "reactstrap";
import "./Navbar.css";

var rooms = [
  { id: 1, name: "Toplantı Odası", uyeler: 5 },
  { id: 1, name: "Toplantı Odası", uyeler: 5 },
  { id: 1, name: "Toplantı Odası", uyeler: 5 },
  { id: 1, name: "Toplantı Odası", uyeler: 5 },
  { id: 1, name: "Toplantı Odası", uyeler: 5 },
  { id: 1, name: "Toplantı Odası", uyeler: 5 },
  { id: 2, name: "Agent Odası", uyeler: 10 },
];

function Example() {
  return (
    <div className="main-div">
      <Navbar className="navbar">
        <NavbarBrand href="/">Shizzo Chat</NavbarBrand>
      </Navbar>
      <ListGroup>
        {rooms.map((room) => (
          <ListGroupItem key={room.id} className="list-group-item">
            <Card>
              <CardBody>
                <h5>{room.name}</h5>
                <p>Katılımcı Sayısı: {room.uyeler}</p>
                <Button>Odaya Katıl</Button>
              </CardBody>
            </Card>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default Example;
