import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

it('Renders Header component', () => {
  const header = renderer
    .create(<Header />)
    .toJSON();

  expect(header).toMatchSnapshot();
});