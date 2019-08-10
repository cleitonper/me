import React, { FunctionComponent, useState, useRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useClickOutside } from '~hooks/useClickOutside';
import { Button } from '~components/Button';
import { Tag } from '~components/Tag';
import { Props } from './types';

const Job = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  transition-property: all;
  transition-duration: var(--transition-default-timing);
  text-align: center;
  z-index: 5;
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 32px 16px 48px;
  border-radius: 24px;
  background-color: var(--background-tertiary);
  color: var(--foreground-tertiary);
  position: absolute;
  left: 0;
  top: 0;

  ${Button} {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    border-radius: 24px;
    padding: 4px 16px;
    margin-bottom: 24px;
    border-color: var(--background-accent-tertiary);
    background-color: var(--background-accent-tertiary);
    color: var(--foreground-tertiary);
  }
`;

const JobDescription = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  line-height: 1.45em;
  letter-spacing: 0.015em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  max-width: 300px;
`;

const JobFooter = styled.footer`
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, .55);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  ${Tag} {
    margin-right: 8px;
  }
`;

const Banner = styled.img`
  transition-duration: var(--transition-default-timing);
  transition-property: all;
  cursor: pointer;
  max-width: 100%;
  border-radius: 24px;
  position: relative;
  z-index: 10;

  &.is-open {
    pointer-events: none;
    transform: scale(1.35);
    opacity: 0;
  }

  &.is-open ~ ${Job} {
    opacity: 1;
  }
`;

const Container = styled.div`
  border-radius: 24px;
  position: relative;
  overflow: hidden;
`;

const BannerJob: FunctionComponent<Props> = ({ className, image, description, tags, ...props }) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = (): void => setIsOpen(true);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <Container ref={containerRef} className={className}>
      <Banner
        src={image}
        alt={description}
        className={classnames({ 'is-open': isOpen })}
        onClick={open}
        {...props}
      />
      <Job className={classnames({ 'is-open': isOpen  })}>
        <JobDescription>
          {description}
        </JobDescription>
        <Button>Código Fonte</Button>
        <JobFooter>
          {tags.map(
            (tag) =>
              <Tag
                key={tag.name}
                background={tag.background}
                foreground={tag.foreground}>
                {tag.name}
              </Tag>
          )}
        </JobFooter>
      </Job>
    </Container>
  );
};

export default styled(BannerJob)``;
