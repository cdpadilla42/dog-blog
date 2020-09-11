import React, { useState } from 'react';
import PostForm from './PostForm';
import { Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';

const NewPost = () => {
  const [addPost, { loading, error }] = useMutation(
    NEW_POST
    //   {
    //   onCompleted: () => {
    //     setTitle('');
    //     setBody('');
    //     console.log('Success');
    //   },
    // }
  );

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>New Post</h1>

            <PostForm onSubmit={addPost} loading={loading} error={error} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;

export default NewPost;
