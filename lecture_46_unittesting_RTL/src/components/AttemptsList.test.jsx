import * as React from 'react';
import {describe, expect, it, vi} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import AttemptsList from './AttemptsList';

describe('AttemptsList', () => {

  it('AttemptsList render', () => {
    render(<AttemptsList attempts={[ {id:1, attemptData: 'SimpleAttempt'}, {id:1, attemptData: 'SimpleAttempt'} ]} dropAttempt={() => {}} />);
    const attemptEl = screen.getByText('SimpleAttempt 1');
    expect(attemptEl).toBeInTheDocument();
    const attemptEl2 = screen.getByText('SimpleAttempt 2');
    expect(attemptEl2).toBeInTheDocument();
  });

  it('AttemptsList click handler', () => {
    // делаем заглушку - типа функцию обработчик клика
    const dropAttemptMock = vi.fn();
    // рендерим компонент с пропсами
    render(<AttemptsList attempts={[ {id:1, attemptData: 'SimpleAttempt'} ]} dropAttempt={dropAttemptMock} />);
    // ищем нечто с текстом SimpleAttempt 1
    const attemptEl = screen.getByText('SimpleAttempt 1');
    expect(attemptEl).toBeInTheDocument();
    // генерируем событие клика на этом элементе
    fireEvent.click(attemptEl);
    // ожидаем, что после этого наша функция-обработчик будет вызвана один раз
    expect(dropAttemptMock).toBeCalledTimes(1);
    expect(dropAttemptMock).toBeCalledWith(1);
  });
});