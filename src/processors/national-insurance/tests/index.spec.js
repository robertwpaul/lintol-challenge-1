const processor = require('../');

test('No National Insurance Number is present', () => {
  const item = {
    data: 'This is not an national insurance number',
  };

  expect.assertions(1);
  processor.run(item).then(item => expect(item).toEqual([]));
});

test('A National Insurance Number is identified', () => {
  const item = {
    data: 'This contains a national insurance number QQ 12 34 56 C',
  };

  const expected = [
    {
      code: 'NI_NUMBER_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
