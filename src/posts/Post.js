import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';
import UpdatePost from './UpdatePost';
import { isEditMode } from '../cache';

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
        body
      }
      editMode @client
    }
  `;

  console.log('hello from function!', props.postID);
  const { loading, data, error } = useQuery(GET_POST, {
    variables: { id: props.postID },
  });
  if (loading) return 'loading...';

  console.log('data', data);

  const { post, editMode } = data;

  return (
    <>
      {editMode ? (
        <section>
          <h1>Edit Post</h1>
          <UpdatePost post={post} />
        </section>
      ) : (
        <section>
          <h1>Here's your post bruh</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
      )}
      <button onClick={() => isEditMode(!isEditMode())}>Edit Mode</button>
    </>
  );
}

export default Post;
