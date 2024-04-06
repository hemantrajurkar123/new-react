import React,{useState} from 'react'
import FunctionProps from '../other-components/FunctionProps';

const Actors = () => {
  const [actors, setActors] = useState([
    { code: "01", name: "Ranbir Kapoor", salary: "10,000", status: "Active" },
    { code: "02", name: "Alia Bhatt", salary: "10,000", status: "Active" },
    { code: "03", name: "Salman Khan", salary: "15,000", status: "Active" },
    { code: "04", name: "Amir Khan", salary: "8,000", status: "Active" },
    { code: "05", name: "Kartik Aryan", salary: "9,000", status: "Active" },
  ]);

  function handleDelete(code){
    console.log("Actor Id Clicked is",code)
    const newList=actors.filter(actor=>actor.code!==code)
    setActors(newList)
  }
  return (
    <div>
      <FunctionProps actors={actors} handleDelete={handleDelete}/>
    </div>
  )
}

export default Actors
