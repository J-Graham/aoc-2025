import { parseLines, parseInts } from './input-utils';

describe('input-utils', () => {
  it('should parse lines correctly', () => {
    const input = `line1\nline2\nline3`;
    expect(parseLines(input)).toEqual(['line1', 'line2', 'line3']);
  });

  it('should parse integers correctly', () => {
    const input = `10\n20\n30`;
    expect(parseInts(input)).toEqual([10, 20, 30]);
  });
});
