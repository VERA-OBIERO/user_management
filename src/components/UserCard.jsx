import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const UserCard = ({user}) => {
    //console.log(user);
    return (
     <Col>
        <Card style={{ width: '18rem', marginTop:'10px' }}>
          <Card.Img 
             variant="top" 
             src="https://static.wikia.nocookie.net/6fefb384-9e45-47eb-ba1e-e513d21a915f/smart/width/386/height/259" />
          <Card.Body>
            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
            <Card.Text>
                Age: {user.age}
            </Card.Text>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
     </Col>
      );
}

export default UserCard;
