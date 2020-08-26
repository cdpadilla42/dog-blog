import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  Switch,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Posts from './posts/Posts';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cke9a14tdu90t01z64k79byow/master',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/post/:id" component={Posts} />
        </Switch>
        {/* <App /> */}
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
