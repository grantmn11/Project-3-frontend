import { Link } from "react-router-dom";
import styles from './header.module.css'

export function Header(props){
    return(
      <header className={styles.Header}>
        <Link to='/'>
            <h1>Stop Searching</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to='signup'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to=''>Logout</Link>
                </li>
            </ul>
        </nav>
      </header>  
    )
}