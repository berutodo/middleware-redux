import sum from '../counter';
import { expect, test } from 'vitest';

test('should work as expected', () => {
    expect(sum(2, 1)).toBe(3)
});

test('should not work as expected', () => {
    expect(sum(1, 1)).toBe(3)
});