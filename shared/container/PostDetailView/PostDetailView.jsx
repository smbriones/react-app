import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class PostDetailView extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleClick() {
    this.setState({
      showAddPost: true,
    });
  }

  handleLogoClick() {
    this.props.dispatch(Actions.fetchPosts());
  }

  render() {
    return (
      <div>
        <Header onClick={function noop() {}} handleLogoClick={this.handleLogoClick}/>
        <div className="container">
          <div className="single-post post-detail">
            <h3 className="post-desc">{this.props.post.content}</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PostDetailView.need = [(params) => {
  return Actions.getPostRequest.bind(null, params.slug)();
}];

PostDetailView.contextTypes = {
  router: React.PropTypes.object,
};

PostDetailView.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    post: (store.post),
  };
}

export default connect(mapStateToProps)(PostDetailView);
