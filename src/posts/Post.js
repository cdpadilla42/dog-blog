import React, { Component } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
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
        check
      }
      editMode @client
    }
  `;

  const TOGGLE_CHECK = gql`
    mutation updatePost($check: Boolean, $id: ID!) {
      updatePost(where: { id: $id }, data: { check: $check }) {
        id
        check
      }
      publishPost(where: { id: $id }) {
        id
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_POST, {
    variables: { id: props.postID },
  });
  const [toggleCheck, { data: checkData }] = useMutation(TOGGLE_CHECK);

  if (loading) return 'loading...';

  const { post, editMode } = data;
  console.log(post);

  const handleCheck = () => {
    toggleCheck({
      variables: { id: post.id, check: !post.check },
      optimisticResponse: {
        __typename: 'Mutation',
        updatePost: {
          id: post.id,
          __typename: 'Post',
          check: !post.check,
        },
      },
    });
    console.log('checkData', checkData);
  };

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
          <input type="checkbox" checked={post.check} onChange={handleCheck} />
        </section>
      )}
      <button onClick={() => isEditMode(!isEditMode())}>Edit Mode</button>
    </>
  );
}

export default Post;
