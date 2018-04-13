const emailProcessor = require('../');

test('No email address is present', () => {
  const item = {
    data: 'This is not an email address',
  };

  expect.assertions(1);
  emailProcessor.run(item).then(item => expect(item).toEqual([]));
});

test('A .biz address is identified', () => {
  const item = {
    data: 'This is an email address aurore@farrell.biz',
  };

  const expected = [
    {
      code: 'EMAIL_ADDRESS_FOUND',
    },
  ];

  expect.assertions(1);
  return emailProcessor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
