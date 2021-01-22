import {Movie} from '../../components/Movie/movie'

export function MoviePage(props){
    return(
        <div>
        <div className='Container'>
        {props.movies.results.map((movie, idx) =>
            <Movie key={idx} id={idx} movie={movie} image={movie.poster_path}/>
        )}
          </div>
        </div>
    )
}