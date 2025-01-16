import { Container, Navbar, Nav } from 'react-bootstrap'

const navbar = function () {
  return (
    <Navbar className='text-light bg-dark'>
      <Container fluid={true}>
        <Navbar.Brand href="#home" className='text-light'>Bookscape</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>About</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar