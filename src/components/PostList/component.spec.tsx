import React from 'react';
import { render } from '@testing-library/react';
import { PostList } from '.';


describe('Component: PostList', () => {
  it('should render with no errors', () => {
    const { container } = render(<PostList />);
    expect(container).toBeDefined();
  });

  it('should render posts', () => {
    const posts = [{ title: 'Post #01' }, { title: 'Post #02' }];
    const { getByTestId } = render(<PostList posts={posts} />);
    const renderedPosts = getByTestId('post-list');
    expect(renderedPosts.children).toHaveLength(posts.length);
  });
});
