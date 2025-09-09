import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './mathUtils';

describe(
  'Test "add" function',
  () => {
    it('Check number+number', () => {
      const result = add(2,2);
      expect(result).toBe(4);
    });
    it('Check non-number argument', () => {
      const result = add('2', 2);
      expect(result).toBe('something went wrong!');
    });
    it('Check NaN argument', () => {
      const result = add(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)

describe(
  'Test "subtract" function',
  () => {
    it('Check number-number', () => {
      const result = subtract(2,2);
      expect(result).toBe(0);
    });
    it('Check non-number argument', () => {
      const result = subtract('2', 2);
      expect(result).toBe('something went wrong!');
    });
    it('Check NaN argument', () => {
      const result = subtract(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)

describe(
  'Test "multiply" function',
  () => {
    it('Check number*number', () => {
      const result = multiply(2,4);
      expect(result).toBe(8);
    });
    it('Check non-number argument', () => {
      const result = multiply('2', 2);
      expect(result).toBe('something went wrong!');
    });
    it('Check NaN argument', () => {
      const result = multiply(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
  }
)

describe(
  'Test "divide" function',
  () => {
    it('Check number/number', () => {
      const result = divide(8,2);
      expect(result).toBe(4);
    });
    it('Check non-number argument', () => {
      const result = divide('2', 2);
      expect(result).toBe('something went wrong!');
    });
    it('Check NaN argument', () => {
      const result = divide(NaN, 2);
      expect(result).toBe('something went wrong!');
    });
    it('Check zero second argument', () => {
      const result = divide(8, 0);
      expect(result).toBe('cannot divide by zero!');
    });
  }
)