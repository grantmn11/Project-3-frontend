import Card from 'react-bootstrap/Card'
import styles from './loginNews.module.css'
import  Button  from 'react-bootstrap/Button'
import {CardDeck } from 'react-bootstrap'
export function LoginNews(props){
    
    return (
        <div>
        <Card style={{ width: '18rem'}} >
        <Card.Img  variant="top" src={`${props.story['multimedia'][0].url}`}/>
            <Card.Body>
                <Card.Title className={styles.Title} >{props.story.title}</Card.Title>
                <Card.Text>
                    {props.story.abstract}
                </Card.Text>
                <Button variant="dark" href={props.story.url}>News Article</Button>
            </Card.Body>
        </Card>
        
        </div>
    )
}
{/* <Card className={styles.Card} style={{ width: '18rem'}}>
             <Card.Img variant="top" src={`${props.news['media'][0]['media-metadata'][2].url}`}/> 
            <Card.Body>
                <Card.Title className={styles.Title}>{props.news.title}</Card.Title>
                <Card.Text>
                    {props.news.abstract}
                </Card.Text>
                <Button variant="dark" href={props.news.url}>Most Popular Article</Button>
            </Card.Body>
        </Card> */}