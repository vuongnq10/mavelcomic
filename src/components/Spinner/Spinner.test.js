import React from 'react';
import renderer from 'react-test-renderer';

import Index from './index';

it('Renders Spinner component', () => {
  const index = renderer
    .create(<Index />)
    .toJSON();

  expect(index).toMatchSnapshot();
});