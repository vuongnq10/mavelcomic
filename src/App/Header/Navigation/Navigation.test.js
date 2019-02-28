import React from 'react';
import renderer from 'react-test-renderer';

import Navigation from './index';

it('Renders Navigation component', () => {
  const navigation = renderer
    .create(<Navigation />)
    .toJSON();

  expect(navigation).toMatchSnapshot();
});