import {useEffect, useState} from 'react';
import UserForm from "./components/UserForm";
import Stack from 'react-bootstrap/Stack';
import UserList from './components/UserList';

const BASE_URL ='http://localhost:4000/users'


function App () {
  //useState hook allows us to work with dynamic data inside a component
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState('')

  //save user to db.json
  const handleSaveUser = (user) => {
    fetch(BASE_URL, {
      method: 'POST' ,
      headers : {
          'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => setUsers([...users, data]))
      .catch((err) => console.log (err));
  }
  /**
   * useEffect allows us to add extra effects to a component i.e 
   * 1. Fetch data from an API
   * 2. Manually manipulate the DOM
   */

  // useEffect has 3 ways it can work and accepts 2 arguments i.e. callback function and array of dependencies

  // //1. Runs every time the state/props change
  // useEffect(() => {
  //   console.log("Can be executed");
  // });

  // //2. Executed only once when the component is rendered
  // useEffect(() => {
  //   console.log("Running");
  // }, []);

  // //3. Runs after the component renders and every time the dependency changes
  // useEffect(() => {
  //   console.log("Input: ", input)
  // }, [input])
  
  //Fetch users from db.json
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      //once we get the data from db.json we store it inside the state
      .then((users) => setUsers(users))
      .catch((err) => console.log(err))

  }, []);

  return (
    <div className="container mt-5" >
      <Stack gap={3}>
        <UserForm handleSaveUser={handleSaveUser} />

        <hr />
        <UserList users={users}/>

      </Stack>
  
      {/* <ol>
        {users.map((user) => <li key={user.id}>{user.firstName}</li>)}
      </ol> */}
       {/* <input type="text" onChange={(e) => setInput(e.target.value)} />  */}
    </div>
  )
}

export default App;
