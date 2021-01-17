import {getUser, logout } from './services/userService';

import {Header} from './components/Header/header'
import {Footer} from './components/Footer/footer'
import {Story} from './components/Story/story'
import Button from 'react-bootstrap/Button'
import {Movie} from './components/Movie/movie'
import {TV} from './components/Tv/tv'
import {Book} from './components/Book/book'
import {News} from './components/News/news'
import {MoviePage} from './components/MoviePage/moviePage'
import {BookPage} from './components/BookPage/bookPage'
import {TVPage} from './components/TVPage/tvPage'

import {HomePage} from './components/HomePage/homePage'
import {DashboardPage} from './components/DashboardPage/dashboardPage'
import {SignupPage} from './components/SignupPage/signupPage'
import {LoginPage} from './components/LoginPage/loginPage'

import {useState, useEffect} from 'react';


import './App.css';
import { getPopularStory, getTopStory, getMovieData, getTvData, getBookData } from './services/news-api';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { TvPage } from './components/TVPage/tvPage';

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




  return (
    
    <div className="App">
    
      <Header handleLogout={handleLogout} user={userState.user} />
     
      <main>
      <Switch>
        <Route exact path='/' render={props =>
         <HomePage {...props} story={getTopNewsStory} />
        } />
      
     
        <Route exact path='/news' render={props =>
        userState.user ? 
         <DashboardPage {...props} news={getNewsData}/>
         :
         <Redirect to='/login' />
        } />
      
      
        <Route exact path='/signup' render={props =>
         <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin} />
        } />
      
      
        <Route exact path='/login' render={props =>
         <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin}/>
        } />

        <Route exact path='/movies' render={props =>
          <MoviePage {...props} movies={getNewMovieData} />
        }
          />

          <Route exact path='/books' render={props =>
          <BookPage {...props} books={getNewBookData} />
          
          } />

          <Route exact path='/shows' render={props =>
          <TvPage {...props} shows={getNewTvData} />

          } />

          
        
      </Switch>
      
      
      

            
        
            
         
        </main>
         
            
        
      <Footer />
    </div>
  );
}

export default withRouter(App);

// image={story.multimedia[0].url}
