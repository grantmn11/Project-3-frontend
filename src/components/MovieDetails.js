import {Movie} from './Movie/movie'

export function MovieDetails(props){
    return(
        <div className='Container'>
        {props.movies.results.map((movie, idx) =>
            <Movie key={idx} index={idx} movie={movie} image={movie.poster_path}/>
        )}
          </div>
    )
}