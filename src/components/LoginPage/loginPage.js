import {useState} from 'react'
import {login} from '../../services/userService'
import styles from './loginPage.module.css'
import { LoginNews } from '../NewLog/loginNews'


export function LoginPage(props){
    const [formState, setFormState] = useState(getInitialFormState())

    function getInitialFormState(){
        return {
        email: "",
        password: ""
        }
    }
    function handleChange(event){
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event){
        console.log('submit')
        try{
            event.preventDefault();
        
            await login(formState)
        setFormState(getInitialFormState())

        props.handleSignupOrLogin()

        props.history.push('/')
        
    } catch(error){
        alert(error.message);

    }
}

function grabTopFive(arr){
    let newArr = [];
    for(let i = 0; i < 3; i++){
     newArr.push(arr[i])

} 
   return newArr;
 }
 let newUser = props.user ?
   <div className='Container'>
       { props.news.results &&
          props.news.results.map((story, idx) => 
             <LoginNews  key={idx} story={story} index={idx}/>
             )}
             </div>
        
         :
            <div className='Container'>
        { props.news.results.length &&
          grabTopFive(props.news.results).map((story, idx) => 
            <LoginNews  key={idx} story={story} index={idx}/>
            )}
            </div>
        
return(
        
        <div>
        <div>
        {newUser}
        </div>
        <div className = {styles.Container}>
            <form className={styles.field} onSubmit={handleSubmit}>
            
                <input className={styles.input}
                value={formState.email} 
                onChange={handleChange}
                name='email' 
                type='email'
                placeholder='Email' />
                <input className={styles.input}
                value={formState.password} 
                onChange={handleChange}
                name='password' 
                type='password'
                placeholder='Password' />
                <button className={styles.button}>Login</button>
            </form>
           
        </div>
       

        
       
         </div>
        
    )
    
    
}

