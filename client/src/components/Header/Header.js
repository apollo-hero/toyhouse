import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        
        <div className='header-bar'>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand href="/"><h2><span className='logo1'>Toy</span><span className='logo2'>House</span></h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="all-items">All Toys</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="/additem">+ Add Toy</Nav.Link>
                                </>
                            }
                            {
                                user && <>
                                <Nav.Link as={Link} to="/manage-toys">Manage Toys</Nav.Link>
                                </>
                            }
                            
                            
                        </Nav>
                        
                                    
                                    {
                                        user ?
                                         <button onClick={handleSignOut} className='login h3'>Signout</button>
                                        :
                                        <Nav.Link as={Link} to='login'> <Button className='login h3'>Login</Button> </Nav.Link> 
                                    }
                        <Nav>     
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
                
            </Navbar>
            
        </div>
        
    );
};

export default Header;