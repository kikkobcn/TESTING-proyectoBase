import Logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-middle"
            />{'   '}
              Proyecto Ethereum<br></br>*** KIKO ***
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home_Kiko</Nav.Link>
            <Nav.Link href="#Contact">Contact_Kiko</Nav.Link>
            <Nav.Link href="#Company">Company_kiko</Nav.Link>
            <Nav.Link href="#Network">Network_kiko</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}