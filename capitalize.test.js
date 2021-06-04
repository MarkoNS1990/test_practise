const capitalize = require('./capitalize');

test('Should make the first letter capitalized', () => {
  expect(capitalize('word')).toBe('Word');
});

test("Should return wrong input if not a string is given", () => {
    const t = () => {
      throw 'wrong input';
    };
    expect(t).toThrow('wrong input');
  });
