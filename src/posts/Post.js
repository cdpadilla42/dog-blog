import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';

class Post extends Component {
  postID = this.props.match.params.id;

  render() {
    return <PostQuery postID={this.postID} />;
  }
}

function PostQuery(props) {
  const GET_POST = gql`
    query post($id: ID!) {
      post(where: { id: $id }) {
        id
        title
      }
    }
  `;

  console.log('hello from function!', props.postID);
  const { loading, data, error } = useQuery(GET_POST, {
    variables: { id: props.postID },
  });
  if (loading) return 'loading...';

  const { post } = data;

  return (
    <>
      <h1>Here's your post bruh</h1>
      <h2>{post.title}</h2>
    </>
  );
}

export default Post;
