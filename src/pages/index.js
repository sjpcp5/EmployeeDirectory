import React, { Component } from "react";
import employees from "../db/db.js";
// import {Row, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Card from "../components/Card";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import EmployeeTable from "../components/Table";
import TableHead from "../components/Table/tableCol.js";
import Title from "../components/Title";

class Jumbotron extends Component {
  state = {
    employees: employees,
    displayEmployees: employees,
    search: "",
  };
  filterByName = (event) => {
    this.setState({
      ...this.state,
      search: event.target.value,
      displayEmployees: this.state.employees.filter(
        (entry) => entry.name.toLowerCase().indexOf(this.state.search) !== -1
      ),
    });
  };
  resetFilter = (event) => {
    window.location.reload();
  };
  render() {
    return (
      <Row>
        <Col
          className="text-white text-center py-5 px-4 my-5"
          style={{
            backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
          }}
        >
          <Col className="py-5">
            <Title>Directory</Title>
            <p className="mx-5 mb-5"> Use the search box narrow your results</p>
            <Col md={{ span: 4, offset: 4 }}>
              <InputGroup className="mb-3">
                <FormControl
                  className="mr-1"
                  placeholder="type to filter by Name.."
                  type="text"
                  value={this.state.search}
                  onChange={this.filterByName}
                />
                <InputGroup.Append>
                  <Button variant="outline-dark" onClick={this.resetFilter}>
                    Reset
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Col>
        </Col>

        <Table responsive striped bordered hover variant="dark">
          <TableHead />
          {this.state.displayEmployees.map((employees) => (
            <EmployeeTable
              image={employees.image}
              id={employees.id}
              name={employees.name}
              role={employees.role}
              department={employees.department}
              email={employees.email}
            />
          ))}
        </Table>
      </Row>
    );
  }
}

export default Jumbotron;
