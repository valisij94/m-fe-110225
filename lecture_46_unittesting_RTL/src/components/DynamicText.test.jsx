import * as React from 'react';
import {describe, expect, it} from 'vitest';
import { render, screen } from '@testing-library/react';

import DynamicText from './DynamicText';

describe('DynamicText', () => {
  it('renders DynamicText component without props', () => {
    render(<DynamicText />); // рендерим компонент средствами react-testing-library
    const visibleEl = screen.getByText('Dummy!'); // пытаемся найти на экране что-то с текстом Simple static text"
    expect(visibleEl).toBeInTheDocument(); // ожидаем, что это "что-то" есть на экране
  });

  it('renders DynamicText component with props', () => {
    render(<DynamicText text='Something'/>); // рендерим компонент средствами react-testing-library
    const visibleEl = screen.getByText('Something'); // пытаемся найти на экране что-то с текстом Simple static text"
    expect(visibleEl).toBeInTheDocument(); // ожидаем, что это "что-то" есть на экране
  });
});