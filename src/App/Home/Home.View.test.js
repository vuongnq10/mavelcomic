import React from 'react';
import renderer from 'react-test-renderer';

import View from './View';

it('Renders Home View component: loading=true', () => {
  const view = renderer
    .create(<View characters={[]} loading={true} />)
    .toJSON();

  expect(view).toMatchSnapshot();
});

it('Renders Home View component loading=false', () => {
  const view = renderer
    .create(<View characters={[]} loading={false} />)
    .toJSON();

  expect(view).toMatchSnapshot();
});