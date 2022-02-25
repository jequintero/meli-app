import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { IntlProvider } from 'react-intl';
import messages_es from '../translations/es.json';
import NavBar from './NavBar';

const LoadableHomePage = Loadable({
  loader: () => import('../containers/HomePage'),
  loading: () => <div>Loading</div>
});

const messages = {
  es: messages_es
};

class App extends Component {
  render() {
    return (
      <IntlProvider locale={'es'} messages={messages['es']}>
        <div className="app">
          <header>
            <NavBar />
          </header>
          <main className="main">
            <Switch>
              <Route exact path="/" component={LoadableHomePage} />
            </Switch>
          </main>

          <footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
