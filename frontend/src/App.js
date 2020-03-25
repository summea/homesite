import React from 'react';
import AlbumList from './components/AlbumList';
import LoginPage from './components/Login';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
//import { createBrowserHistory } from 'history';
//history={history}

//const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <PrivateRoute path="/albums" component={AlbumList} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={Homepage} />
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
  }
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default App;
