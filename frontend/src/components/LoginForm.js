import React from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }
}

export default LoginForm;