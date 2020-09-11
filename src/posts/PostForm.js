import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => {
  const { onSubmit, loading, error } = props;
  const [title, setTitle] = useState(props.post.title || '');
  const [body, setBody] = useState(props.post.body || '');
  const [id] = useState(props.post.id || '');
  const handleInput = (e) => {
    if (e.target.name === 'body') return setBody(e.target.value);
    setTitle(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          variables: {
            title,
            body,
            id,
          },
        });
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
      <button className="button">Submit</button>
      {loading ? 'Loading...' : ''}
      {error ? 'Error!' : ''}
    </form>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  post: PropTypes.object,
};

PostForm.defaultProps = {
  post: {},
};

export default PostForm;
