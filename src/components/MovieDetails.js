import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export function MovieDetails(props){
    console.log(props.movie)
    return(
        <div className='Container'>
        <Card  style={{ width: '18rem'}} >
        <Link to ='/movies' >
        <Card.Img variant="top"  src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />
        </Link>
            <Card.Body>
                <Card.Title >{props.movie.title}</Card.Title>
                
                <Card.Text >
                {props.movie.overview}
                </Card.Text>
                
            </Card.Body>
            
                
            
        </Card>
        </div>
    )
}