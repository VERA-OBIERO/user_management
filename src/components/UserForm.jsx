import React, { useState } from "react";
import {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

//props destructuring 
const UserForm = (props) => {
  const {handleSaveUser} = props;

  const user = {
    firstName: '',
    lastName: '',
    age: ''
  }

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState('');

  const [formData, setFormData] = useState(user);
  // console.log(formData['lastName'])

  const handleFormData = (e)  => {

    setFormData({...formData, [e.target.name]: e.target.value})

    //console.log({[e.target.name]: e.target.value});
    //console.log({firstName : 'John'});
  };

  const handleSaveForm = (e) => {
    //prevents the deafault form behaviour of reloading
    e.preventDefault();
    handleSaveUser(formData);
    //reset the entire form

    setFormData(user);

  }

  //console.log({firstName, lastName, age})

    return (
      <form onSubmit={handleSaveForm}>
        <Stack direction="horizontal" gap={3}>
          
            <Form.Control 
            className="me-auto" 
            placeholder="First name"
            name ='firstName'
            required
            value={formData['firstName']} 
            onChange={(e) => handleFormData(e)} 
          />
          <Form.Control 
            className="me-auto" 
            placeholder="Last name"
            name = 'lastName'
            required
            value={formData['lastName']}
            onChange={(e) => handleFormData(e)}
          />
          <Form.Control 
            className="me-auto" 
            placeholder="Age"
            name= 'age'
            type="number"
            required
            value={formData['age']}
            onChange={handleFormData} 
          />
          <Button 
            //id='submit'
            variant="secondary"
            type='submit'
            //onClick= {handleClick}
        
            //onClick={() => handleSaveUser(formData)}
           >Submit
          </Button>
          <div className="vr" />
          <Button variant="outline-danger" type="reset">Reset</Button>
         
       </Stack>
      </form>
    )
}

export default UserForm;