import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import styles from './movie.module.css'


export function Movie(props){
    return(
        <Card className={styles.Card} style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.image}`} />
        <Link to={`/details/${props.id}`}>
                    Movie Details
                </Link>
            <Card.Body>
                <Card.Title className={styles.Title}>Trending Movies</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                {props.movie.title}
                </Card.Subtitle>
                <Card.Text>
                <strong>Movie Rating: {props.movie.vote_average}</strong>
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

//{`https://image.tmdb.org/t/p/w300${props.detail.poster_path}`}
//<Button variant="dark" href={props.newBooks.amazon_product_url}>Purchase Book</Button>

// {/* <div>
//             <h1>Trending Movies</h1>
//                 <h3>{props.movie.original_title}</h3>
//             <h4>Average Review Score</h4>
//             <p>{props.movie.vote_average}</p>
//                 {/* <p>{props.movie.name}</p> */}
//                 {/* <p>{props.movie.title}</p> */}
                
//         </div> */}