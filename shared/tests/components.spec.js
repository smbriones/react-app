import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import PostListItem from '../components/PostListItem/PostListItem';
import PostCreateView from '../components/PostCreateView/PostCreateView';
import React from 'react';
import expectJSX from 'expect-jsx';
import { Link } from 'react-router';

expect.extend(expectJSX);

describe('component tests', () => {
  it('should render PostListItem properly', () => {
    const renderer = TestUtils.createRenderer();
    const post = {
      content: 'hello world!',
      slug: 'first-post',
      cuid: 'cikpdcdn60000zjxom3dmavzq',
    };
    renderer.render(
      <PostListItem
        post={post}
        onClick={function click() {}}

        onDelete={function noop() {}}

      />
    );
    const output = renderer.getRenderOutput();
    expect(output).toEqualJSX(
      <div className="task">
        <h3>
          <Link to={`/post/${post.slug}-${post.cuid}`} onClick={function noop() {}}>
            {post.content}
          </Link>
        </h3>
        <p className="post-action"><a href="#" onClick={function noop() {}}>Delete</a></p>
      </div>
    );
  });

  it('should render PostCreateView properly', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<PostCreateView showAddPost={false} addPost={function noop() {}}/>);

    const output = renderer.getRenderOutput();
    expect(output).toEqualJSX(
      <div className="form ">
        <div className="form-content">
          <input placeholder="What do you need to do?" className="form-field" ref="content"></input>
          <a className="button add-task-button" href="#" onClick={function noop() {}}>✓ Add Task</a>
        </div>
      </div>
    );
  });

  it('should show post create form in  PostCreateView if showAddPost is true', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<PostCreateView showAddPost addPost={function noop() {}}/>);

    const output = renderer.getRenderOutput();
    expect(output).toEqualJSX(
      <div className="form appear">
        <div className="form-content">
          <input placeholder="What do you need to do?" className="form-field" ref="content"></input>
          <a className="button add-task-button" href="#" onClick={function noop() {}}>✓ Add Task</a>
        </div>
      </div>
    );
  });
});
