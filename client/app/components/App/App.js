import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Start from '../Start/Start';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/" component={Start}/>
            </div>
      </Router>
    );
  }
}

export default App;
