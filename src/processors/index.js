const ip = require('./ip');
const phoneNumber = require('./phone-number');
const nationalInsuranceNumber = require('./national-insurance');
const email = require('./email');

module.exports = {
  textProcessors: [
    ip,
    phoneNumber,
    nationalInsuranceNumber,
    email
  ]
};
