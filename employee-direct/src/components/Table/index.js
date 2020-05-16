import React from "react";
import "./style.scss";

const EmployeeTable = (props) => {
  return (
    <tbody>
      <td>
        <img className="img" alt={props.name} src={props.image} />
      </td>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.role}</td>
      <td>{props.department}</td>
      <td>
        <a href="link to email">{props.email}</a>
      </td>
    </tbody>
  );
};

export default EmployeeTable;
