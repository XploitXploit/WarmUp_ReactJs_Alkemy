import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {

    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="" className="px-4">MegaPost</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link > <i className="fas fa-home px-1"></i>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/create'>
                            <Nav.Link > <i className="fas fa-home px-1"></i>Create</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
