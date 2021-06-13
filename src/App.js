import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Collection from './components/Collection';
import CollectionProvider from './components/CollectionContext';
import RandomCard from './components/RandomCard';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <CollectionProvider>
        <Switch>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/">
            <RandomCard />
          </Route>
        </Switch>
      </CollectionProvider>
    </Router>
  );
}

export default App;
