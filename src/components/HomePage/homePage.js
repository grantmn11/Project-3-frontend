 import {Story} from '../Story/story'

 export function HomePage(props){
   console.log(props.user)
      function grabTopFive(arr){
     let newArr = [];
    for(let i = 0; i < 5; i++){
      newArr.push(arr[i])

} 
    return newArr;
  }
  let newUser = props.user ?
    <div className='Container'>
        { props.story.results &&
           props.story.results.map((news, idx) => 
             <Story  key={idx} news={news} index={idx}/>
             )}
             </div>
         
         :
            <div className='Container'>
        { props.story.results.length > 0 &&
          grabTopFive(props.story.results).map((news, idx) => 
            <Story  key={idx} news={news} index={idx}/>
            )}
            </div>
         
        
        return(
          <>
          {newUser}
          </>
        )

        // <div>
        //     <div className='Container'>
        // { props.story.results &&
        //   props.story.results.map((news, idx) => 
        //     <Story  key={idx} news={news} index={idx}/>
        //     )}
        //     </div>
        // </div>
         
 }

