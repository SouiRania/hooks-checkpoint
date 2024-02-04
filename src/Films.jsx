
import React, { useState }from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Films() {
     
    const [movies,setmovies]=useState([{title:'FALLING IN LOVE',description:'When Gabriella shares a trip to a fair at the Citadine and acquires a rustic terrace in Nouvelle-Zélande, she sets it up with a kindly businessman, Jake Taylor, for repair and profit.',posterURL:'http://fr.web.img6.acsta.net/pictures/19/08/19/10/00/0449235.jpg',rating:''},
                                    {title:'SAW',description:'Saw is a 2004 American horror film directed by James Wan, in his feature directorial debut, and written by Leigh Whannell from a story by Wan and Whannell',posterURL:'https://www.themoviedb.org/t/p/original/mlllmFvodsry9QUIc3fT6Hf4pXd.jpg',rating:''},
                                    {title:'The Gold Rush',description:'In this classic silent comedy, the Little Tramp (Charles Chaplin) heads north to join in the Klondike gold rush.',posterURL:'https://image.tmdb.org/t/p/original/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',rating:''}
                                   ])







  return (
    <div style={{ display: 'flex'}}>
      {movies.map((e)=><Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={e.posterURL}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
         {e.description}
         {e.rating}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)}
    </div>
  )
}

export default Films
