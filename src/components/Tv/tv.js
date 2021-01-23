import Card from 'react-bootstrap/Card'
import styles from './tv.module.css'
import {Link} from 'react-router-dom'

export function TV(props){
    return(
        <Card className={styles.Card} style={{ width: '18rem'}}>
        <Link to={`/overview/${props.id}`}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.image}`}/>
        </Link>
            <Card.Body>
                <Card.Title className={styles.Title}>Trending Shows</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                 {props.television.original_name}
                </Card.Subtitle>
                <Card.Text>
                 <strong>Rating: {props.television.vote_average}</strong>
                </Card.Text>
                
                    
                
            </Card.Body>
        </Card>
    )
}

// {/* <div>
//             <h1>Trending TV</h1>
//             <h3>{props.television.original_name}</h3>
//             <h4>Average Review Score</h4>
//             <p>{props.television.vote_average}</p>
//             {/* <h1>Trending Television</h1>
//                 <p>{props.movie.original_name}</p> */}
//         </div> */}