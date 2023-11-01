import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UserCard from './UserCard';

const UserList = ({users}) => {
    // console.log(users)
  return (
    <Container>
        <Row>
            {users.map((user, index) => <UserCard key={index}user={user}/>)}
        </Row>
    </Container>
  );
}

export default UserList;