import React from "react";
import Jumbotron from "./pages";
import Container from "./components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Wrapper>
              <Jumbotron />
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
