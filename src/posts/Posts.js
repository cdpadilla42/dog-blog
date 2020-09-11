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
      body
    }
  }
`;

function PostsQuery() {
  const { loading, data } = useQuery(GET_POSTS);
  if (loading) return 'loading...';

  const { posts } = data;

  return posts.map((post) => (
    <Link key={post.id} to={`/posts/${post.id}`}>
      <li>{post.title}</li>
    </Link>
  ));
}

class Posts extends Component {
  render() {
    return (
      <>
        <Link className="button" to={'/posts/new'}>
          <a>New Post</a>
        </Link>
        <ul className="posts-listing">
          <PostsQuery />
        </ul>
      </>
    );
  }
}

export default Posts;
