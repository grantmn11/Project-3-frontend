import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './story.module.css'
import Image from '../../Image/NYTimes.jpg'

export function Story(props){
    console.log(props.news)
    let image = props.news.media.length > 0 ? props.news['media'][0]['media-metadata'][2].url : Image
    return(
        
        <Card className={styles.Card} style={{ width: '18rem'}}>
             <Card.Img variant="top" src={`${image}`}/> 
            <Card.Body>
                <Card.Title className={styles.Title}>{props.news.title}</Card.Title>
                <Card.Text>
                    {props.news.abstract}
                </Card.Text>
                <Button variant="dark" href={props.news.url}>Most Popular Article</Button>
            </Card.Body>
        </Card>
        
        
    )
}


        