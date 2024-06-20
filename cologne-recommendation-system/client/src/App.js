import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CologneSearch from './components/CologneSearch/CologneSearch';
import Recommendation from './components/Recommendation/Recommendation';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={CologneSearch} />
          <Route path="/recommendations" component={Recommendation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
