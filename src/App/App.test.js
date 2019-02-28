import React from 'react';
import renderer from 'react-test-renderer';

import Index from './index';

it('Renders App component', () => {
  const component = (<Index>
    <span>This is children</span>
  </Index>);
  const index = renderer
    .create(component)
    .toJSON();

    expect(index).toMatchSnapshot();
    expect(index.children[0]).toMatchSnapshot();
    expect(index.children[1]).toMatchSnapshot();
});