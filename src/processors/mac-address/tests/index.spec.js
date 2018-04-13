const processor = require('../');

test('No MAC address is present', () => {
  const item = {
    data: 'This is not an MAC address',
  };

  expect.assertions(1);
  processor.run(item).then(item => expect(item).toEqual([]));
});

test('A MAC address delimited by hyphens is identified', () => {
  const item = {
    data: 'This contains a MAC address c7-0a-a3-a4-ce-fe',
  };

  const expected = [
    {
      code: 'MAC_ADDRESS_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});

test('A MAC address deliminated by colons is identified', () => {
  const item = {
    data: 'This contains a MAC address b0:13:d7:59:a6:22',
  };

  const expected = [
    {
      code: 'MAC_ADDRESS_FOUND',
    },
  ];

  expect.assertions(1);
  return processor
    .run(item)
    .then(item => expect(item.code).toEqual(expected.code));
});
