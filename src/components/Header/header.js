import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import  Navbar  from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from './header.module.css'

export function Header(props){
    let drop = props.user ?
    <Navbar bg="dark" variant="dark">
    <NavDropdown title="All" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/news">News</NavDropdown.Item>
        <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
        <NavDropdown.Item href="/books">Books</NavDropdown.Item>
        <NavDropdown.Item href="/shows">Shows</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Home</NavDropdown.Item>
      </NavDropdown> 
      </Navbar>
      :
      <Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-info">Search</Button>
</Form>
      
    return(

        <Navbar bg="dark" variant="dark">
<Navbar.Brand href="/" style={{fontSize: 24}}><strong>One Stop</strong></Navbar.Brand>
<Nav className="mr-auto">
  { props.user ?
  <>
  <Nav.Link href="/dashboard">Welcome, <strong>{props.user.firstName}</strong></Nav.Link>
  <Nav.Link href="" onClick={props.handleLogout} style={{fontSize: 13}}>Logout</Nav.Link>
  </>
  :
  <>
  
  <Nav.Link href="/signup">Sign  Up</Nav.Link>
  <Nav.Link href="/login">Login</Nav.Link>
  </>

  }
  
</Nav>
{drop}

</Navbar>
      
    )
}



{/* <header className={styles.Header}>
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
      </header>   */}