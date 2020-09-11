import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

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

        <a className="App-link" href="/">
          GraphQL Rules
        </a>
      </header>
    </div>
  );
}

export default App;
