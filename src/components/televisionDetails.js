import Card from 'react-bootstrap/Card'

export function TelevisionDetails(props){
    return(
        <div className='Container'>
        <Card  style={{ width: '18rem'}} >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.television.poster_path}`} />
        
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