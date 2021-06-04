const sum = require('./sum');

test('Should make the first letter capitalized', () => {
  expect(sum('word')).toBe('Word');
});

test("Test description", () => {
    const t = () => {
      throw new TypeError();
    };
    expect(t).toThrow(TypeError);
  });
