const ip = require('./ip');
const phoneNumber = require('./phone-number');
const nationalInsuranceNumber = require('./national-insurance');

module.exports = {
  textProcessors: [
    ip,
    phoneNumber,
    nationalInsuranceNumber
  ]
};
