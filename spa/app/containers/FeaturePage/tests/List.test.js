import React from 'react';
import { render } from '@testing-library/react';

import List from '../List';

const renderComponent = (props = {}) => {
  const utils = render(<List {...props} />);
  const element = utils.container.firstChild;
  return { ...utils, element };
};

describe('<List />', () => {
  it('should render an <ul> tag', () => {
    const { element } = renderComponent();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('UL');
  });

  it('should have a class attribute', () => {
    const { element } = renderComponent();
    expect(element).toHaveAttribute('class');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { element } = renderComponent({ id });
    expect(element).toHaveAttribute('id', id);
  });

  it('should not adopt an invalid attribute', () => {
    const { element } = renderComponent({ attribute: 'test' });
    expect(element).not.toHaveAttribute('attribute');
  });
});
