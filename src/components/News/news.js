
import Card from 'react-bootstrap/Card'
import styles from './news.module.css'
import  Button  from 'react-bootstrap/Button'
export function News(props){
    
    return (
        <div className={styles.Container} >
        <Card style={{ width: '18rem'}} >
        <Card.Img  variant="top" src={`${props.story['multimedia'][0].url}`}/>
            <Card.Body>
                <Card.Title >{props.story.title}</Card.Title>
                <Card.Text>
                    {props.story.abstract}
                </Card.Text>
                <Button variant="dark" href={props.story.url}>News Article</Button>
            </Card.Body>
        </Card>
        
        
        </div>
    )
}



