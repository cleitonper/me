import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BannerJob } from '~components/BannerJob';
import { Props } from './types';

const Container = styled.section`
background-color: var(--background-primary);
  padding: 32px 16px;
`;

const Jobs = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 719px) {
    max-width: 520px;
    margin: 0 auto;

    ${BannerJob} {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 720px) {
    ${BannerJob} {
      width: calc((100% / 2) - 10px);
      margin-bottom: 16px;
    }
  }

  @media (min-width: 1200px) {
    ${BannerJob} {
      width: calc((100% / 3) - 30px);
      margin-bottom: 45px;
    }
  }
`;

const RecentWork: FunctionComponent<Props> = ({ jobs }) => (
  <Container>
    <Jobs>
      {jobs.map(
        (job, index) =>
          <BannerJob
            key={index}
            link={job.link}
            tags={job.tags}
            image={job.image}
            description={job.description}
            data-testid="job"
          />
      )}
    </Jobs>
  </Container>
);

export default RecentWork;
