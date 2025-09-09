import * as React from 'react';
import {describe, expect, it} from 'vitest';
import { render, screen } from '@testing-library/react';

import SimpleText from './SimpleText';

describe('SimpleText', () => {
  it('renders SimpleText component', () => {
    render(<SimpleText />); // рендерим компонент средствами react-testing-library
    const visibleEl = screen.getByText('Simple static text'); // пытаемся найти на экране что-то с текстом Simple static text"
    expect(visibleEl).toBeInTheDocument(); // ожидаем, что это "что-то" есть на экране
  });
});