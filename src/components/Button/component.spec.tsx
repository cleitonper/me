import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as gatsby from 'gatsby';
import { Button } from '.';


jest.mock('gatsby', () => require('~config/jest/mock/gatsby'));


describe('Component: Button', () => {
  describe('Type: any', () => {
    it('should use the default fill', () => {
      const buttonText = 'Click';
      const { getByText } = render(<Button>{buttonText}</Button>);
      expect(getByText(buttonText)).toHaveClass('fill-default');
    });

    it('should use the clear fill', () => {
      const buttonText = 'Click';
      const { getByText } = render(<Button fill="clear">{buttonText}</Button>);
      expect(getByText(buttonText)).toHaveClass('fill-clear');
    });

    it('should trigger the click event', () => {
      const buttonEventHandler = jest.fn();
      const internalLinkEventHandler = jest.fn();
      const internalTargetEventHandler = jest.fn();
      const externalLinkEventHandler = jest.fn();

      const buttonText = 'Click';
      const internalLink = '/blog';
      const internalTarget = '#main-footer';
      const externalLink = 'https://me.dev';

      const buttonSelector = render(<Button onClick={buttonEventHandler}>{buttonText}</Button>);
      const anchorSelector = render(<Button href={internalTarget} onClick={internalTargetEventHandler}>{internalTarget}</Button>);
      const internalSelector = render(<Button href={internalLink} onClick={internalLinkEventHandler}>{internalLink}</Button>);
      const externalSelector = render(<Button href={externalLink} onClick={externalLinkEventHandler}>{externalLink}</Button>);

      fireEvent.click(buttonSelector.getByText(buttonText));
      fireEvent.click(anchorSelector.getByText(internalTarget));
      fireEvent.click(internalSelector.getByText(internalLink));
      fireEvent.click(externalSelector.getByText(externalLink));

      expect(buttonEventHandler).toBeCalledTimes(1);
      expect(internalTargetEventHandler).toBeCalledTimes(1);
      expect(internalLinkEventHandler).toBeCalledTimes(1);
      expect(externalLinkEventHandler).toBeCalledTimes(1);
    });
  });


  describe('Type: button', () => {
    it('should not have default values for the rel and target attributes', () => {
      const { getByTestId } = render(<Button>Hello</Button>);
      expect(getByTestId('button')).not.toHaveAttribute('href');
      expect(getByTestId('button')).not.toHaveAttribute('rel', 'noopener noreferrer nofollow');
      expect(getByTestId('button')).not.toHaveAttribute('target', '_blank');
    });
  });


  describe('Type: external link', () => {
    it('should have default values for the rel and target attributes', () => {
      const href = 'https://me.me';
      const { getByTestId } = render(<Button href={href}>Hello</Button>);
      expect(getByTestId('button')).toHaveAttribute('href', href);
      expect(getByTestId('button')).toHaveAttribute('rel', 'noopener noreferrer nofollow');
      expect(getByTestId('button')).toHaveAttribute('target', '_blank');
    });

    it('should use the rel and target attributes', () => {
      const rel = 'bookmark';
      const target = '_top';
      const href = 'https://me.me';
      const { getByTestId } = render(<Button href={href} rel={rel} target={target}>Hello</Button>);
      expect(getByTestId('button')).toHaveAttribute('href', href);
      expect(getByTestId('button')).toHaveAttribute('rel', rel);
      expect(getByTestId('button')).toHaveAttribute('target', target);
      expect(getByTestId('button')).not.toHaveAttribute('rel', 'noopener noreferrer nofollow');
      expect(getByTestId('button')).not.toHaveAttribute('target', '_blank');
    });
  });


  describe('Type: internal link with anchor', () => {
    let target;
    let navigate;
    let scrollIntoView;

    beforeEach(() => {
      target = document.createElement('footer');
      scrollIntoView = jest.fn();

      jest.spyOn(document, 'querySelector').mockReturnValue(target);
      navigate = jest.spyOn(gatsby, 'navigate');
      target.scrollIntoView = scrollIntoView;
    });

    it('should scroll into view', () => {
      const { getByTestId } = render(<Button href="#footer">Hello</Button>);
      fireEvent.click(getByTestId('button'));
      expect(scrollIntoView).toBeCalled();
      expect(document.documentElement).not.toHaveClass('smoothless');
      expect(navigate).not.toBeCalled();
    });
  });


  describe('Type: internal link without an anchor', () => {
    let target;
    let navigate;
    let scrollIntoView;

    beforeEach(() => {
      target = document.createElement('footer');
      scrollIntoView = jest.fn();

      navigate = jest.spyOn(gatsby, 'navigate');
      jest.spyOn(document, 'querySelector').mockReturnValue(null);
      target.scrollIntoView = scrollIntoView;
    });

    it('should navigate to an internal page', () => {
      const { getByTestId } = render(<Button href="/">Hello</Button>);
      fireEvent.click(getByTestId('button'));
      expect(navigate).toBeCalledTimes(1);
      expect(scrollIntoView).not.toBeCalled();
      expect(document.documentElement).toHaveClass('smoothless');
    });
  });
});
