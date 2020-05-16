import React from "react";
import "./style.scss";

const TableHead = () => {
  return (
    <thead className="bg-info">
      <tr>
        <th>Image</th>
        <th>Employee ID</th>
        <th>Name</th>
        <th>Role</th>
        <th>Department</th>
        <th>Email</th>
      </tr>
    </thead>
  );
};

export default TableHead;
