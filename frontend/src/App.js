import React from 'react';
import AlbumList from './components/AlbumList';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/albums" component={AlbumList} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Homepage} />
    </Router>
  )
}

export default App;
