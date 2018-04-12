const ip = require('./ip');
const phoneNumber = require('./phone-number');

module.exports = {
  textProcessors: [
    ip,
    phoneNumber
  ]
};
