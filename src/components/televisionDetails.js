import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

export function TelevisionDetails(props){
    return(
        <div className='Container'>
        <Card  style={{ width: '18rem'}} >
        <Link to='/shows'>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.television.poster_path}`} />
        </Link>
        
            <Card.Body>
                <Card.Title >{props.television.original_name}</Card.Title>
                
                <Card.Text >
                {props.television.overview}
                </Card.Text>
                
            </Card.Body>
            
                
            
        </Card>
        </div>
    )
}