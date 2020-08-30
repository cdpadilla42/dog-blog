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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleInput = (e) => {
    if (e.target.name === 'body') return setBody(e.target.value);
    setTitle(e.target.value);
  };

  const [addPost, { loading, error }] = useMutation(NEW_POST, {
    onCompleted: () => console.log('Success'),
  });
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>New Post</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                addPost({
                  variables: {
                    title,
                    body,
                  },
                });
                setTitle('');
                setBody('');
              }}
            >
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                value={title}
                onChange={handleInput}
              />
              <br />
              <textarea
                name="body"
                id="body"
                cols="30"
                rows="10"
                placeholder="body"
                value={body}
                onChange={handleInput}
              ></textarea>
              <button>Submit</button>
              {loading ? 'Loading...' : ''}
              {error ? 'Error!' : ''}
            </form>
            {/* <PostForm /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      title
      body
      id
    }
  }
`;

const NEW_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;

export default NewPost;
