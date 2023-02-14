import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar.Brand href="#home">My Developer Journey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Body />
      <Cards />

      <footer className="py-5 my-5 bg-dark">
        <Container className="px4">
          <p className="text-center text-white">
            Copyright &copy; My Developer Journey 2023
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
