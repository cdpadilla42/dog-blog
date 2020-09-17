import React from 'react';
import PostForm from './PostForm';
import { gql, useMutation } from '@apollo/client';
import { isEditMode } from '../cache';

const UpdatePost = (props) => {
  const { id } = props;

  const { post } = props;

  const [updatePost, { loading, error }] = useMutation(UPDATE_POST, {
    onCompleted: () => {
      console.log('Success');
      isEditMode(false);
    },
  });

  return <PostForm post={post} onSubmit={updatePost} />;
};

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $body: String!, $title: String!) {
    updatePost(where: { id: $id }, data: { title: $title, body: $body }) {
      id
      title
      body
    }
    publishPost(where: { id: $id }) {
      id
    }
  }
`;

export default UpdatePost;
