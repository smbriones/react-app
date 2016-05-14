import React, { Component, PropTypes } from 'react';

class PostCreateView extends Component {
  constructor(props, context) {
    super(props, context);
    this.addPost = this.addPost.bind(this);
  }

  addPost() {
    const contentRef = this.refs.content;
    if (contentRef.value) {
      this.props.addPost(contentRef.value);
      contentRef.value = '';
    }
  }

  render() {
    const cls = `form ${(this.props.showAddPost ? 'appear' : '')}`;
    return (
      <div className={cls}>
        <div className="form-content">
          <h2 className="form-title">Add Task</h2>
          <textarea placeholder="Post Content" className="form-field" ref="content"></textarea>
          <a className="post-submit-button align-right" href="#" onClick={this.addPost}>Submit</a>
        </div>
      </div>
    );
  }
}

PostCreateView.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateView;
