import React from 'react';
import PostForm from './PostForm';
import { gql, useMutation } from '@apollo/client';

const UpdatePost = (props) => {
  const { id } = props;
  const handleUpdate = (varObj) => {
    varObj.variables.id = id;
    updatePost(varObj);
  };

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

  return <PostForm onSubmit={handleUpdate} />;
};

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $body: String!, $title: String!) {
    updatePost(where: { id: $id }, data: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export default UpdatePost;
