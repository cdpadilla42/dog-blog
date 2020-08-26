import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

// Writing the query
const GET_POSTS = gql`
  query allPosts {
    posts {
      stage
      id
      title
      body {
        text
      }
    }
  }
`;

function Posts() {
  const { loading, data } = useQuery(GET_POSTS);
  if (loading) return 'loading...';

  const { posts } = data;

  console.log(posts);

  return posts.map((post) => (
    <div key={post.title}>
      <h3>{post.title}</h3>
      {/* <p>{post.body.text}</p> */}
    </div>
  ));
}

// ? Running a query outside of react
// const testQuery = gql`
//   {
//     posts {
//       title
//       body {
//         html
//       }
//     }
//   }
// `;

// client
//   .query({
//     query: testQuery,
//   })
//   .then((result) => console.log(result));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Posts />
    </div>
  );
}

export default App;
