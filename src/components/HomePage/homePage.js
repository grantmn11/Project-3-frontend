import {Story} from '../Story/story'

export function HomePage(props){
    
    return(
        <div>
            <div className='Container'>
        { props.story.results.length > 0 &&
          props.story.results.map((news, idx) => 
            <Story  key={idx} news={news} index={idx}/>
            )}
            </div>
        </div>
    )
}

// function grabTopFive(arr) {
//     console.log(arr)
//     let newArr = [];
//     for(let i = 0; i < 5; i++){
//       newArr.push(arr[i])
//     } 
//     return newArr;
//   }
{/* <div>
            <div className='Container'>
        { props.story.results.length > 0 &&
          grabTopFive(props.story.results).map((news, idx) => 
            <Story  key={idx} news={news} index={idx}/>
            )}
            </div>
        </div> */}