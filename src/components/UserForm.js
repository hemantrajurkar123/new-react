import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const UserForm = () => {
  const [email,setEmail]=useState("hemant@gmail.com")
  const [pass,setPass]=useState("hemant123")


  // Whenever we are passing the name parameter to thi function, it will get replaced by arguments in the function call below on the button click
  // With the event parameter passed to the function we are telling the function that it is an event
  const handleClick=(name,e)=>{
    console.log("Hello"+name)
    console.log(e)
    e.preventDefault()
    
  }

  const handleChange=(e)=>{
    console.log(e.target.value)
  
  }
  return (
    <>
      <Form name='form' className="user-form">
        <FormGroup className="mb-3">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}></FormControl>
        </FormGroup>
        <Button type='submit' variant="primary" onClick={(e)=>handleClick("Hemant",e)}>Submit</Button>
        {""}
      </Form>
      <h6>The email is: {email}</h6>
      <h6>The password is {pass}</h6>
    </>
  );
};

export default UserForm;
