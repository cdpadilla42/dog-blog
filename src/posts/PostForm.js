import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <form>
        <input type="text" name="title" id="title" placeholder="title" />
        <br />
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
    );
  }
}

export default PostForm;
