import { SortByFieldPipe } from './sort-by.pipe';

describe('SortByFieldPipe', () => {
  let pipe: SortByFieldPipe;

  beforeEach(() => {
    pipe = new SortByFieldPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('sorts ascending by default', () => {
    const result = pipe.transform([{ n: 3 }, { n: 1 }, { n: 2 }], 'n');
    expect(result.map((item) => item.n)).toEqual([1, 2, 3]);
  });

  it('sorts descending when order is desc', () => {
    const result = pipe.transform([{ n: 3 }, { n: 1 }, { n: 2 }], 'n', 'desc');
    expect(result.map((item) => item.n)).toEqual([3, 2, 1]);
  });

  it('sorts strings alphabetically', () => {
    const result = pipe.transform([{ name: 'beta' }, { name: 'alpha' }], 'name');
    expect(result.map((item) => item.name)).toEqual(['alpha', 'beta']);
  });

  it('keeps equal values in place', () => {
    const result = pipe.transform([{ n: 1 }, { n: 1 }], 'n');
    expect(result.map((item) => item.n)).toEqual([1, 1]);
  });
});
