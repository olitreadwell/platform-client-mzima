import { PrependUrlPipe } from './prepend-url.pipe';

describe('PrependUrlPipe', () => {
  let pipe: PrependUrlPipe;

  beforeEach(() => {
    pipe = new PrependUrlPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns an http URL unchanged', () => {
    expect(pipe.transform('http://example.com/image.jpg', 'https://cdn.example.com/')).toBe(
      'http://example.com/image.jpg',
    );
  });

  it('returns an https URL unchanged', () => {
    expect(pipe.transform('https://example.com/image.jpg', 'https://cdn.example.com/')).toBe(
      'https://example.com/image.jpg',
    );
  });

  it('prepends the base URL to a relative path', () => {
    expect(pipe.transform('media/image.jpg', 'https://cdn.example.com/')).toBe(
      'https://cdn.example.com/media/image.jpg',
    );
  });

  it('prepends the base URL to a path with query string', () => {
    expect(pipe.transform('media/image.jpg?size=large', 'https://cdn.example.com/')).toBe(
      'https://cdn.example.com/media/image.jpg?size=large',
    );
  });
});
