import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function PostListItem(props) {
  return (
    <div className="task">
      <h3>
        <Link to={`/post/${props.post.slug}-${props.post.cuid}`} onClick={props.onClick}>
          {props.post.content}
        </Link>
      </h3>
      <p className="post-action"><a href="#" onClick={props.onDelete}>Delete</a></p>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
