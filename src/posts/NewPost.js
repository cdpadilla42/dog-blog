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
} from 'reactstrap';

class NewPost extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>New Post</h1>

              <Formik
                initialValues={{
                  street: '',
                  city: '',
                  state: '',
                  postalCode: '',
                  residence: '',
                  unitIdentifier: '',
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.street) {
                    errors.street = 'Required';
                    console.log('street required');
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <h2>Address</h2>
                    <FormGroup>
                      <Label for="street">Street</Label>
                      <Input
                        type="text"
                        name="street"
                        id="street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="unitIdentifier">Unit Identifier</Label>
                      <Input
                        type="text"
                        name="unitIdentifier"
                        id="unitIdentifier"
                        placeholder=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.unitIdentifier}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="city">City</Label>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="state">State</Label>
                      <Input
                        type="text"
                        name="state"
                        id="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="postalCode">Postal Code</Label>
                      <Input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postalCode}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="residence">Residence</Label>
                      <Input
                        type="text"
                        name="residence"
                        id="residence"
                        placeholder=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.residence}
                      />
                    </FormGroup>

                    <Button color="success">Submit</Button>
                  </Form>
                )}
              </Formik>

              {/* <form>
          <input type="text" name="title" id="title" placeholder="title" />
          <br />
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form> */}
              {/* <PostForm /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewPost;
