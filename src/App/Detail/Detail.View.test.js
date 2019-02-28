import React from 'react';
import renderer from 'react-test-renderer';

import View from './View';

it('Renders Detail component: loading = true', () => {
  const component = (<View hero={{}} loading={true} />);
  const index = renderer
    .create(component)
    .toJSON();

  expect(index).toMatchSnapshot();
});

it('Renders Detail component: loading = false', () => {
  const component = (<View hero={{
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