import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Post from './posts/Post';
import Posts from './posts/Posts';
import NewPost from './posts/NewPost';
import { typeDefs, resolvers } from './resolvers';

const isEditMode = makeVar(true);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        editMode: {
          read() {
            return isEditMode();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cke9a14tdu90t01z64k79byow/master',
  cache,
  typeDefs,
  resolvers,
});

// cache.writeQuery({
//   data: {
//     isEditMode: false,
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ApolloProvider client={client}>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
          {/* <App /> */}
        </Router>
      </main>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
