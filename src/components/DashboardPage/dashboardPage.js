
import { News } from "../../components/News/news";

export function DashboardPage(props){

    return(
        <div>
            

            <div className='Container'>
        { 
           props.news.results.map((story, idx) => 
           <News key={idx} story={story} numbers={idx} />
            
          
          
        )}
        </div>

            
         </div>
    )
 }

