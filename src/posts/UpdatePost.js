import React from 'react';
import PostForm from './PostForm';
import { gql, useMutation } from '@apollo/client';

const UpdatePost = () => {
  const [updatePost, { loading, error }] = useMutation(
    UPDATE_POST
    //   {
    //   onCompleted: () => {
    //     setTitle('');
    //     setBody('');
    //     console.log('Success');
    //   },
    // }
  );

  return <PostForm />;
};

const UPDATE_POST = gql`
  mutation updatePost($id: String!, $body: String, $title: String) {
    updatePost(
      where: { id: $id }
      data: { title: $title, body: $body, status: PUBLISHED }
    ) {
      id
      title
      body
    }
  }
`;

export default UpdatePost;
