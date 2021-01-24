
 import Nav from 'react-bootstrap/Nav'
 import  Navbar  from "react-bootstrap/Navbar";
 import Form from 'react-bootstrap/Form'
 import FormControl from 'react-bootstrap/FormControl'
 import Button from 'react-bootstrap/Button'
 import  NavDropdown  from 'react-bootstrap/NavDropdown';


export function Header(props){
     let drop = props.user ?
     <Navbar   bg="dark" variant="dark">
     <Navbar.Toggle aria-controls='basic-navbar-nav'/>
     <Navbar.Collapse id='basic-navbar-nav'>
     <Nav className='mr-auto'>
         <NavDropdown title="View All" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/news">News</NavDropdown.Item>
          <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
         <NavDropdown.Item href="/books">Books</NavDropdown.Item>
          <NavDropdown.Item href="/shows">Shows</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
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
   <Navbar.Brand href="/dashboard">Welcome, <strong>{props.user.firstName}</strong></Navbar.Brand>/   <Navbar.Brand href="" onClick={props.handleLogout} style={{fontSize: 13}}>Logout</Navbar.Brand>
   </>
   :
   <>
  
   <Navbar.Brand href="/signup">Sign  Up</Navbar.Brand>
   <Navbar.Brand href="/login">Login</Navbar.Brand>
   </>

   }
  
 </Nav>
 {drop}

 </Navbar>
      
    )
}



