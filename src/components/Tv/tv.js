import Card from 'react-bootstrap/Card'
import styles from './tv.module.css'


export function TV(props){
    return(
        <Card className={styles.Card} style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.image}`}/>
            <Card.Body>
                <Card.Title className={styles.Title}>Trending Shows</Card.Title>
                <Card.Text>
                Title: {props.television.original_name}
                </Card.Text>
                <Card.Text>
                Movie Rating: {props.television.vote_average}
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