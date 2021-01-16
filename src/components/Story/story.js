import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './story.module.css'
export function Story(props){

    return(
        
        <Card className={styles.Card} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={`${props.news.media[0]['media-metadata'][2].url}`}/>
            <Card.Body>
                <Card.Title className={styles.Title}>{props.news.title}</Card.Title>
                <Card.Text>
                    {props.news.adx_keywords}
                </Card.Text>
                <Button variant="dark" href={props.news.url}>Most Popular Article</Button>
            </Card.Body>
        </Card>
        
    )
}


        // 