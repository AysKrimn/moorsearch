import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Card from 'react-bootstrap/Card';

function SiteNav() {


  return (
    <>
   
    <Navbar id='siteNav' expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">MOOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* header */}
    <Card as={"header"} className='bg-dark basic-header'>
        <Card.Img className='logo' variant="top" src="https://static.wixstatic.com/media/b5a44a_d77c1e2afac84a468ca310a7075bb2ef~mv2.png/v1/fill/w_218,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b5a44a_d77c1e2afac84a468ca310a7075bb2ef~mv2.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

    </>


  );
}

export default SiteNav;