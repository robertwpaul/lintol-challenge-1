const processor = require('../');

test('No IP address is present', () => {
  const item = {
    data: 'This is not an ip address',
  };

  expect.assertions(1);
  processor.run(item).then(item => expect(item).toEqual([]));
});

test('A IP address is identified', () => {
  const item = {
    data: 'This contains a ip address 192.168.0.1',
  };

  const expected = [
    {
      code: 'IP_ADDRESS_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
