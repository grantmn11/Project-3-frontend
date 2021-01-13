import Card from 'react-bootstrap/Card'

import styles from './movie.module.css'


export function Movie(props){
    return(
        <Card className={styles.Card} style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${props.image}`}/>
            <Card.Body>
                <Card.Title className={styles.Title}>Trending Movies</Card.Title>
                <Card.Text>
                Title: {props.movie.title}
                </Card.Text>
                <Card.Text>
                Movie Rating: {props.movie.vote_average}
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