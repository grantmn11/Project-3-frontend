import {useState} from 'react'
import {login} from '../../services/userService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Story} from '../../components/Story/story'
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
            //  { 
            //     props.news.results.map((story, idx) => 
            //     <News key={idx} story={story} numbers={idx} />
                 
               
               
            //  )}
        
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
            
                <input 
                value={formState.email} 
                onChange={handleChange}
                name='email' 
                type='email'
                placeholder='Email' />
                <input 
                value={formState.password} 
                onChange={handleChange}
                name='password' 
                type='password'
                placeholder='Password' />
                <button>Login</button>
            </form>
           
        </div>
        {/* <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail"   onChange={handleChange}>
    <Form.Label  value={formState.email} >Email address</Form.Label>
    <Form.Control  type="email"  placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword"  onChange={handleChange}>
    <Form.Label   value={formState.password}>Password</Form.Label>
    <Form.Control type="password"   placeholder="Password" />
  </Form.Group>
    <Button variant="primary" type='submit'>
    Login
  </Button>
</Form> */}

        
       
         </div>
        
    )
    console.log(props)
    
}

