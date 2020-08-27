import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

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

function PostsQuery() {
  const { loading, data } = useQuery(GET_POSTS);
  if (loading) return 'loading...';

  const { posts } = data;

  return posts.map((post) => (
    <Link key={post.id} to={`/posts/${post.id}`}>
      <h3>{post.title}</h3>
    </Link>
  ));
}

class Posts extends Component {
  render() {
    return (
      <>
        <PostsQuery />
        <Link to={'/new'}>
          <a>New Post</a>
        </Link>
      </>
    );
  }
}

export default Posts;
