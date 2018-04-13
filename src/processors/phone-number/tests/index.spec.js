const processor = require('../');

test('No Phone Number is present', () => {
  const item = {
    data: 'This is not an phone number',
  };

  expect.assertions(1);
  processor.run(item).then(item => expect(item).toEqual([]));
});

test('A Phone Number is identified', () => {
  const item = {
    data: 'This contains a phone number 01509 813888',
  };

  const expected = [
    {
      code: 'PHONE_NUMBER_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
