import React from 'react';
import { render } from '@testing-library/react-native';

import { App } from '../index';

test('Shows the Products list header', () => {
  // Arrange
  // ...

  // Act
  const { getByText } = render(<App />);
  // Assert
  expect(getByText('Products')).toBeTruthy();
});
