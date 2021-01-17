import {TV} from '../Tv/tv'

export function TvPage(props){
    return(
        <div>
         <div className='Container'>
        {props.shows.results.map((television, idx) =>
            <TV key={idx} television={television} image={television.poster_path}/>
        )}
        </div>
        </div>
    )
}