import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="app">
    <main className="main">
      <Switch>
        <Route exact path="/" component={<div>Hello ML</div>} />
      </Switch>
    </main>

    <footer />
  </div>
);

export default App;
