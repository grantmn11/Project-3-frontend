import {useState} from 'react'
import {signup} from '../../services/userService'
import { NewSign } from '../NewSign/newSign';
import styles from "./signupPage.module.css";


export function SignupPage(props){
    const [formState, setFormState] = useState(getInitialFormState())

    function getInitialFormState(){
        return {
        firstName: "",
        lastName: "",
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
        try{
            event.preventDefault();
        
            await signup(formState)

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
       { 
          props.books.results.books.map((books, idx) => 
             <NewSign  key={idx} newBooks={books} image={books.book_image}/>
             )}
             </div>
            //  { 
            //     props.news.results.map((story, idx) => 
            //     <News key={idx} story={story} numbers={idx} />
                 
               
               
            //  )}
        
         :
            <div className='Container'>
        { props.books.results.books.length > 0 &&
          grabTopFive(props.books.results.books).map((books, idx) => 
            <NewSign  key={idx} newBooks={books} image={books.book_image}/>
            )}
            </div>



    return(
        <div>
        {newUser}
        <div className={styles.Container}>
            <form className={styles.field} onSubmit={handleSubmit}>
                <input className={styles.input}
                value={formState.firstName}
                 onChange={handleChange} 
                 name='firstName' 
                 type='text' 
                 placeholder='First Name'
                 />
                <input className={styles.input}
                value={formState.lastName} 
                onChange={handleChange} 
                name='lastName' 
                type='text' 
                placeholder='Last Name'
                />
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
                <button className={styles.button}>Sign Up</button>
            </form>
        </div>
        </div>
    )
    }
