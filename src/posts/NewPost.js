import React, { Component } from 'react';
import PostForm from './PostForm';
import { Formik } from 'formik';

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

class NewPost extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>New Post</h1>

              <form>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                />
                <br />
                <textarea name="body" id="body" cols="30" rows="10"></textarea>
                <button>Submit</button>
              </form>
              {/* <PostForm /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewPost;
