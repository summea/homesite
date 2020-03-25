// ref: https://github.com/testing-library/react-testing-library/issues/374#issuecomment-494204874
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { useHistory } from 'react-router-dom';

export function LoginPage() {
  let history = useHistory();

  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(1);
  const [accesstoken, setAccesstoken] = useState(2);

  let submitButton = (event) => {
    event.preventDefault();
    var that = this;    

    // get access token
    axios.post('http://127.0.0.1:8000/api/token/', {        
        username: username,
        password: password
      })
      .then(function(response) {
        setAccesstoken(response.data.access)

        // save access token
        axios.post('http://127.0.0.1:8000/login/', {
          data: {
            accesstoken: accesstoken,
            username: username,
            password: password
          },
          withCredentials: true,
        })
        .then(function(response) {          
          console.log(response)
          console.log(response.headers)
          history.push('/albums')
        })
        .catch(function(error) {
          console.log(error)
        });
      })
      .catch(function(error) {
        console.log(error)
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <Input name="username" onChange={(event) => setUsername(event.target.value)} placeholder="username" /><br />
      <Input name="password" onChange={(event) => setPassword(event.target.value)} type="password" placeholder="password" /><br />
      <Button onClick={submitButton}>Login</Button>
    </div>
  );
}

export default LoginPage;