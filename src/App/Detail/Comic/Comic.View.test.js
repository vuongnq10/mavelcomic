import React from 'react';
import renderer from 'react-test-renderer';

import View from './View';

it('Renders App component: loading = true', () => {
  const component = (<View comic={{}} loading={true} />);
  const index = renderer
    .create(component)
    .toJSON();

  expect(index).toMatchSnapshot();
});

it('Renders App component: loading = false', () => {
  const component = (<View comic={{
    name: 'abc',
    thumbnail: {
      path: 'path',
      extension: 'extension'
    }
  }} loading={false} />);
  const index = renderer
    .create(component)
    .toJSON();

  expect(index).toMatchSnapshot();
});