import React from "react";
import {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

//props destructuring 
const UserForm = (props) => {
  const {firstName, handleSaveUser} = props
    console.log(handleSaveUser);

    const handleClick = () => {
      console.log("Clicked 2")
    }
    // useEffect(() => {
    //   const button = document.getElementById('submit')
    //   button.addEventListener('click', handleClick)

    // },[])



    return (
        <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button 
         //id='submit'
         variant="secondary" 
         onClick= {handleClick}
        
        //onClick={() => handleSaveUser({firstName: 'John'})}
        >Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    )
}

export default UserForm;