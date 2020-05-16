import React, {Component} from 'react';
import employees from "../db/db.json";
// import {Row, Col} from "react-bootstrap";
import Row from "../components/Row"
import Col from "../components/Col"
import Button from "../components/CardBtn";
import Card from "../components/Card";
import TableEmp from '../components/Table'
import TableCol from '../components/Table/tableCol.js'
import Title from "../components/Title"

class Jumbotron extends Component {

    state ={
        employees:employees,
        displayEmployees:employees,
        search:""
    }
    filterByName = event =>{
    this.setState({
    ...this.state:event.target.value, 
    displayEmployees: this.state.employees.filter(entry=>
    entry.name.toLowerCase().indexOf(this.state.search)!==-1)})
    }
filterFilter = event=>{
    window.location.reload()
    }
render(){
    return (
        <Row>
        <Col>
        <Col>
        <Title>Directory</Title>
        <p className="mx-5 mb-5"> Use the search box narrow your results</p>
        <Col md={{span, offset:4}}>
        <InputGroup className="mb-3">
        <FormControl className="mr-1" placeholder="type to filter by Name.."
        type='text' value={this.state.search} onChange={this.filterByName}/>
        <InputGroup.Append>
        <Button variant="outline-dark" onClick={this.resetFilter}>Reset</Button>
        </InputGroup.Append>
        </Col>
        </Col>
        </Col>

        <Table responsive hover>
        <TableEmp/>
        {this.state.displayEmployees.map(employees=>(
            <TableCol
                id={employees.id}
                image={employees.image}
                name={employees.name}
                role={employees.role}
                department={employees.department}
                email={employees.email}
                />
            ))}
            </Table>
            </Row>
        )
    }
}

