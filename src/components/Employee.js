import React from "react";
import { useState } from "react";

const Employee = () => {
  const [empList, setEmpList] = useState([
    { code: "01", name: "Virat Kohli", salary: "10,000", status: "Active" },
    { code: "02", name: "Virat Kohli", salary: "10,000", status: "Active" },
    { code: "03", name: "Rohit Sharma", salary: "15,000", status: "Active" },
    { code: "04", name: "Ishan Kishan", salary: "8,000", status: "Active" },
    { code: "05", name: "Kuldeep Yadav", salary: "9,000", status: "Active" },
  ]);
  return (
    <>
      <h6>Employee Listing</h6>
      <table>
        <thead>
          <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Salary</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp) => (
            <tr key={emp.code}>
              <td>{emp.code}</td>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
              <td>{emp.status}</td>
              <button>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Employee;
