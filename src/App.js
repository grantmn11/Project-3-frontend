import {News} from './components/News/news'
import {Story} from './components/Story/story'
import {Movie} from './components/Movie/movie'
import {TV} from './components/Tv/tv'
import {Book} from './components/Book/book'
import {Header} from './components/Header/header'
import {Footer} from './components/Footer/footer'
import {useState, useEffect} from 'react';

import './App.css';
import { getPopularStory, getTopStory, getMovieData, getTvData, getBookData } from './services/news-api';

function App() {

const [getNewsData, setNewsData] = useState({
  results: []
  
})

const [getTopNewsStory, setTopStory] = useState({
  results: []
   
})

const [getNewMovieData, setMovieData] = useState({
  results: []
})

const [getNewTvData, setNewTvData] = useState({
  results: []
})

const [getNewBookData, setNewBookData] = useState({
  results: {
    books: []
  }
    
})

async function newsData(){
  const data = await getTopStory()
  setNewsData(data);
  const story = await getPopularStory()
  setTopStory(story);
  const movies = await getMovieData()
  setMovieData(movies);
  const television = await  getTvData()
  setNewTvData(television);
  const book = await getBookData()
  setNewBookData(book);
}

useEffect(() => {
  newsData()
}, []);

  return (
    <div className="App">
      <Header />
      <main>
      <div className='Container'>
        { getNewsData.results &&
          getNewsData.results.map((story, idx) => 
          <News key={idx} story={story} />
        )}
        </div>
          
        {getTopNewsStory.results.map((news, idx) => 
            <Story  key={idx} news={news} />
            )}

        {getNewMovieData.results.map((movie, idx) =>
            <Movie key={idx} movie={movie} image={movie.poster_path}/>
        )}

        {getNewTvData.results.map((television, idx) =>
            <TV key={idx} television={television} image={television.poster_path}/>
        )}

        {getNewBookData.results.books.map((books, idx) => 
        <Book key={idx} newBooks={books} image={books.book_image} />
        )}
        </main>
      <Footer />
    </div>
  );
}

export default App;

// image={story.multimedia[0].url}
