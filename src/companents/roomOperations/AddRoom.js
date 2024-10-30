import React, { Component, useState } from 'react'

 function AddRoom({ setRooms }) {
  var [rooms, setLocalRooms] = useState([
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:1, name:"Toplantı Odası", uyeler:5},
    {id:2, name:"Agent Odası", uyeler:10}
  ]);

  React.useEffect(()=>{
    setRooms(rooms);
  },[rooms,setRooms])
}

export default AddRoom;