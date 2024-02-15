import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function MovieCard({item}) {
 
  return (
    <div style={{ display: 'flex'}}>


      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.posterURL} width="300" height="300"/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.description}
         
        </Card.Text>
        <Button variant="primary">{item.rating}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
