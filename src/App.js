import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/NavIndex'
// import LandingPage from './components/Landing';
// import SignUpPage from './components/SignUp';
// import SignInPage from './components/SignIn';
// import PasswordForgetPage from './components/PasswordForget';
// import HomePage from './components/Home';
// import AccountPage from './components/Account';
// import AdminPage from './components/Admin';
import MapContainer from './components/Home/MapContainer'
import * as ROUTES from './constants/routes';

class App extends Component {

  fetchPlace = () => {
    fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${process.env.REACT_APP_API_KEY}`,{
      mode: 'cors'
    })
      .then(res => res.json())
      .then(console.log)
      .catch(err => console.error('fetchPlace err:', err))
  }

  render() {
    return (
      <Router>
        <div>
        <button onClick={this.fetchPlace}>Fetch Place</button>
          <Navigation />

          <hr />

          {/* <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
          <MapContainer />
        </div>
      </Router>
    );
  }
}

export default App;
