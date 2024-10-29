import React, { Component } from 'react'
import { Container ,Button } from 'reactstrap'
import './room.css'

export default class Room extends Component {
  render() {
    return (
      <div> 
        <Container className='con'>
          <Button className='button' color='success'> New</Button>

        </Container>
        </div>
      
    )
  }
}
