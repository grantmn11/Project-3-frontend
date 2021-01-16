import {getUser, logout } from './services/userService';

import {Header} from './components/Header/header'
import {Footer} from './components/Footer/footer'
import {Story} from './components/Story/story'
import Button from 'react-bootstrap/Button'
import {Movie} from './components/Movie/movie'
import {TV} from './components/Tv/tv'
import {Book} from './components/Book/book'
import {News} from './components/News/news'

import {HomePage} from './components/HomePage/homePage'
import {DashboardPage} from './components/DashboardPage/dashboardPage'
import {SignupPage} from './components/SignupPage/signupPage'
import {LoginPage} from './components/LoginPage/loginPage'

import {useState, useEffect} from 'react';


import './App.css';
import { getPopularStory, getTopStory, getMovieData, getTvData, getBookData } from './services/news-api';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

function App(props) {
const [userState, setUserState] = useState({
  user: getUser()
});

function handleSignupOrLogin(){
  setUserState({
    user: getUser()
  });
}

function handleLogout(){
  logout();

  setUserState({ user: null })

  props.history.push('/')
}


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



// for(let i = 0; i < 10; i++){
//   newNews = data.push[i]
// }

useEffect(() => {
  newsData()
}, []);

function grabTopFive(arr) {
  console.log(arr)
  let newArr = [];
  for(let i = 0; i < 5; i++){
    newArr.push(arr[i])
  } console.log(newArr)
  return newArr;
}


  return (
    
    <div className="App">
    
      <Header handleLogout={handleLogout} user={userState.user} />
     
      <main>
      <Switch>
        <Route exact path='/' render={props =>
         <HomePage />
        } />
      
     
        <Route exact path='/dashboard' render={props =>
        userState.user ? 
         <DashboardPage />
         :
         <Redirect to='/login' />
        } />
      
      
        <Route exact path='/signup' render={props =>
         <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin} />
        } />
      
      
        <Route exact path='/login' render={props =>
         <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin}/>
        } />
      </Switch>
      
      
      <div className='Container'>
        { getTopNewsStory.results.length > 0 &&
          grabTopFive(getTopNewsStory.results).map((news, idx) => 
            <Story  key={idx} news={news} index={idx}/>
            )}
            </div>

            <div className='Container'>
        { getNewsData.results &&
          getNewsData.results.map((story, idx) => 
          <News key={idx} story={story} numbers={idx} />
            
          
          
        )}
        </div>
        
            <div className='Container'>
        {getNewMovieData.results.map((movie, idx) =>
            <Movie key={idx} movie={movie} image={movie.poster_path}/>
        )}
          </div>
          <div className='Container'>
        {getNewTvData.results.map((television, idx) =>
            <TV key={idx} television={television} image={television.poster_path}/>
        )}
        </div>
        <div className='Container'>
        {getNewBookData.results.books.map((books, idx) => 
        <Book key={idx} newBooks={books} image={books.book_image} />
        )}
        </div>
        </main>
         
            
        
      <Footer />
    </div>
  );
}

export default withRouter(App);

// image={story.multimedia[0].url}
