import React from 'react';
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var that = this;
    axios.get('http://127.0.0.1:8000/login/', {
      })
      .then(function(response) {
        that.setState({
          albums: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Input name="username" onChange={this.handleChange} placeholder="username" /><br />
        <Input name="password" type="password" onChange={this.handleChange} placeholder="password" /><br />
        <Button onClick={this.handleSubmit}>Login</Button>
      </div>
    )
  }
}

export default Login;