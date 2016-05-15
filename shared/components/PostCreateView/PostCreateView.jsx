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
          <input placeholder="What do you need to do?" className="form-field" ref="content"></input>
          <a className="button add-task-button" href="#" onClick={this.addPost}>✓ Add Task</a>
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
