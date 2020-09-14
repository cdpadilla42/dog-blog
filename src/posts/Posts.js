import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

// Writing the query
const GET_POSTS = gql`
  query allPosts($skip: Int) {
    posts(orderBy: createdAt_DESC, first: 5, skip: $skip) {
      stage
      id
      title
      body
    }
  }
`;

function PostsQuery() {
  const { loading, data, fetchMore } = useQuery(GET_POSTS);
  if (loading) return 'loading...';

  const { posts } = data;

  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
      <li>
        <button
          onClick={() => {
            fetchMore({
              variables: {
                skip: 10,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  posts: [...prev.posts, ...fetchMoreResult.posts],
                });
              },
            });
          }}
        >
          Load More
        </button>
      </li>
    </>
  );
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
