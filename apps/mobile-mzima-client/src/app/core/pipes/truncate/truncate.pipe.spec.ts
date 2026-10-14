import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns the value unchanged when it is shorter than the limit', () => {
    expect(pipe.transform('short text', 20)).toBe('short text');
  });

  it('returns the value unchanged when it is exactly at the limit', () => {
    expect(pipe.transform('12345', 5)).toBe('12345');
  });

  it('truncates and appends an ellipsis when the value is longer than the limit', () => {
    expect(pipe.transform('123456', 5)).toBe('12345...');
  });

  it('uses a default limit of 200 characters', () => {
    const under = 'a'.repeat(200);
    const over = 'a'.repeat(201);
    expect(pipe.transform(under)).toBe(under);
    expect(pipe.transform(over)).toBe('a'.repeat(200) + '...');
  });
});
