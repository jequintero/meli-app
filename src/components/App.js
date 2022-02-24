import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableHomePage = Loadable({
  loader: () => import('../containers/HomePage'),
  loading: () => <div>Loading</div>
});

const App = () => (
  <div className="app">
    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableHomePage} />
      </Switch>
    </main>

    <footer />
  </div>
);

export default App;
