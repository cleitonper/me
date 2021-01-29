import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import classnames from 'classnames';

import { Button } from '~components/Button';
import { Props } from './types';


const JobLink: FunctionComponent<Props> = ({ link, icon, label, className }) => {
  if (!link) return null;

  return (
    <Button
      href={link}
      className={classnames('link', className)}
      title={label}
    >
      <FontAwesomeIcon icon={['fas', icon]} className="icon" />
      <span>{label}</span>
    </Button>
  );
};


const StyledJobLink = styled(JobLink)`
  &.link {
    font-weight: 400;
    text-align: center;
    border-radius: 14px;
    padding: 8px 16px;
    border-color: var(--background-accent-tertiary);
    background-color: var(--background-accent-tertiary);
    color: var(--foreground-tertiary);
    min-width: 106px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }

  .icon {
    width: 14px;
  }

  span {
    display: inline-block;
    margin-left: 8px;
  }
`;


export default StyledJobLink;
