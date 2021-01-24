
 import Nav from 'react-bootstrap/Nav'
 import  Navbar  from "react-bootstrap/Navbar";
 import Form from 'react-bootstrap/Form'
 import FormControl from 'react-bootstrap/FormControl'
 import Button from 'react-bootstrap/Button'
 import  NavDropdown  from 'react-bootstrap/NavDropdown';
 import {Link} from 'react-router-dom';


export function Header(props){
     let drop = props.user ?
     <Navbar   bg="dark" variant="dark">
     <Navbar.Toggle aria-controls='basic-navbar-nav'/>
     <Navbar.Collapse id='basic-navbar-nav'>
     <Nav className='mr-auto'>
         <NavDropdown title="View All" id="collasible-nav-dropdown">
          <Link to='/news' className='mr-auto'>
          <NavDropdown.Item  href="/news">News</NavDropdown.Item>
          </Link>
          <Link to='/movies' className='mr-auto'>
          <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
          </Link>
          <Link to='/books' className='mr-auto'>
         <NavDropdown.Item href="/books">Books</NavDropdown.Item>
         </Link>
         <Link to='/shows' className='mr-auto'>
          <NavDropdown.Item href="/shows">Shows</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link to='/' className='mr-auto'>
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          </Link>
          </NavDropdown>
          
             </Nav>
          </Navbar.Collapse>
       </Navbar>

      
       :
      
        <Form inline>
   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
   <Button variant="outline-light">Search</Button>
 </Form> 

      
    return(

         <Navbar bg="dark" variant="dark">
 <Navbar.Brand href="/" style={{fontSize: 24}}><strong>One Stop</strong></Navbar.Brand>
 <Nav className="mr-auto">
   { props.user ?
   <>
   <Navbar.Brand>Welcome, <strong>{props.user.firstName}</strong></Navbar.Brand>   
   <Navbar.Brand href="" className='nav-link' onClick={props.handleLogout} style={{fontSize: 13}}>Logout</Navbar.Brand>
   </>
   :
   <>
  
   <Link to="/signup" className='nav-link'>Sign  Up</Link>
   <Link to="/login" className='nav-link'>Login</Link>
   </>

   }
  
 </Nav>
 {drop}

 </Navbar>
      
    )
}



