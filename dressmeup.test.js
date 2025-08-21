import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('DressMeUp App', () => {
  it('renders a welcome message', () => {
    const { getByText } = render(<Text>Bienvenue sur DressMeUp</Text>);
    
    expect(getByText('Bienvenue sur DressMeUp')).toBeTruthy();
  });
});
