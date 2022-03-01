import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { IntlProvider } from 'react-intl';
import messages_es from '../translations/es.json';
import NavBar from './NavBar';

const LoadableHomePage = Loadable({
  loader: () => import('../containers/HomePage'),
  loading: () => <div className="spinner" />
});

const LoadableSearchResults = Loadable({
  loader: () => import('../containers/SearchResults'),
  loading: () => <div className="spinner" />
});

const LoadableProductDetail = Loadable({
  loader: () => import('../containers/ProductDetail'),
  loading: () => <div className="spinner" />
});

const LoadableError = Loadable({
  loader: () => import('../containers/ErrorPage'),
  loading: () => <div className="spinner" />
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
              <Route
                path="/items/:id"
                exact
                component={LoadableProductDetail}
              />
              <Route exact path="/items" component={LoadableSearchResults} />
              <Route exact path="*" component={LoadableError} />
            </Switch>
          </main>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
