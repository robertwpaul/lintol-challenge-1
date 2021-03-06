const processor = require('../');

test('No email address is present', () => {
  const item = {
    data: 'This is not an email address',
  };

  expect.assertions(1);
  processor.run(item).then(item => expect(item).toEqual([]));
});

test('A .biz address is identified', () => {
  const item = {
    data: 'This contains a email address aurore@farrell.biz',
  };

  const expected = [
    {
      code: 'EMAIL_ADDRESS_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
