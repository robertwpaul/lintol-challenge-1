const processor = require('../');

test('No Vehicle registration is present', () => {
  const item = {
    data: 'This is not an vehicle registration',
  };

  expect.assertions(1);
  processor.run(item).then(item => expect(item).toEqual([]));
});

test('A Vehicle registration is identified', () => {
  const item = {
    data: 'This contains a vehicle registration BD51 SMR',
  };

  const expected = [
    {
      code: 'VEHICLE_REGISTRATION_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
