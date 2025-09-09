import {describe, expect, it, vi} from 'vitest';
import { chooseCallback, duplicate } from './complexUtils';

describe(
  'Test "duplicate" function',
  () => {
    it( 'Check numbers duplication', () => {
      expect(duplicate([1,2,3])).toEqual([2,4,6]);
    });

    it( 'Check strings duplication', () => {
      expect(duplicate(['1','2','3'])).toEqual(['11','22','33']);
    });

    it( 'Check non-number and non-string args', () => {
      expect(duplicate([1,'2',true,{}])).toEqual([2, '22', null, null]);
    })
  }
);

describe(
  'Test "chooseCallback" function',
  () => {
    it('Check first callback', () => {
      // Делаем т.н. "моки" - то есть липовые функции (заглушки)
      const firstCallback = vi.fn();
      const secondCallback = vi.fn();
      // вызываем нашу функцию, которую мы хотим протестировать
      chooseCallback(firstCallback, secondCallback, 'first');
      // проверяем, что первый колбэк был вызван хотя бы 1 раз
      expect(firstCallback).toBeCalled();
      // проверяем что второй колбэк не был вызван совсем
      expect(secondCallback).not.toBeCalled();
    });
  }
);