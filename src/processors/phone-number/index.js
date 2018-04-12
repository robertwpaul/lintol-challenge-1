const { isValidNumber } = require('libphonenumber-js');

function hasPhoneNumbers(data) {
  const possibilities = data.match(/[0-9+()-\s]+/g);
  if (possibilities === null) return false;
  return possibilities.some(num => isValidNumber(num, 'GB'))
}

function run(item) {
  return new Promise(function(resolve) {
    if (hasPhoneNumbers(item.data)) {
      resolve([
        {
          code: 'PHONE_NUMBER_FOUND',
          message: 'Found a phone number!',
          item
        }
      ])
    } else {
      resolve([]);
    }
  });
}

module.exports = {
  run
}
