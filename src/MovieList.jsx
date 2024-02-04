import React from 'react'
import MovieCard from './MovieCard';
import { useRef,useState }from 'react'
import AddMovie from './AddMovie';

function MovieList({}) {
  const [movies,setmovies]=useState([{title:'FALLING IN LOVE',description:'When Gabriella shares a trip to a fair at the Citadine and acquires a rustic terrace in Nouvelle-Zélande, she sets it up with a kindly businessman, Jake Taylor, for repair and profit.',posterURL:'http://fr.web.img6.acsta.net/pictures/19/08/19/10/00/0449235.jpg',rating:'8/10'},
                                    {title:'SAW',description:'Saw is a 2004 American horror film directed by James Wan, in his feature directorial debut, and written by Leigh Whannell from a story by Wan and Whannell',posterURL:'https://www.themoviedb.org/t/p/original/mlllmFvodsry9QUIc3fT6Hf4pXd.jpg',rating:'5/10'},
                                    {title:'The Gold Rush',description:'In this classic silent comedy, the Little Tramp (Charles Chaplin) heads north to join in the Klondike gold rush.',posterURL:'https://image.tmdb.org/t/p/original/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',rating:'6/10'}
                                    ])


 const [filtredMovie,setFiltred]=useState(movies)
  const R5=useRef()
  const R6=useRef()

  const filterdMovie=()=>{
    const filtredList=movies.filter(e=>e.title.toUpperCase().includes(R5.current.value.toUpperCase()))
    setFiltred(filtredList)
  }
  const filterdMoviebyrate=()=>{
    const filtredList=movies.filter(e=>e.rating.toUpperCase().includes(R6.current.value.toUpperCase()))
    setFiltred(filtredList)
  }
  return (
    <div style={{ display: 'flex', alignItems:"center",flexDirection:"column",padding:"2vw",gap:"40px"}}> 
    <h3>Liste of Movies</h3>
    <input ref={R5} type='text' placeholder='search for a product' onChange={filterdMovie}></input>
    <input ref={R6} type='text' placeholder='search for a rate' onChange={filterdMoviebyrate}></input>
    <div style={{ display: 'flex' , gap:"40px"}}>
       {filtredMovie.map(e=><MovieCard item={e}></MovieCard>)}
   
      <AddMovie movies={movies} setmovies={setFiltred}></AddMovie>
      </div>
    </div>
  )
}

export default MovieList
