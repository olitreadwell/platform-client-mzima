import { DateAgoPipe } from './date-ago.pipe';

describe('DateAgoPipe', () => {
  let pipe: DateAgoPipe;
  let now: number;

  beforeEach(() => {
    pipe = new DateAgoPipe();
    now = Date.now();
    jest.spyOn(Date, 'now').mockReturnValue(now);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns a long time ago for falsy values', () => {
    expect(pipe.transform(null)).toBe('a long time ago');
    expect(pipe.transform(undefined)).toBe('a long time ago');
    expect(pipe.transform('')).toBe('a long time ago');
  });

  it('returns just now for timestamps less than 10 seconds old', () => {
    expect(pipe.transform(new Date(now - 5000).toISOString())).toBe('just now');
  });

  it('returns a moment ago for timestamps less than a minute old', () => {
    expect(pipe.transform(new Date(now - 30000).toISOString())).toBe('a moment ago');
  });

  it('returns minutes ago with pluralization', () => {
    expect(pipe.transform(new Date(now - 2 * 60 * 1000).toISOString())).toBe('2 minutes ago');
  });

  it('returns hours ago with pluralization', () => {
    expect(pipe.transform(new Date(now - 3 * 60 * 60 * 1000).toISOString())).toBe('3 hours ago');
  });

  it('returns days ago with pluralization', () => {
    expect(pipe.transform(new Date(now - 4 * 24 * 60 * 60 * 1000).toISOString())).toBe(
      '4 days ago',
    );
  });

  it('returns months ago with pluralization', () => {
    expect(pipe.transform(new Date(now - 2 * 30 * 24 * 60 * 60 * 1000).toISOString())).toBe(
      '2 months ago',
    );
  });

  it('returns years ago with pluralization', () => {
    expect(pipe.transform(new Date(now - 2 * 12 * 30 * 24 * 60 * 60 * 1000).toISOString())).toBe(
      '2 years ago',
    );
  });
});
