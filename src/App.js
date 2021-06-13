import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CollectionProvider from './contexts/CollectionContext';
import { GlobalStyle } from './styles/gobalStyled';
import NavBar from './components/Navbar/NavBar';
import RandomCard from './components/Card/RandomCard';
import Collection from './pages/Collection';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
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
