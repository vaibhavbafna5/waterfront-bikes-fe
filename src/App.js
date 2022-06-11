import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import repairs from './repairs.png';
import accessories from './accessories.png';
import logo from './logo.png';

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand style={{ height: "80px", fontSize: "40px" }}>
            <span>
              <img src={logo}></img>
            </span>
            <span style={{paddingLeft: "12px"}}>
              <b>Waterfront Bike Shop</b>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavItem>
            <div>
              {/* <h5>391 West Street, New York, New York 10014</h5>
              <h5>(212) 414-2453</h5> */}
              <a style={{textDecoration: "none"}} href="https://www.google.com/maps/place/Waterfront+Bicycle+Shop/@40.7328455,-74.0122005,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ec5cd405db:0xf620bd097728daeb!8m2!3d40.7328425!4d-74.0100291">391 West Street, New York, New York</a>
              <br></br>
              (212) 414-2453
            </div>
          </NavItem>
        </Container>
      </Navbar>
      <Container style={{ height: "80px" }}></Container>

      <Container class="text-center">
      <Row class="my-auto">
        <Col
          xs={{ order: "last" }}
        >
          <Card style={{ width: "400px", height: "560px" }}>
            <Card.Body style={{textAlign: "center"}}>
              <img style={{height: "200px", width: "360px" }} src={accessories}></img>
              <Container style={{height: "16px"}}></Container>
              <Card.Title>Parts & Accesories</Card.Title>
              <Card.Text style={{textAlign: "left"}}>
                We've got a wide range of bike equipment that'll help improve your biking experience.
                Our product inventory includes tires and tubes, lights and locks, along with helmets and bells.
                Don't hesitate to reach out to see if we have a product you're interested in.
                {/* <Container style={{height: "4px"}}></Container>
                <ul>
                  <li>Tires</li>
                  <li>Tubes</li>
                  <li>Lights</li>
                  <li>Locks</li>
                  <li>Helmets</li>
                  <li>Bells</li>
                </ul> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "400px", height: "560px" }}>
            <Card.Body style={{textAlign: "center"}}>
              <img style={{height: "200px", width: "360px" }} src={accessories}></img>
              <Container style={{height: "16px"}}></Container>
              <Card.Title>Rentals</Card.Title>
              <Card.Text style={{textAlign: "left"}}>
              We offer over 75 hybrid bikes for rent with kids bikes available for families.

              <Container style={{height: "8px"}}></Container>
              <b>Pricing</b>
              <Container style={{height: "4px"}}></Container>
              <ul>
                <li>1 hour - $15</li>
                <li>Each extra hour - $5</li>
                <li>All Day Rental - $35</li>
              </ul>

              Call ahead to reserve your rental today.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={{ order: "first" }}
        >
          <Card style={{ width: "400px", height: "560px" }}>
            <Card.Body style={{textAlign: "center"}}>
              <img style={{height: "200px", width: "360px" }} src={repairs}></img>
              <Container style={{height: "16px"}}></Container>
              <Card.Title>Repairs & Tune Ups</Card.Title>
              <Card.Text style={{textAlign: "left"}}>
              We offer cleanings, tune ups, and general repairs.
              <br></br>
              <br></br>
              <b>Tune Up - $125</b>
              <br></br>
              Tune up includes a full lookover of the bike, including spoke adjustment, hubs, gears, pedals, brackets.
              <br></br><br></br>
              <b>Tune Up & Cleaning - $200</b>
              <br></br>
              We use our outdoor space to deep clean the bike to remove rust, grime, and excess filth.

              Tune ups are usually completed within 2-3 days.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
