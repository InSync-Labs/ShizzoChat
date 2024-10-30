import React, { useState } from "react";
import { Button, Card, Modal, ModalHeader, Input ,ModalBody, ModalFooter } from "reactstrap";
import "./room.css";
function Room() {
  const [buttons, setButtons] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  
  const addButton = () => {
    setButtons([...buttons, `kişi ${buttons.length + 1}`]);
  };
  

  return (
    <Card>
      <div className="allmember">
        {buttons.map((button, index) => (
          <Button className="member" style={{ margin: 3 }}color="success" key={index}>{button}</Button> //kayıtlı kullanıcılar
        ))}
      
        <Button onClick={toggle}> + </Button>
        <Modal isOpen={modal} toggle={toggle} centered>
          <ModalHeader toggle={toggle}>Kullanıcı Panel</ModalHeader>
          <ModalBody>
          <Input bsSize="sm" valid  placeholder="Kullanıcı Adı Giriniz "/>
          </ModalBody>
          <ModalFooter>
          <Button color="success" onClick={addButton}>Ekle</Button>
          </ModalFooter>
        </Modal>
      </div>
    </Card>
  );
}

export default Room;
