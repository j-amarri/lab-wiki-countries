import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route
                path="/countries/:id"
                render={(props) => <CountryDetails {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
