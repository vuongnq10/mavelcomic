import React from 'react';
import renderer from 'react-test-renderer';

import Character from './index';

it('Renders Character component', () => {
  const character = renderer
    .create(<Character
      id={123}
      name="Comic"
      thumbnail={{
        path: 'path',
        extension: 'extension'
      }}
      description="`description`"
    />)
    .toJSON();

  expect(character).toMatchSnapshot();
});