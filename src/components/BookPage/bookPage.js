import {Book} from '../../components/Book/book'

export function BookPage(props){
    return (
        <div>
        
        <div className='Container'>
        {props.books.results.books.map((books, idx) => 
        <Book key={idx} newBooks={books} image={books.book_image} />
        )}
        </div>
        
        </div>
    )
}