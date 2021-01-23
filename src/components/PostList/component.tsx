import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Card } from '~components/Card';
import { Props } from './types';

const Container = styled('section')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 80px;
  padding: 16px var(--page-side-gap);

  ${Card} {
    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 60px;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      width: calc(100% / 2 - 30px);
      margin-bottom: 60px;
    }

    @media (min-width: 1200px) {
      width: calc(100% / 3 - 60px);
      margin-bottom: 90px;
    }

    img {
      height: 170px;
    }
  }
`;


const PostList: FunctionComponent<Props> = ({ posts }) => (
  <Container>
    { posts.map((post, index) => <Card key={`post-${index}`} {...post} />) }
  </Container>
);

export default PostList;
