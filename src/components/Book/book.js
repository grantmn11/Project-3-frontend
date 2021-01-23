import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './book.module.css'

export function Book(props){
    return(
        <Card className={styles.Card} style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`${props.image}`}/>
            <Card.Body>
                <Card.Title className={styles.Title}><strong>{props.newBooks.title}</strong></Card.Title>
                <Card.Text>
                    {props.newBooks.description}
                </Card.Text>
                <Button variant="dark" href={props.newBooks.amazon_product_url}>Purchase Book</Button>
            </Card.Body>
        </Card>
    )
}
