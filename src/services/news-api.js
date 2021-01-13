const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key='

const NEW_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key='

const TV_URL = 'https://api.themoviedb.org/3/trending/tv/week?api_key='

const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key='

const BOOK_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key='

const NYAPI_KEY = `${process.env.REACT_APP_API_KEY}`

const MOVIE_KEY = `${process.env.REACT_APP_API_KEY2}`

console.log('API', MOVIE_KEY)

export function getTopStory(){
    return fetch(BASE_URL + NYAPI_KEY).then(res => res.json())
}

export function getPopularStory(){
    return fetch(NEW_URL + NYAPI_KEY).then(res => res.json())
}

export function getTvData(){
    return fetch(TV_URL + MOVIE_KEY + '&language=en-US&page=1').then(res => res.json())
}

export function getMovieData(){
    return fetch(MOVIE_URL + MOVIE_KEY + '&language=en-US&page=1').then(res => res.json())
}

export function getBookData(){
    return fetch(BOOK_URL + NYAPI_KEY).then(res => res.json())
}
