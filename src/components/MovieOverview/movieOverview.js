export function MovieOverview(props){
    return(
        <Card  style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.image}`} />
        
            <Card.Body>
                <Card.Title className={styles.Title}>{props.movie.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                <strong>Movie Rating: {props.movie.vote_average}</strong>
                </Card.Subtitle>
                <Card.Text>
                {props.movie.overview}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}